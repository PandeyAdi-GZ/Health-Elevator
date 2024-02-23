import React from 'react'
import { useEffect, useState } from "react";
import Add from "./Add";
import Navbar from '../Navbar';
// import Navbar from "./Navbar";
export default function Home() {
	const [medItem, setMedItems] = useState([])
	const loadData = async () => {
		try {
			let response = await fetch("http://localhost:5000/medData", {
				method: "POST",
				headers: {
					'Content-Type': "application/json"
				},
				proxy: 'cartProxy'
			})
			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}
			response = await response.json()
			setMedItems(response[0])
			console.log(response);
		} catch (error) {
			console.error("Error:", error)
		}
	}
	useEffect(() => {
		loadData()
	}, [])
	return (
		<>
			<Navbar />
			<div className="container" >
				{
					medItem && medItem.length !== 0 ?
						medItem.map(filterItems => {
							return (
								<div className="row mb-3" style={{ display: "inline-block" }}>
									<div key={filterItems._id} className="col-12 col-6 col-lg-3">
										<Add
											medItem={filterItems}
										// medName={filterItems.name}
										// MedPrice={filterItems.price}
										// imgSrc={filterItems.img}
										// MedDes={filterItems.description}
										/>
									</div>
								</div>
							)
						}
						) :
						<div>No such Data Found</div>
				}
			</div>
		</>
	)
}
