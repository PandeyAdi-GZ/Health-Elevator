import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function SignUp() {
	const [fname, setFname] = useState("");
	const [lname, setLname] = useState("");
	const [email, setEmail] = useState("");
	const [phoneno, setPhoneNo] = useState("");
	const [password, setPassword] = useState("");
	const [userType, setUserType] = useState("User");
	const [secretKey, setSecretKey] = useState("");

	async function handleSubmit(e) {
		e.preventDefault();

		try {

			// // OTP STARTS
			// let otp = Math.random();
			// otp *= 1000000;
			// otp = Math.floor(otp);
			// console.log(otp);

			// let otpUser = prompt("Enter OTP that was sent to your phone number: ");
			// console.log(otpUser);
			// // OTP ENDS

			// let requestBody = {
			// 	fname,
			// 	lname,
			// 	email,
			// 	password,
			// 	userType,
			// };

			let requestBody = {
				fname,
				lname,
				email,
				password,
				userType,
			};

			if (userType === "Admin" && secretKey !== "SAMPLE") {
				alert("Invalid Admin");
				return;
			}

			if (userType === "Admin") {
				requestBody.secretKey = secretKey;
			}

			const response = await fetch(`/register`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
				body: JSON.stringify(requestBody),
			});
			const data = await response.json();
			console.log(data, "userRegister");

			if (data.status === "ok") {
				alert("Registration Successful");
			} else {
				alert("Something went wrong");
			}
		} catch (error) {
			console.error("Error during registration:", error);
		}
	}
	return (
		<div className="auth-wrapper">
			<div className="auth-inner">
				<form onSubmit={handleSubmit}>
					<h3>Sign Up</h3>
					{/* <div style={{ fontWeight: "bold" }}>
						Register As<br />
						<input
							type="radio"
							name="UserType"
							value="User"
							onChange={(e) => setUserType(e.target.value)}
						/> User&emsp;
						<input
							type="radio"
							name="UserType"
							value="Admin"
							onChange={(e) => setUserType(e.target.value)}
						/> Admin
					</div> */}
					{userType == "Admin" ? (
						<div className="mb-3">
							<label>Secret Key</label>
							<input
								type="text"
								className="form-control"
								placeholder="Secret Key"
								onChange={(e) => setSecretKey(e.target.value)}
							/>
						</div>
					) : null}

					<div className="mb-3">
						<label>First name</label>
						<input
							type="text"
							className="form-control"
							placeholder="First name"
							onChange={(e) => setFname(e.target.value)}
						/>
					</div>

					<div className="mb-3">
						<label>Last name</label>
						<input
							type="text"
							className="form-control"
							placeholder="Last name"
							onChange={(e) => setLname(e.target.value)}
						/>
					</div>

					<div className="mb-3">
						<label>Email address</label>
						<input
							type="email"
							className="form-control"
							placeholder="Enter email"
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>

					{/* <div className="mb-3">
						<label>Phone Number</label>
						<input
							type="number"
							className="form-control"
							placeholder="Enter phone number"
							onChange={(e) => setPhoneNo(e.target.value)}
						/>
					</div> */}

					<div className="mb-3">
						<label>Password</label>
						<input
							type="password"
							className="form-control"
							placeholder="Enter password"
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>

					<div className="d-grid">
						<button type="submit" className="btn btn-primary" style={{ width: "100%", borderRadius: 10 }}>Sign In</button>
					</div>
					<p className="forgot-password text-right">
						Already registered&nbsp;
						<Link to="/sign-in">sign in?</Link>
						{/* <a href="/sign-in">sign in?</a> */}
					</p>
				</form>
			</div>
		</div>
	);
}
