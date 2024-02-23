const express = require("express");
// const nodemailer = require("nodemailer");
const app = express();
app.use(express.json());

const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
require('events').EventEmitter.defaultMaxListeners = 31;

const mongoose = require("mongoose");
mongoose
    .connect("mongodb://127.0.0.1:27017/UsersDB")
    .then(() => {
        console.log("UsersDB Connected");
    })
    .catch((err) => {
        console.log(err);
    });
const userSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true,
    },
    lname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        reuired: true,
        unique: true,
    },
    // phoneno: {
    //     type: Number,
    //     required: true,
    //     unique: true,
    // },
    password: {
        type: String,
        required: true,
    },
    userType: {
        type: String,
        required: true,
    },
});
const adminSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true,
    },
    lname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        reuired: true,
        unique: true,
    },
    // phoneno: {
    //     type: Number,
    //     required: true,
    //     unique: true,
    // },
    password: {
        type: String,
        required: true,
    },
    userType: {
        type: String,
        required: true,
    },
    secretKey: {
        type: String,
        required: true,
        unique: true,
    },
    token: String,
});

const userModel = mongoose.model("User", userSchema);
const adminModel = mongoose.model("Admin", adminSchema);

app.post("/register", async (req, res) => {

    try {
        if (req.body.userType == "User") {
            const data = await userModel.create(req.body);
        } else if (req.body.userType == "Admin") {
            const data = await adminModel.create(req.body);
        }
        res.json({ status: "ok", message: "Registration successful" });
    } catch (error) {
        console.error("Error during registration:", error);
        res.status(500).json({ status: "error", message: "Something went wrong" });
    }

});

app.post("/login-user", async (req, res) => {
    try {
        const user = await userModel.findOne({ email: req.body.email, password: req.body.password });
        if (user) {
            // console.log("Logged in");
            res.json({ status: "ok", data: user });
        } else {
            const user = await adminModel.findOne({ email: req.body.email, password: req.body.password });
            if (user) {
                // console.log("Logged in");
                res.json({ status: "ok", data: user });
            } else {
                console.log("User not found");
                res.status(404).json({ status: "error", message: "User not found" });
            }
        }
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({ status: "error", message: "Something went wrong" });
    }
});

app.post("/userData", async (req, res) => {
    try {
        const token = req.body.token;

        // Fetch user data based on the token
        const user = await userModel.findOne({ token: token });
        if (user) {
            res.json({ status: "ok", data: user });
        } else {
            const user = await adminModel.findOne({ token: token });
            if (user) {
                res.json({ status: "ok", data: user });
            } else {
                res.status(404).json({ status: "error", message: "User not found" });
            }
        }
    } catch (error) {
        console.error("Error fetching user data:", error);
        res.status(500).json({ status: "error", message: "Something went wrong" });
    }
});




app.listen(8080);
