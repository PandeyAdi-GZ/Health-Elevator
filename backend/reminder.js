// < IMPORT EXPRESS AND MONGOOSE>
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static(__dirname + "\\public"));
app.listen(8000);
const mongoose = require('mongoose');
const cors = require('cors');
app.use(cors());
// </ IMPORT EXPRESS >



// // < CONNECT WITH USERSDB >
// mongoose
// 	.connect("mongodb://127.0.0.1/UsersDB")
// 	.then(()=>{console.log("UsersDB Connected")})
// 	.catch((err)=>{console.log(err)});
// // </ CONNECT WITH USERSDB >




// < INITIALIZE MONGO AND MONGOOSE >
mongoose
	.connect("mongodb://127.0.0.1:27017/RemindersDB")
	.then(() => {
		console.log("RemindersDB Connected");
	}).catch((err) => {
		console.log(err);
	});
const remSchema = new mongoose.Schema({
	msg: String,
	phno: Number,
	sDate: String,
	eDate: String,
	time: String,
	desc: String,
});
const remModel = new mongoose.model("Reminder", remSchema);
// </ INITIALIZE MONGO AND MONGOOSE >



// < SETTING BASE FOR DATE FORMAT >
const datetime = new Date();
const dd = datetime.getDate().toLocaleString('en-US', {
	minimumIntegerDigits: 2,
	useGrouping: false
});
const MM = parseInt(datetime.getMonth() + 1).toLocaleString('en-US', {
	minimumIntegerDigits: 2,
	useGrouping: false
});
const yyyy = datetime.getFullYear().toLocaleString('en-US', {
	minimumIntegerDigits: 2,
	useGrouping: false
});
// </ SETTING BASE FOR DATE FORMAT >



// < IMPORTING AND INITIALIZING WHATSAPP-WEB.JS AND QRCODE-TERMINAL >
const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
// const qrcode = require('qrcode');
require('events').EventEmitter.defaultMaxListeners = 31;

// const client = new Client();
const client = new Client({
	authStrategy: new LocalAuth(),
	puppeteer: {
		handleSIGINT: false,
	}
});
process.on('SIGINT', async () => {
	console.log('(SIGINT) Shutting down...');
	await this.client.destroy();
	console.log('client destroyed');
	process.exit(0);
});

client.on('qr', async (qr) => {
	// console.log(qr);
	qrcode.generate(qr, { small: true });
});

// client.on('qr', async (qrCode) => {
// 	const qrImage = await qrcode.toDataURL(qrCode);
// 	console.log(qrImage);
// });

// </ IMPORTING AND INITIALIZING WHATSAPP-WEB.JS AND QRCODE-TERMINAL >





// < CODE TO SEND REMINDER ON WHATSAPP >
var isWhatsAppRunning = false;
var WspMsg = async () => {
	isWhatsAppRunning = true;
	console.log('WhatsApp number has been integrated successfully');
	try {
		let remData = await remModel.find({});
		if (!remData || remData.length === 0) {
			console.log('No data found in the Rem collection.');
			return;
		}

		remData.forEach((remItem) => {
			const myChat = ("91" + remItem.phno + "@c.us");
			let current = new Date();
			let nextRem = new Date((yyyy + "-" + MM + "-" + dd) + " " + remItem.time);
			if (current > nextRem) {
				nextRem = new Date(nextRem.setDate(nextRem.getDate() + 1));
			}
			const start = new Date(remItem.sDate + " " + remItem.time);
			const end = new Date(remItem.eDate + " " + remItem.time);

			if (start >= end) {
				start.setDate(start.getDate() - 1);
			}

			if (current <= end) {
				if (current >= start) { } else {
					nextRem = start;
				}
				setTimeout(() => {
					client.sendMessage(myChat, (remItem.msg + "\n" + remItem.desc));
					console.log('Reminder has been sent successfully');
					const interval = setInterval(() => {
						client.sendMessage(myChat.id._serialized, (remItem.msg + "\n" + remItem.desc));
						console.log('Reminder has been sent successfully');
					}, (86400000));
					setTimeout(() => {
						clearInterval(interval);
						// }, parseFloat(((end - current + 60000).toString() + "n")));
					}, (end - current + 60000));
				}, (nextRem - current));
			} else {
				console.log("The reminder has been completed: " + remItem.msg);
			}
		});
	} catch (error) {
		console.error('Error:', error);
	}
};
client.on('ready', WspMsg);
client.initialize();
// </ CODE TO SEND REMINDER ON WHATSAPP>




// < CODE FOR EXPRESS.JS >
// app.get('/add', async (req, res) => {
// 	res.sendFile(__dirname + "\\addReminder.html");
// });

// app.get('/show', async (req, res) => {
// 	res.sendFile(__dirname + "\\showReminders.html");
// });

app.get('/send/(:phno)', async (req, res) => {
	let data = await remModel.find({ "phno": req.params.phno });
	res.send(data);
});

app.post('/add', async (req, res) => {
	// try{
	const data = await remModel.create(req.body);
	res.send(data);
	if (isWhatsAppRunning) {
		// window.location.href = "https://wa.me/918700726102?text=I'm%20interested%20in%20your%20car%20for%20sale";
		await client.destroy();
		isWhatsAppRunning = false;
		console.log("Old client was destroyed");
		await client.initialize();
	}
	// }catch (error) {
	//     console.error('Error:', error);
	//     res.status(500).send('Internal Server Error');
	//   }
});

app.delete('/del/(:id)', async (req, res) => {
	// console.log(req.params.id);
	const data = await remModel.deleteOne({ "_id": req.params.id });
	res.send(data);
});

app.delete('delAll', async (req, res) => {
	const data = await remModel.deleteMany({});
	res.send(data);
})

// app.patch('/updateRemStat', async (req, res) => {
// 	const data = await remModel.updateOne({ "isReminded": false }, { $set: { "isReminded": true } });
// 	res.send(data);
// });
// // </ CODE FOR EXPRESS.JS >

