import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './reminderCSS/showReminders.css'; // Import your CSS file here
import { Link } from "react-router-dom";
import Navbar from '../Navbar';

function ShowReminders() {
	const [reminders, setReminders] = useState([]);

	let PhNoInfo;

	const fetchReminders = async (PhNoShow) => {
		PhNoInfo = PhNoShow;
		try {
			// const response = await axios.get(('/send/' + PhNoInfo)); // Adjust the API endpoint
			const response = await axios.get(('http://localhost:8000/send/' + PhNoInfo), { proxy: 'remProxy' }); // Adjust the API endpoint
			setReminders(response.data);
		} catch (error) {
			console.error('Error fetching reminders:', error);
		}
	};

	const removeReminder = async (id) => {
		try {
			// console.log(id);
			await axios.delete(`http://localhost:8000/del/${id}`);
			fetchReminders(document.getElementById("phnoShow").value); // Refresh reminders after deletion
		} catch (error) {
			console.error('Error deleting reminder:', error);
		}
	};

	useEffect(() => {
		// fetchReminders();
	}, []);

	return (
		<>
			<div className='navSafeHeight' >&nbsp;</div>
			<Navbar />
			<div className="headingOutside">Your Reminders <Link to="/addRem"><button>+</button></Link></div>

			<div className="input-container">
				<input
					type="number"
					name="phnoShow"
					placeholder="Enter your phone number"
					id="phnoShow"
					required
				/>
				<span id="searchPhNo" className="PhNoShow" onClick={() => { fetchReminders(document.getElementById("phnoShow").value) }} />
				<br />
				<br />
			</div>

			<div id="myReminders">
				{reminders.map((element) => (
					<div className="containerShow" key={element._id}>
						<span className="closeButton" onClick={() => removeReminder(element._id)}>x</span><br />
						<h1>{element.msg}</h1>
						<b>Reminder Starting Date:</b> {element.sDate}<br />
						<b>Reminder Ending Date:</b> {element.eDate}<br />
						<b>Reminder Time:</b> {element.time}<br />
						<b>Reminder Description:</b> <br />{element.desc}<br />
					</div>
				))}
			</div>
		</>
	);
}

export default ShowReminders;
