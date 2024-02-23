import React from 'react'
import { Link } from 'react-router-dom'
import newGif from "./new.gif";
import Badge from 'react-bootstrap/esm/Badge';
import { useCart } from './addToCart/ContextReducer';
import { useState } from 'react';
import Modal from './addToCart/modal';
import Cart from './addToCart/cart';

function Navbar() {
	const isLoggedIn = window.localStorage.getItem("loggedIn");
	let data = useCart()
	const [CartView, setCartView] = useState(false);
	return (
		<>
			<div style={{ height: 100 }}></div>
			<nav className="navbar navbar-expand-lg navbar-light fixed-top py-3 d-block" data-navbar-on-scroll="data-navbar-on-scroll">
				<div className="container"><Link className="navbar-brand" to="/"><img src="assets/img/gallery/logo.png" width="300" alt="logo" /></Link>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"> </span></button>
					<div className="collapse navbar-collapse border-top border-lg-0 mt-4 mt-lg-0" id="navbarSupportedContent">
						<ul className="navbar-nav ms-auto pt-2 pt-lg-0 font-base">
							<li className="nav-item px-2"><Link to="/medicines" className="nav-link" aria-current="page">Medicines</Link></li>
							<li className="nav-item px-2"><Link to="/map" className="nav-link">Pharmacy</Link></li>
							<li className="nav-item px-2"><Link to="/showRems" className="nav-link">Reminder<img src={newGif} alt='new' width={50} />{ /*<img src='./new.gif' alt='gif' /> */}</Link></li>
							{/* <li className="nav-item px-2"><Link to="/bloodbank" className="nav-link">Blood Donation</Link></li>
							<li className="nav-item px-2"><Link to="/organdonor" className="nav-link">Organ Donation</Link></li> */}
							<li className="nav-item px-2"><Link to="/about-us" className="nav-link">About Us</Link></li>
						</ul>
						{!{ isLoggedIn } && <Link to='/sign-in' className="btn btn-sm btn-outline-primary rounded-pill order-1 order-lg-0 ms-lg-4">Sign In</Link>}
						{{ isLoggedIn } && <Link to='/userDetails' className="btn btn-sm btn-outline-primary rounded-pill order-1 order-lg-0 ms-lg-4">Log Out</Link>}
						{/* <a className="btn btn-sm btn-outline-primary rounded-pill order-1 order-lg-0 ms-lg-4" href="/">Sign In</a> */}
						<div className='btn bg-white text-success mx-2' onClick={() => { setCartView(true) }}>
							My Cart {" "}
							<Badge pill bg="danger">{data.length}</Badge>
							{CartView ? <Modal onClose={() => setCartView(false)}><Cart /></Modal> : null}
						</div>
					</div>
				</div>
			</nav>
		</>
	)
}

export default Navbar
