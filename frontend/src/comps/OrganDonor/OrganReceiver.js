import React from "react";
import { Form, Input, Radio } from "antd";

export default function OrganReceiver({ type }) {


	return (
		<>
			<Form.Item label="Name" required>
				<Input />
			</Form.Item>
			<Form.Item label="Aadhar Card Number" required>
				<Input />

			</Form.Item>
			<Form.Item label="Phone Number" required>
				<Input required />
			</Form.Item>
			<Form.Item label="Date of Birth" required>
				<Input required />
			</Form.Item>
			<Form.Item label="Gender" required>
				<select style={{ width: 200, height: 30 }}>
					<option>Male</option>
					<option>Female</option>
					<option>Other</option>
				</select>
			</Form.Item>
			<Form.Item label="Organ Request List" required>
				<select style={{ width: 100, height: 30 }}>
					<option>Heart</option>
					<option>Lungs</option>
					<option>Liver</option>
					<option>Kidneys</option>
					<option>Pancreas</option>
					<option>Intestines</option>
					<option>Corneas</option>
					<option>Skin</option>
					<option>Bone</option>
					<option>Bone Marrow</option>
				</select>
			</Form.Item>
			<h2 className='col-span-3 uppercase '>
				<span className='text-primary'>
					Health Conditions:
				</span>
				<hr />
			</h2>
			<Form.Item label="Blood type" required>
				<select style={{ width: 100, height: 30 }}>
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
			<Form.Item label="Allergies (if any):" >
				<Input />
			</Form.Item>
			<Form.Item
				label="Provide detailed information about your medical condition,
                 including any relevant medical records, test results, 
                 and the reason for needing an organ transplant." required>
				<Input />
			</Form.Item>
			<Form.Item label="Current Medications (if any)" >
				<Input />
			</Form.Item>
			<Form.Item
				label="Previous Transplants: " required>
				<Radio.Group >
					<Radio value="yes" >Yes</Radio>
					<Radio value="no" >No</Radio>
				</Radio.Group>
			</Form.Item>
			<Form.Item
				label="If Yes then please specify:">
				<Input />
			</Form.Item>
			<Form.Item className='col-span-2'
				label="Any specific medical requirements or preferences for the donor organ(s), if applicable:">
				<Input />
			</Form.Item>
			<button class="btn btn-success">Submit</button>
		</>
	);
}
