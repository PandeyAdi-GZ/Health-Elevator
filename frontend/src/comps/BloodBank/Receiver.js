import React from "react";
import { Button, Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
export default function Receiver({ type }) {
	return (
		<>
			<Form.Item label="Name" required>
				<Input
					name="name"

				/>
			</Form.Item>
			<Form.Item label="Aadhar Card Number" required>
				<Input
					name="name"

				/>
			</Form.Item>
			<Form.Item label="Blood group" required>
				<select
					name="bloodGroup"

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

				/>
			</Form.Item>
			<Form.Item label="Gender" required>
				<select style={{ width: 200, height: 30 }}>
					<option>Male</option>
					<option>Female</option>
					<option>Other</option>
				</select>
			</Form.Item>
			<Form.Item label="Reason for Blood Requirement" required>
				<TextArea
					name="reason"

				/>
			</Form.Item>
			<Button type="primary">Submit</Button>
		</>
	);
}
