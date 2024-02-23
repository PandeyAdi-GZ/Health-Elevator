import React from 'react'
import Delete from '@mui/icons-material/Delete';

import { useCart, useDispatchCart } from './ContextReducer';
import { Link } from 'react-router-dom';
export default function Cart() {
	// const [totalPrice, setTotalPrice] = useState(props.medItem.price);
	let data = useCart();
	let dispatch = useDispatchCart();
	if (data.length === 0) {
		return (
			<div>
				<div className='m-5 w-100 text-center fs-3'>The Cart is Empty!</div>
			</div>
		)
	}
	let totalPrice = data.reduce((total, med) => total + parseFloat(med.price), 0)
	const handleCheckOut = async () => {
		alert(`Thank you for buying the medicine your total amount: ${totalPrice}`)
		data = []
	}
	
	return (
		<div>
			{console.log(data)}
			<div className='container m-auto mt-5 table-responsive  table-responsive-sm table-responsive-md' >
				<table className='table table-hover '>
					<thead className=' text-success fs-4'>
						<tr>
							<th scope='col'>#</th>
							<th scope='col'>Name</th>
							<th scope='col'>Quantity</th>
							<th scope='col'>Amount</th>
							<th scope='col'></th>
						</tr>
					</thead>
					<tbody>
						{data.map((med, index) => (
							<tr style={{color: 'wheat'}}>
								<th scope='row' >{index + 1}</th>
								<td >{med.name}</td>
								<td>{med.qty}</td>
								<td>{med.price}</td>
								<td ><button type="button" className="btn p-0" style={{color:'#d83848'}}>
									<Delete onClick={() => { dispatch({ type: "REMOVE", index: index }) }} />
								</button> </td></tr>
						))}
					</tbody>
				</table>
				<div><h1 className='fs-2' style={{color: 'white'}}>Total Price: {totalPrice}/-</h1></div>
				<div>
					<Link to="/"><button className='btn bg-success mt-5 ' style={{color:'wheat'}} onClick={handleCheckOut} > Check Out </button></Link>
				</div>
			</div>
		</div>
	)
}
