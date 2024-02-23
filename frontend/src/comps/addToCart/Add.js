import React, { useState } from "react";
import { useDispatchCart, useCart } from "./ContextReducer";


export default function Add(props) {

	let dispatch = useDispatchCart()
	let data = useCart()
	const [qty, setQty] = useState(1)
	const [totalPrice, setTotalPrice] = useState(props.medItem.price);

	const handleQtyChange = (e) => {
		const selectedQty = parseInt(e.target.value, 10);
		setQty(selectedQty);
		if (!isNaN(selectedQty)) {
			const newTotalPrice = selectedQty * props.medItem.price;
			setTotalPrice(newTotalPrice);
		} else {
			setTotalPrice(0);
		}
	};

	const handleAddToCart = async () => {
		await dispatch({
			type: "ADD", id: props.medItem._id,
			name: props.medItem.name,
			price: totalPrice,
			qty: qty
		})
		console.log(data)

	}


	return (
		<div className="m-3">
			<div className="card mb-3 mx-auto" style={{
          width: "25rem",
          zIndex: 999, // Lower z-index than the navbar
          position: "relative", // or position: "absolute"; depending on your layout
          marginTop: "150px", // Adjust the margin as needed to create space
        }}>
				<img width={"150"} height={"200"}
					src={props.medItem.img}
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body">
					<h5 className="card-title">{props.medItem.name}</h5>
					<p className="card-text">
						Description: {props.medItem.description}
					</p>
					<div className="container w-100 ">
						<select className="m-2 h-100 w-50 bg-success rounded" onChange={handleQtyChange}
							value={qty}>
							{Array.from(Array(6), (e, i) => {
								return (
									<option key={i + 1} value={i + 1}>{i + 1}</option>
								)
							})
							}
						</select>
						<div className="d-inline h-100 fs-5">
							{totalPrice}/-
						</div>
					</div>
				</div>
				<button className="btn btn-success justify-center" onClick={handleAddToCart}>Add to Cart</button>
				<br />
			</div>
		</div>
		
	);
}
