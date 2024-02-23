import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
	const [email, setEmail] = useState("");
	// const [phoneno, setPhoneNo] = useState("");
	const [password, setPassword] = useState("");

	async function handleSubmit(e) {
		e.preventDefault();

		try {
			const response = await fetch("/login-user", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
				body: JSON.stringify({
					email,
					password,
				}),
			});

			const data = await response.json();
			console.log(data, "userRegister");

			if (data.status === "ok") {
				alert("Login Successful");
				window.localStorage.setItem("token", data.data);
				window.localStorage.setItem("loggedIn", true);
				window.location.href = "./";
			}

			if (data.status === "error") {
				alert("Invalid Credentials");
			}
		} catch (error) {
			console.error("Error during login:", error);
		}
	}
	return (
		<div className="auth-wrapper">
			<div className="auth-inner">
				<form onSubmit={handleSubmit}>
					<h3>Sign In</h3>

					<div className="mb-3">
						<label>Email address</label>
						<input
							type="email"
							className="form-control"
							placeholder="Enter email"
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>

					<div className="mb-3">
						<label>Password</label>
						<input
							type="password"
							className="form-control"
							placeholder="Enter password"
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>

					<div className="mb-3">
						<div className="custom-control custom-checkbox">
							<input
								type="checkbox"
								className="custom-control-input"
								id="customCheck1"
							/>&nbsp;
							<label className="custom-control-label" htmlFor="customCheck1">
								Remember me
							</label>
						</div>
					</div>

					<div className="d-grid">
						<button type="submit" className="btn btn-primary">
							Submit
						</button>
					</div>
					<p className="forgot-password text-right">
						<Link to="/sign-up">Sign Up</Link>
						{/* <a href="/sign-up">Sign Up</a> */}
					</p>
				</form>
			</div>
		</div>
	);
}
