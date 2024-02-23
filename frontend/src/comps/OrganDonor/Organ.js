import { Form, Input, Radio } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";
import Receiver from "./OrganReceiver";
import { Checkbox } from "antd";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import Swal from "sweetalert2";
import Navbar from "../Navbar";

export default function Organ() {
	const handleclick = () => (
		Swal.fire(
			'Your submitted details will be given to the people who are in need of organ.'
		)
	)
	const onChange = (e: CheckboxChangeEvent) => {
		console.log(`checked = ${e.target.checked}`);
	};
	const [type, setType] = React.useState("donate");
	return (
		<div className=" h-screen  items-center justify-center  bg-primary" >

			<Navbar />
			<Form
				layout="vertical"
				className="bg-white rounded shadow grid grid-cols-3 p-5 gap-3"
			>
				<h1 className="cols-span-3 uppercase text-2xl">
					<span className="text-primary">{type.toUpperCase()} Organ</span>
					<hr />
				</h1>
				<Radio.Group
					onChange={(e) => setType(e.target.value)}
					value={type}
					className="col-span-3"
				>
					<Radio value="donate">Donate</Radio>
					<Radio value="receive">Receiver</Radio>
				</Radio.Group>
				{type === "donate" && (
					<>
						{" "}
						<Form.Item label="Name" required>
							<Input />
						</Form.Item>
						<Form.Item label="Aadhar Card Number" required>
							<Input />
						</Form.Item>
						<Form.Item label="Phone Number" required>
							<Input required />
						</Form.Item>
						<Form.Item label="Organ" required>
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
						<Form.Item label="Date of Birth" required>
							<Input />
						</Form.Item>
						<Form.Item label="Gender" required>
							<select style={{ width: 200, height: 30 }}>
								<option>Male</option>
								<option>Female</option>
								<option>Other</option>
							</select>
						</Form.Item>
						<Form.Item label="Address" className="col-span-2" required>
							<TextArea />
						</Form.Item>
						<Form.Item label="City" required>
							<Input />
						</Form.Item>
						<Form.Item label="State" required>
							<Input />
						</Form.Item>
						<Form.Item label="ZIP" required>
							<Input />
						</Form.Item>
						<h2 className="col-span-3 uppercase ">
							<span className="text-primary">Health Conditions:</span>

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
						<Form.Item label="Allergies (if any):">
							<Input />
						</Form.Item>
						<Form.Item
							label="Please list any chronic medical conditions or recent illnesses.(If not then enter NULL)"
							required
						>
							<Input />
						</Form.Item>
						<Form.Item label="Current Medications (if any)">
							<Input />
						</Form.Item>
						<Form.Item label="Have you ever Donated any Organ before?" required>
							<Radio.Group>
								<Radio value="yes">Yes</Radio>
								<Radio value="no">No</Radio>
							</Radio.Group>
						</Form.Item>
						<Form.Item label="If Yes then please specify:">
							<Input />
						</Form.Item>
						<Form.Item
							className="col-span-2"
							label="Do you have any preferences or conditions for your organ donation? (e.g., donation for research purposes, specific medical facility, etc.):"
						>
							<Input />
						</Form.Item>
						<Form.Item
							className="col-span-2"
							label="Is there anything else you would like to share or ask about organ donation?"
						>
							<Input />
						</Form.Item>
						<Checkbox onChange={onChange} className="col-span-3" required>
							By submitting this form, I acknowledge that I am expressing my
							interest in organ donation, and I understand that further medical
							evaluations will be required to determine eligibility for
							donation.
						</Checkbox>
						<button class="btn btn-success" onClick={handleclick}>Submit</button>
					</>
				)

				}

				{type === "receive" && <Receiver type={type} />}

			</Form>
		</div>
	);
}
