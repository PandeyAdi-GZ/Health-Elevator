const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3030;

mongoose
	.connect("mongodb://127.0.0.1:27017/BloodBankDB")
	.then(() => {
		console.log("BloodBankDB Connected");
	})
	.catch((err) => {
		console.log(err);
	});


app.use(bodyParser.json());
app.use(cors());

const donorSchema = new mongoose.Schema({
	userType: {
		type: String,
		required: true,
		enum: ["donate", "receive"],
		default: 'donate',
	},
	name: {
		type: String,
		required: true,
	},
	aadharCardNumber: {
		type: String,
		required: true,
	},
	bloodGroup: {
		type: String,
		enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-', 'Other'],
		required: true,
	},
	dateOfBirth: {
		type: String,
		required: true,
	},
	gender: {
		type: String,
		enum: ['Male', 'Female', 'Other'],
		required: true,
	},
	address: {
		type: String,
		required: true,
	},
	city: {
		type: String,
		required: true,
	},
	state: {
		type: String,
		required: true,
	},
	zip: {
		type: String,
		required: true,
	},
	eligibilityCriteria: {
		type: String,
		required: true,
	},
	medicalConditions: {
		type: String,
		required: true,
	},
	donatedBefore: {
		type: String,
		required: true,
	},
	lastDonationDate: {
		type: String,
	},
});

const receiverSchema = new mongoose.Schema({
	userType: {
		type: String,
		required: true,
		enum: ["donate", "receive"],
		default: 'receive',
	},
	name: {
		type: String,
		required: true,
	},
	aadharCardNumber: {
		type: String,
		required: true,
	},
	bloodGroup: {
		type: String,
		enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-', 'Other'],
		required: true,
	},
	dateOfBirth: {
		type: String,
		required: true,
	},
	gender: {
		type: String,
		enum: ['Male', 'Female', 'Other'],
		required: true,
	},
	reason: {
		type: String,
		required: true,
	},
});

const Donor = mongoose.model('Donor', donorSchema);
const Receiver = mongoose.model('Receiver', receiverSchema);

app.post('/api/Donor', async (req, res) => {
	try {
		const formData = req.body;

		if (formData.userType === 'donate') {
			const donorData = formData;
			donorData.dateOfBirth = new Date(donorData.dateOfBirth);
			if (donorData.lastDonationDate !== "null" && donorData.lastDonationDate !== "") {
				donorData.lastDonationDate = new Date(donorData.lastDonationDate);
			} else {
				donorData.lastDonationDate = null;
			}

			if (!donorData.gender) {
				return res.status(400).json({ error: 'Gender field is required' });
			}

			const newDonor = new Donor(formData);
			await newDonor.save();
			res.json({ message: 'Donor data saved successfully' });
		} else if (formData.userType === 'receive') {
			const newReceiver = new Receiver(formData);
			await newReceiver.save();
			res.json({ message: 'Receiver data saved successfully' });
		} else {
			res.status(400).json({ error: 'Invalid userType' });
		}
	} catch (error) {
		console.error('Error:', error);
		res.status(500).json({ error: 'An error occurred while saving data' });
	}
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
