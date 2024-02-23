import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function UserHome({ userData }) {
	const logOut = () => {
		window.localStorage.clear();
		// window.location.href = "./sign-in";
		window.location.href = "./";
	};
	return (
		<div className="auth-wrapper">
			<div className="auth-inner" style={{ textAlign: "center" }}>
				<div>
					{/* Name<h1>{userData.fname}</h1>
					Email <h1>{userData.email}</h1>
					<br /> */}
					Are you sure you want to Log Out?<br /><br />
					<button onClick={logOut} className="btn btn-primary" style={{ margin: '0.5rem' }}>YES</button>
					<Link to="/"><button className="btn btn-primary" style={{ margin: '0.5rem' }}>NO</button></Link>
				</div>
			</div>
		</div>
	);
}
