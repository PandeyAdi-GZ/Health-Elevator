// import { Button, Form, Input, Radio } from 'antd'
// import TextArea from 'antd/es/input/TextArea'
// import React from 'react'
// import Receiver from "./Receiver"
// import Navbar from '../Navbar';

// export default function Donor() {

// 	const [type, setType] = React.useState("donate")
// 	return (
// 		<div className='flex h-screen  items-center justify-center  bg-primary'>
// 			<Navbar />
// 			<Form layout="vertical" className='bg-white rounded shadow grid grid-cols-3 p-5 gap-3'>
// 				<h1 className='cols-span-3 uppercase text-2xl'>
// 					<span className='text-primary'>
// 						{type.toUpperCase()} Blood
// 					</span>
// 					<hr />
// 				</h1>
// 				<Radio.Group onChange={(e) => setType(e.target.value)} value={type} className='col-span-3'>
// 					<Radio value="donate">Donate</Radio>
// 					<Radio value="receive">Receiver</Radio>
// 				</Radio.Group>
// 				{type === "donate" && (
// 					<>
// 						{" "}
// 						<Form.Item label="Aadhar Card Number" required>
// 							<Input />
// 						</Form.Item>
// 						<Form.Item label="Blood group" required>
// 							<select style={{ width: 100, height: 30 }}>
// 								<option>A+</option>
// 								<option>A-</option>
// 								<option>B+</option>
// 								<option>B-</option>
// 								<option>AB</option>
// 								<option>AB+</option>
// 								<option>O+</option>
// 								<option>O-</option>
// 							</select>
// 						</Form.Item>
// 						<Form.Item label="Date of Birth" required>
// 							<Input />
// 						</Form.Item>
// 						<Form.Item label="Gender" required>
// 							<select style={{ width: 200, height: 30 }}>
// 								<option>Male</option>
// 								<option>Female</option>
// 								<option>Other</option>
// 							</select>
// 						</Form.Item>
// 						<Form.Item label="Address"
// 							className='col-span-2'
// 							required
// 						>
// 							<TextArea />
// 						</Form.Item>
// 						<Form.Item label="City" required>
// 							<Input />
// 						</Form.Item>
// 						<Form.Item label="State" required>
// 							<Input />
// 						</Form.Item>
// 						<Form.Item label="ZIP" required>
// 							<Input />
// 						</Form.Item>
// 						<h3 className='cols-span-3 uppercase '>
// 							<span className='text-primary'>
// 								Eligibility Criteria:
// 							</span>
// 							<hr />
// 						</h3>
// 						<Form.Item label="AGE" className='cols-span-3 ' required>
// 							<Radio.Group >
// 								<Radio value="17" >17 years or older</Radio>
// 								<Radio value="16" >16 years with parental consent</Radio>
// 							</Radio.Group>
// 						</Form.Item >
// 						<Form.Item
// 							// className='col-span-'
// 							label="Please list any chronic medical conditions or recent illnesses.(If not then enter NULL)" required>
// 							<Input />
// 						</Form.Item>
// 						<Form.Item
// 							label="Have you ever Donated blood before?" required>
// 							<Radio.Group >
// 								<Radio value="yes" >Yes</Radio>
// 								<Radio value="no" >No</Radio>
// 							</Radio.Group>
// 						</Form.Item>
// 						<Form.Item
// 							label="If Yes then please provide the date">
// 							<Input />
// 						</Form.Item>
// 					</>

// 				)}

// 				{type === "receive" && <Receiver type={type} />}
// 				<Button type="primary" block  >Submit</Button>
// 			</Form>
// 		</div>
// 	)
// } 



import { Button, Form, Input, Radio } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import React from 'react'
import Receiver from "./Receiver"
import { useState } from 'react'
import Swal from "sweetalert2";
import { Checkbox } from "antd";
import Navbar from "../Navbar";

