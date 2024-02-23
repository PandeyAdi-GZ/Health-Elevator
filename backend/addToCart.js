const express = require('express')
const app = express()
const port = 5000
const mongoose = require('mongoose')
const cors = require('cors')
app.use(cors())
const mongoDB = async () => {
	try {
		await mongoose.connect("mongodb://127.0.0.1:27017/AddToCart", {
			useNewUrlParser: true,
		});
		console.log("Cart DB connected");
		const fetched_data = await mongoose.connection.db.collection("medicines").find({}).toArray();
		// console.log(fetched_data);
		global.med = fetched_data
		// console.log(global.med)
	} catch (err) {
		console.error("Cart DB Connection error", err);
	}
};
mongoDB()
app.use(express.json())
app.use('/', require("./Routes/DisplayData"))
app.get("/", (req, res) => {
	res.send("Hello World")
})
app.listen(port, () => {
	// console.log(`Server:${port}`)
})
