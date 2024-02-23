import React, { useState } from 'react';
import axios from 'axios';
import './reminderCSS/addReminder.css';
import { Link } from "react-router-dom";
// import Navbar from '../Navbar';

function ReminderForm() {
    const [formData, setFormData] = useState({
        msg: '',
        phno: '',
        sDate: '',
        eDate: '',
        time: '',
        desc: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { sDate, eDate, time } = formData;
        const start = new Date(`${sDate} ${time}`);
        const end = new Date(`${eDate} ${time}`);

        if (start >= end) {
            alert('Ending date must be later than starting date');
        } else {
            try {
                await axios.post('http://localhost:8000/add', formData, { proxy: 'remProxy' });
                console.log('Data stored successfully:', formData); // Make sure to adjust the URL as needed
            } catch (error) {
                console.error('Error:', error);
            }
        }
    };

    return (
        <>
            {/* <div className='navSafeHeight' >&nbsp;</div>
            <Navbar /> */}
            <div className="containerAdd">
                <h1 className='SetARem'>Set a Reminder</h1>
                <form className='addRemForm' onSubmit={handleSubmit}>
                    <label htmlFor="msg" className="msg_desc">
                        <span className="req">*</span>Reminder Name:{' '}
                    </label>
                    <input
                        type="text"
                        name="msg"
                        id="msg"
                        required
                        value={formData.msg}
                        onChange={handleChange}
                    />
                    <br />

                    <label htmlFor="phno" className="msg_desc">
                        <span className="req">*</span>Phone Number:{' '}
                    </label>
                    <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
                        <input
                            type="tel"
                            name="countrycode"
                            id="countrycode"
                            size={1}
                            required
                            disabled
                            value='+91'
                            style={{ marginRight: 10 }}
                        />
                        <input
                            type="number"
                            name="phno"
                            id="phno"
                            required
                            value={formData.phno}
                            onChange={handleChange}
                        />
                        <br />
                    </div>

                    <div className="dnt">
                        <label htmlFor="sDate">
                            <span className="req">*</span>Reminder Starting Date:&nbsp;{' '}
                        </label>
                        <input
                            type="date"
                            name="sDate"
                            id="sDate"
                            required
                            value={formData.sDate}
                            onChange={handleChange}
                            min={new Date().toISOString().split('T')[0]}
                        />
                    </div>
                    <br />

                    <div className="dnt">
                        <label htmlFor="eDate">
                            <span className="req">*</span>Reminder Ending Date:&nbsp;{' '}
                        </label>
                        <input
                            type="date"
                            name="eDate"
                            id="eDate"
                            required
                            value={formData.eDate}
                            onChange={handleChange}
                            min={new Date(new Date().getTime() + (24 * 60 * 60 * 1000)).toISOString().split('T')[0]}
                        />
                    </div>
                    <br />

                    <div className="dnt">
                        <label htmlFor="time">
                            <span className="req">*</span>Reminder Time:&nbsp;{' '}
                        </label>
                        <input
                            type="time"
                            name="time"
                            id="time"
                            required
                            value={formData.time}
                            onChange={handleChange}
                        />
                    </div>
                    <br />

                    <label htmlFor="desc" className="msg_desc">
                        <span className="req">*</span>Reminder Description:{' '}
                    </label>
                    <br />
                    <textarea
                        name="desc"
                        id="desc"
                        required
                        value={formData.desc}
                        onChange={handleChange}
                    ></textarea>
                    <br />

                    <button type="submit" id="subBut">
                        Submit Details
                    </button>
                </form>
                <Link to="/showRems" style={{ float: 'right', color: 'Blue' }}>Show My Reminders </Link><br />
            </div>
        </>
    );
}

export default ReminderForm;