export default function Donor() {
	const [type, setType] = React.useState("donate")
	const handleclick = () => (
		Swal.fire(
			'Your submitted details will be given to the people who are in need of blood.'
		)
	)
	const onChange = () => {
		console.log("checked ");
	};
	const [formData, setFormData] = useState({
		userType: type,
		name: '',
		aadharCardNumber: '',
		bloodGroup: '',
		dateOfBirth: '',
		gender: '',
		address: '',
		city: '',
		state: '',
		zip: '',
		eligibilityCriteria: '',
		medicalConditions: '',
		donatedBefore: '',
		lastDonationDate: '',
		// Add more fields as needed
	});
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
		if (name === 'dateOfBirth' || name === 'lastDonationDate') {
			const date = new Date(value);
			// Check if the date is valid, and if so, format it as "YYYY-MM-DD"
			if (!isNaN(date.getTime())) {
				value = date.toISOString().split('T')[0];
			}
		}
	};
	const handleSubmit = async () => {
		try {
			const response = await fetch('/api/Donor', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			});

			if (response.ok) {
				console.log('Donor data saved successfully');
			} else {
				console.error('Failed to save donor data');
			}
		} catch (error) {
			console.error('An error occurred:', error);
		}
		handleclick();
	};

	return (
		<div className=' h-screen  items-center justify-center  bg-primary'>
			<Navbar />
			<Form layout="vertical" className='bg-white rounded shadow grid grid-cols-3 p-5 gap-3'>
				<h1 className='cols-span-3 uppercase text-2xl'>
					<span className='text-primary'>
						{type.toUpperCase()} BLOOD
					</span>
					<hr />
				</h1>
				<Radio.Group onChange={(e) => setType(e.target.value)} value={type} className='col-span-3'>
					<Radio value="donate">Donate</Radio>
					<Radio value="receive">Receiver</Radio>
				</Radio.Group>
				{type === "donate" && (
					<>
						{" "}
						<Form.Item label="Name" required>
							<Input
								name="name"
								value={formData.name}
								onChange={handleInputChange}
							/>
						</Form.Item>
						<Form.Item label="Aadhar Card Number" required>
							<Input
								name="aadharCardNumber"
								value={formData.aadharCardNumber}
								onChange={handleInputChange}
							/>
						</Form.Item>
						<Form.Item label="Blood group" required>
							<select
								name="bloodGroup"
								value={formData.bloodGroup}
								onChange={handleInputChange}
								style={{ width: 100, height: 30 }}>
								<option>A+</option>
								<option>A-</option>
								<option>B+</option>
								<option>B-</option>
								<option>AB</option>
								<option>AB+</option>
								<option>O+</option>
								<option>O-</option>
							</select>
						</Form.Item>
						<Form.Item label="Date of Birth" required>
							<Input
								name="dateOfBirth"
								value={formData.dateOfBirth}
								onChange={handleInputChange}
							/>
						</Form.Item>
						<Form.Item label="Gender" required>
							<select
								name="gender"
								value={formData.gender}
								onChange={handleInputChange}
								style={{ width: 200, height: 30 }}>
								<option>Male</option>
								<option>Female</option>
								<option>Other</option>
							</select>
						</Form.Item>
						<Form.Item label="Address"
							className='col-span-2'
							required
						>
							<TextArea
								name="address"
								value={formData.address}
								onChange={handleInputChange}
							/>
						</Form.Item>
						<Form.Item label="City" required>
							<Input
								name="city"
								value={formData.city}
								onChange={handleInputChange}
							/>
						</Form.Item>
						<Form.Item label="State" required>
							<Input
								name="state"
								value={formData.state}
								onChange={handleInputChange}
							/>
						</Form.Item>
						<Form.Item label="ZIP" required>
							<Input
								name="zip"
								value={formData.zip}
								onChange={handleInputChange}
							/>
						</Form.Item>
						<h3 className='cols-span-3 uppercase '>
							<span className='text-primary'>
								Eligibility Criteria:
							</span>
							<hr />
						</h3>
						<Form.Item label="AGE" className='cols-span-3 ' required>
							<Radio.Group
								name="eligibilityCriteria"
								value={formData.eligibilityCriteria}
								onChange={handleInputChange}>
								<Radio value="17" >17 years or older</Radio>
								<Radio value="16" >16 years with parental consent</Radio>
							</Radio.Group>
						</Form.Item >
						<Form.Item
							// className='col-span-'
							label="Please list any chronic medical conditions or recent illnesses.(If not then enter NULL)" required>
							<Input
								name="medicalConditions"
								value={formData.medicalConditions}
								onChange={handleInputChange}
							/>
						</Form.Item>
						<Form.Item
							label="Have you ever Donated blood before?" required>
							<Radio.Group
								name="donatedBefore"
								value={formData.donatedBefore}
								onChange={handleInputChange}>
								<Radio value="yes" >Yes</Radio>
								<Radio value="no" >No</Radio>
							</Radio.Group>
						</Form.Item>
						<Form.Item
							label="If Yes then please provide the date">
							<Input
								name="lastDonationDate"
								value={formData.lastDonationDate}
								onChange={handleInputChange}
							/>
						</Form.Item>
						<Checkbox onChange={onChange} className="col-span-3" required>
							By submitting this form, I acknowledge that I am expressing my
							interest in blood donation, and I understand that further medical
							evaluations will be required to determine eligibility for
							donation.
						</Checkbox>
						<Button type="primary" block onClick={handleSubmit}  >Submit</Button>
					</>

				)}

				{type === "receive" && <Receiver type={type} />}

			</Form>
		</div>
	)
} 
