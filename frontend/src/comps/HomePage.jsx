import './HomePage.css';

import React, { useState } from "react";
import Badge from 'react-bootstrap/Badge';
import Modal from './addToCart/modal';
import Cart from './addToCart/cart';
import { useCart } from './addToCart/ContextReducer';

import newGif from "./new.gif";
// import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "./signin.css";
import { Link } from "react-router-dom";
// import ImageUpload from "./signin/imageUpload.";

function HomePage() {
	const isLoggedIn = window.localStorage.getItem("loggedIn");
	console.log(isLoggedIn);
	let data = useCart()
	const [CartView, setCartView] = useState(false);
	return (
		<div className="App">
			<main className="main" id="top">
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
				<section className="py-xxl-10 pb-0" id="home">
					<div className="bg-holder bg-size" style={{ "background-image": "url(assets/img/gallery/hero-bg.png)", "background-position": "top center", "background-size": "cover" }}>
					</div>
					<div className="container">
						<div className="row min-vh-xl-100 min-vh-xxl-25">
							<div className="col-md-5 col-xl-6 col-xxl-7 order-0 order-md-1 text-end"><img className="pt-7 pt-md-0 w-100" src="assets/img/gallery/hero.png" alt="hero-header" /></div>
							<div className="col-md-75 col-xl-6 col-xxl-5 text-md-start text-center py-6">
								<h1 className="fw-light font-base fs-6 fs-xxl-7"><strong>HealthCare</strong> at Your <strong>Doorsteps</strong>:<br />Your Health, Our Priority!
									{/* We're <strong>determined </strong>for<br />your&nbsp;<strong>better life.</strong> */}
								</h1>
								<p className="fs-1 mb-5">Health Elevator is committed to solving the problem of short-range medicine delivery by connecting users with nearby pharmacies, ensuring swift and hassle-free access to vital medications.</p>
								<Link to='/Map'><b className="btn btn-lg btn-primary rounded-pill">Pharmacy near me</b></Link>
								{/* <a className="btn btn-lg btn-primary rounded-pill" href="./map.jsx" role="button">Pharmacy near me</a> */}
							</div>
						</div>
					</div>
				</section>
				<section className="py-5" id="departments">
					<div className="container">
						<div className="row">
							<div className="col-12 py-3">
								<h1 className="text-center headPageCol">OUR CONTRIBUTIONS</h1>
							</div>
						</div>
					</div>
				</section>
				<section className="py-0">
					<div className="container">
						<div className="row py-5 align-items-center justify-content-center justify-content-lg-evenly">
							<div className="col-auto col-md-4 col-lg-auto text-xl-start">
								<div className="d-flex flex-column align-items-center">
									<div className="icon-box text-center"><Link className="text-decoration-none" to="/schemes"><img className="mb-3 deparment-icon" src="assets/img/icons/disability_pic.png" alt="..." width={50} /><img className="mb-3 deparment-icon-hover" src="assets/img/icons/disability_pic.svg" alt="..." width={50} />
										<p className="fs-1 fs-xxl-2 text-center">Disability</p>
									</Link></div>
								</div>
							</div>
							<div className="col-auto col-md-4 col-lg-auto text-xl-start">
								<div className="d-flex flex-column align-items-center">
									<div className="icon-box text-center"><Link className="text-decoration-none" to="/addRem"><img className="mb-3 deparment-icon" src="assets/img/icons/reminder_pic.png" alt="..." width={50} /><img className="mb-3 deparment-icon-hover" src="assets/img/icons/reminder_pic.svg" alt="..." width={50} />
										<p className="fs-1 fs-xxl-2 text-center">Reminder</p>
									</Link></div>
								</div>
							</div>
							<div className="col-auto col-md-4 col-lg-auto text-xl-start">
								<div className="d-flex flex-column align-items-center">
									<div className="icon-box text-center"><Link className="text-decoration-none" to="/medicines"><img className="mb-3 deparment-icon" src="assets/img/icons/Add_To_Cart_pic.png" alt="..." width={50} /><img className="mb-3 deparment-icon-hover" src="assets/img/icons/Add_To_Cart_pic.svg" alt="..." width={50} />
										<p className="fs-1 fs-xxl-2 text-center">Add To Cart</p>
									</Link></div>
								</div>
							</div>
							{/* <div className="col-auto col-md-4 col-lg-auto text-xl-start">
								<div className="d-flex flex-column align-items-center">
									<div className="icon-box text-center"><Link className="text-decoration-none" to="/bloodbank"><img className="mb-3 deparment-icon" src="assets/img/icons/blood_donor_pic.png" alt="..." width={50} /><img className="mb-3 deparment-icon-hover" src="assets/img/icons/blood_donor_pic.svg" alt="..." width={50} />
										<p className="fs-1 fs-xxl-2 text-center">Blood Donation</p>
									</Link></div>
								</div>
							</div>
							<div className="col-auto col-md-4 col-lg-auto text-xl-start">
								<div className="d-flex flex-column align-items-center">
									<div className="icon-box text-center"><Link className="text-decoration-none" to="/organdonor"><img className="mb-3 deparment-icon" src="assets/img/icons/organ_donor_pic.png" alt="..." width={50} /><img className="mb-3 deparment-icon-hover" src="assets/img/icons/organ_donor_pic.svg" alt="..." width={50} />
										<p className="fs-1 fs-xxl-2 text-center">Organ Donation</p>
									</Link></div>
								</div>
							</div> */}
							<div className="col-auto col-md-4 col-lg-auto text-xl-start">
								<div className="d-flex flex-column align-items-center">
									<div className="icon-box text-center"><Link className="text-decoration-none" to="/medicines"><img className="mb-3 deparment-icon" src="assets/img/icons/Online_pharmacy_pic.png" alt="..." width={50} /><img className="mb-3 deparment-icon-hover" src="assets/img/icons/Online_pharmacy_pic.svg" alt="..." width={50} />
										<p className="fs-1 fs-xxl-2 text-center">Online Pharmacy</p>
									</Link></div>
								</div>
							</div>
							<div className="col-auto col-md-4 col-lg-auto text-xl-start">
								<div className="d-flex flex-column align-items-center">
									<div className="icon-box text-center"><Link className="text-decoration-none" to="/medsInfo"><img className="mb-3 deparment-icon" src="assets/img/icons/med_info_pic.png" alt="..." width={50} /><img className="mb-3 deparment-icon-hover" src="assets/img/icons/med_info_pic.svg" alt="..." width={50} />
										<p className="fs-1 fs-xxl-2 text-center">Medical Information</p>
									</Link></div>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* <section className="bg-secondary">
					<div className="bg-holder" style={{ "background-image": "url(assets/img/gallery/bg-eye-care.png)", "background-position": "center", "background-size": "contain" }}>
					</div>
					<div className="container">
						<div className="row align-items-center">
							<div className="col-md-5 col-xxl-6"><img className="img-fluid" src="assets/img/gallery/eye-care.png" alt="..." /></div>
							<div className="col-md-7 col-xxl-6 text-center text-md-start">
								<h2 className="fw-bold text-light mb-4 mt-4 mt-lg-0">Eye Care with Top Professionals<br className="d-none d-sm-block" />and In Budget.</h2>
								<p className="text-light">We've built a healthcare system that puts your needs first.<br className="d-none d-sm-block" />For us, there is nothing more important than the health of <br className="d-none d-sm-block" />you and your loved ones. </p>
								<div className="py-3"><a className="btn btn-lg btn-light rounded-pill" href="/" role="button">Learn more </a></div>
							</div>
						</div>
					</div>
				</section>
				<section className="pb-0" id="about">
					<div className="container">
						<div className="row">
							<div className="col-12 py-3">
								<div className="bg-holder bg-size" style={{ "background-image": "url(assets/img/gallery/about-us.png)", "background-position": "top center", "background-size": "contain" }}>
								</div>
								<h1 className="text-center">ABOUT US</h1>
							</div>
						</div>
					</div>
				</section>
				<section className="py-5">
					<div className="bg-holder bg-size" style={{ "background-image": "url(assets/img/gallery/about-bg.png)", "background-position": "top center", "background-size": "contain" }}>
					</div>
					<div className="container">
						<div className="row align-items-center">
							<div className="col-md-6 order-lg-1 mb-5 mb-lg-0"><img className="fit-cover rounded-circle w-100" src="assets/img/gallery/health-care.png" alt="..." /></div>
							<div className="col-md-6 text-center text-md-start">
								<h2 className="fw-bold mb-4">We are developing a healthcare <br className="d-none d-sm-block" />system around you</h2>
								<p>We think that everyone should have easy access to excellent <br className="d-none d-sm-block" />healthcare. Our aim is to make the procedure as simple as <br className="d-none d-sm-block" />possible for our patients and to offer treatment no matter<br className="d-none d-sm-block" />where they are — in person or at their convenience. </p>
								<div className="py-3">
									<button className="btn btn-lg btn-outline-primary rounded-pill" type="submit">Learn more </button>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="pb-0">
					<div className="container">
						<div className="row">
							<div className="col-12 py-3">
								<div className="bg-holder bg-size" style={{ "background-image": "url(assets/img/gallery/doctors-us.png)", "background-position": "top center", "background-size": "contain" }}>
								</div>
								<h1 className="text-center">OUR DOCTORS</h1>
							</div>
						</div>
					</div>
				</section>
				<section className="py-5">
					<div className="bg-holder bg-size" style={{ "background-image": "url(assets/img/gallery/doctors-bg.png)", "background-position": "top center", "background-size": "contain" }}>
					</div>
					<div className="container">
						<div className="row flex-center">
							<div className="col-xl-10 px-0">
								<div className="carousel slide" id="carouselExampleDark" data-bs-ride="carousel"><a className="carousel-control-prev carousel-icon z-index-2" href="/carouselExampleDark" role="button" data-bs-slide="prev"><span className="carousel-control-prev-icon" aria-hidden="true"></span><span className="visually-hidden">Previous</span></a><a className="carousel-control-next carousel-icon z-index-2" href="/carouselExampleDark" role="button" data-bs-slide="next"><span className="carousel-control-next-icon" aria-hidden="true"></span><span className="visually-hidden">Next</span></a>
									<div className="carousel-inner">
										<div className="carousel-item active" data-bs-interval="10000">
											<div className="row h-100 m-lg-7 mx-3 mt-6 mx-md-4 my-md-7">
												<div className="col-md-4 mb-8 mb-md-0">
													<div className="card card-span h-100 shadow">
														<div className="card-body d-flex flex-column flex-center py-5"><img src="assets/img/gallery/anita.png" width="128" alt="..." />
															<h5 className="mt-3">Anita Deshai</h5>
															<p className="mb-0 fs-xxl-1">Pediatrics, Gochi Medicine</p>
															<p className="text-600 mb-0">Florida, United States</p>
															<p className="text-600 mb-4">10 years experience</p>
															<div className="text-center">
																<button className="btn btn-outline-secondary rounded-pill" type="submit">View Profile</button>
															</div>
														</div>
													</div>
												</div>
												<div className="col-md-4 mb-8 mb-md-0">
													<div className="card card-span h-100 shadow">
														<div className="card-body d-flex flex-column flex-center py-5"><img src="assets/img/gallery/jane.png" width="128" alt="..." />
															<h5 className="mt-3">Jane Flakis</h5>
															<p className="mb-0 fs-xxl-1">Gynaecology, Abenka Care</p>
															<p className="text-600 mb-0">Melbourne, Australia</p>
															<p className="text-600 mb-4">12 years experience</p>
															<div className="text-center">
																<button className="btn btn-outline-secondary rounded-pill" type="submit">View Profile</button>
															</div>
														</div>
													</div>
												</div>
												<div className="col-md-4 mb-8 mb-md-0">
													<div className="card card-span h-100 shadow">
														<div className="card-body d-flex flex-column flex-center py-5"><img src="assets/img/gallery/leo-mario.png" width="128" alt="..." />
															<h5 className="mt-3">Leo Mario</h5>
															<p className="mb-0 fs-xxl-1">Physiotherapy, FitCare</p>
															<p className="text-600 mb-0">London, England</p>
															<p className="text-600 mb-4">25 years experience</p>
															<div className="text-center">
																<button className="btn btn-secondary hover-top rounded-pill border-0" type="submit">View Profile</button>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="carousel-item" data-bs-interval="2000">
											<div className="row h-100 m-lg-7 mx-3 mt-6 mx-md-4 my-md-7">
												<div className="col-md-4 mb-8 mb-md-0">
													<div className="card card-span h-100 shadow">
														<div className="card-body d-flex flex-column flex-center py-5"><img src="assets/img/gallery/anita.png" width="128" alt="..." />
															<h5 className="mt-3">Anita Deshai</h5>
															<p className="mb-0 fs-xxl-1">Pediatrics, Gochi Medicine</p>
															<p className="text-600 mb-0">Florida, United States</p>
															<p className="text-600 mb-4">10 years experience</p>
															<div className="text-center">
																<button className="btn btn-outline-secondary rounded-pill" type="submit">View Profile</button>
															</div>
														</div>
													</div>
												</div>
												<div className="col-md-4 mb-8 mb-md-0">
													<div className="card card-span h-100 shadow">
														<div className="card-body d-flex flex-column flex-center py-5"><img src="assets/img/gallery/jane.png" width="128" alt="..." />
															<h5 className="mt-3">Jane Flakis</h5>
															<p className="mb-0 fs-xxl-1">Gynaecology, Abenka Care</p>
															<p className="text-600 mb-0">Melbourne, Australia</p>
															<p className="text-600 mb-4">12 years experience</p>
															<div className="text-center">
																<button className="btn btn-outline-secondary rounded-pill" type="submit">View Profile</button>
															</div>
														</div>
													</div>
												</div>
												<div className="col-md-4 mb-8 mb-md-0">
													<div className="card card-span h-100 shadow">
														<div className="card-body d-flex flex-column flex-center py-5"><img src="assets/img/gallery/leo-mario.png" width="128" alt="..." />
															<h5 className="mt-3">Leo Mario</h5>
															<p className="mb-0 fs-xxl-1">Physiotherapy, FitCare</p>
															<p className="text-600 mb-0">London, England</p>
															<p className="text-600 mb-4">25 years experience</p>
															<div className="text-center">
																<button className="btn btn-secondary hover-top rounded-pill border-0" type="submit">View Profile</button>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="carousel-item">
											<div className="row h-100 m-lg-7 mx-3 mt-6 mx-md-4 my-md-7">
												<div className="col-md-4 mb-8 mb-md-0">
													<div className="card card-span h-100 shadow">
														<div className="card-body d-flex flex-column flex-center py-5"><img src="assets/img/gallery/anita.png" width="128" alt="..." />
															<h5 className="mt-3">Anita Deshai</h5>
															<p className="mb-0 fs-xxl-1">Pediatrics, Gochi Medicine</p>
															<p className="text-600 mb-0">Florida, United States</p>
															<p className="text-600 mb-4">10 years experience</p>
															<div className="text-center">
																<button className="btn btn-outline-secondary rounded-pill" type="submit">View Profile</button>
															</div>
														</div>
													</div>
												</div>
												<div className="col-md-4 mb-8 mb-md-0">
													<div className="card card-span h-100 shadow">
														<div className="card-body d-flex flex-column flex-center py-5"><img src="assets/img/gallery/jane.png" width="128" alt="..." />
															<h5 className="mt-3">Jane Flakis</h5>
															<p className="mb-0 fs-xxl-1">Gynaecology, Abenka Care</p>
															<p className="text-600 mb-0">Melbourne, Australia</p>
															<p className="text-600 mb-4">12 years experience</p>
															<div className="text-center">
																<button className="btn btn-outline-secondary rounded-pill" type="submit">View Profile</button>
															</div>
														</div>
													</div>
												</div>
												<div className="col-md-4 mb-8 mb-md-0">
													<div className="card card-span h-100 shadow">
														<div className="card-body d-flex flex-column flex-center py-5"><img src="assets/img/gallery/leo-mario.png" width="128" alt="..." />
															<h5 className="mt-3">Leo Mario</h5>
															<p className="mb-0 fs-xxl-1">Physiotherapy, FitCare</p>
															<p className="text-600 mb-0">London, England</p>
															<p className="text-600 mb-4">25 years experience</p>
															<div className="text-center">
																<button className="btn btn-secondary hover-top rounded-pill border-0" type="submit">View Profile</button>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="py-5">
					<div className="container">
						<div className="row">
							<div className="col-12 py-3">
								<div className="bg-holder bg-size" style={{ "background-image": "url(assets/img/gallery/people.png)", "background-position": "top center", "background-size": "contain" }}>
								</div>
								<h1 className="text-center">PEOPLE WHO LOVE US</h1>
							</div>
						</div>
					</div>
				</section>
				<section className="py-8">
					<div className="bg-holder bg-size" style={{ "background-image": "url(assets/img/gallery/people-bg-1.png)", "background-position": "center", "background-size": "cover" }}>
					</div>
					<div className="container">
						<div className="row align-items-center offset-sm-1">
							<div className="carousel slide" id="carouselPeople" data-bs-ride="carousel">
								<div className="carousel-inner">
									<div className="carousel-item active" data-bs-interval="10000">
										<div className="row h-100">
											<div className="col-sm-3 text-center"><img src="assets/img/gallery/people-who-loves.png" width="100" alt="" />
												<h5 className="mt-3 fw-medium text-secondary">Edward Newgate</h5>
												<p className="fw-normal mb-0">Founder Circle</p>
											</div>
											<div className="col-sm-9 text-center text-sm-start pt-3 pt-sm-0">
												<h2>Fantastic Response !</h2>
												<div className="my-2"><i className="fas fa-star me-2"></i><i className="fas fa-star me-2"></i><i className="fas fa-star me-2"></i><i className="fas fa-star-half-alt me-2"></i><i className="far fa-star"></i></div>
												<p>This medical and health care facility distinguishes itself from the competition by providing technologically advanced medical and health care. A mobile app and a website are available via which you can easily schedule appointments, get online consultations, and see physicians, who will assist you through the whole procedure. And all of the prescriptions, medications, and other services they offer are 100% genuine, medically verified, and proved. I believe that the Livedoc staff is doing an outstanding job. Highly recommended their health care services.</p>
											</div>
										</div>
									</div>
									<div className="carousel-item" data-bs-interval="2000">
										<div className="row h-100">
											<div className="col-sm-3 text-center"><img src="assets/img/gallery/people-who-loves.png" width="100" alt="" />
												<h5 className="mt-3 fw-medium text-secondary">Jhon Doe</h5>
												<p className="fw-normal mb-0">UI/UX Designer</p>
											</div>
											<div className="col-sm-9 text-center text-sm-start pt-3 pt-sm-0">
												<h2>Fantastic Response!</h2>
												<div className="my-2"><i className="fas fa-star me-2"></i><i className="fas fa-star me-2"></i><i className="fas fa-star me-2"></i><i className="fas fa-star-half-alt me-2"></i><i className="far fa-star"></i></div>
												<p>This medical and health care facility distinguishes itself from the competition by providing technologically advanced medical and health care. A mobile app and a website are available via which you can easily schedule appointments, get online consultations, and see physicians, who will assist you through the whole procedure. And all of the prescriptions, medications, and other services they offer are 100% genuine, medically verified, and proved. I believe that the Livedoc staff is doing an outstanding job. Highly recommended their health care services.</p>
											</div>
										</div>
									</div>
									<div className="carousel-item">
										<div className="row h-100">
											<div className="col-sm-3 text-center"><img src="assets/img/gallery/people-who-loves.png" width="100" alt="" />
												<h5 className="mt-3 fw-medium text-secondary">Jeny Doe</h5>
												<p className="fw-normal mb-0">Web Designer</p>
											</div>
											<div className="col-sm-9 text-center text-sm-start pt-3 pt-sm-0">
												<h2>Fantastic Response!</h2>
												<div className="my-2"><i className="fas fa-star me-2"></i><i className="fas fa-star me-2"></i><i className="fas fa-star me-2"></i><i className="fas fa-star-half-alt me-2"></i><i className="far fa-star"></i></div>
												<p>This medical and health care facility distinguishes itself from the competition by providing technologically advanced medical and health care. A mobile app and a website are available via which you can easily schedule appointments, get online consultations, and see physicians, who will assist you through the whole procedure. And all of the prescriptions, medications, and other services they offer are 100% genuine, medically verified, and proved. I believe that the Livedoc staff is doing an outstanding job. Highly recommended their health care services.</p>
											</div>
										</div>
									</div>
								</div>
								<div className="row">
									<div className="position-relative z-index-2 mt-5">
										<ol className="carousel-indicators">
											<li className="active" data-bs-target="/carouselPeople" data-bs-slide-to="0"></li>
											<li data-bs-target="/carouselPeople" data-bs-slide-to="1"></li>
											<li data-bs-target="/carouselPeople" data-bs-slide-to="2"> </li>
										</ol>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="py-5">
					<div className="container">
						<div className="row">
							<div className="col-12 py-3">
								<div className="bg-holder bg-size" style={{ "background-image": "url(assets/img/gallery/people.png)", "background-position": "top center", "background-size": "contain" }}>
								</div>
								<h1 className="text-center">APPOINTMENT</h1>
							</div>
						</div>
					</div>
				</section>
				<section className="py-8">
					<div className="container">
						<div className="row">
							<div className="bg-holder bg-size" style={{ "background-image": "url(assets/img/gallery/dot-bg.png)", "background-position": "bottom right", "background-size": "auto" }}>
							</div>
							<div className="col-lg-6 z-index-2 mb-5"><img className="w-100" src="assets/img/gallery/appointment.png" alt="..." /></div>
							<div className="col-lg-6 z-index-2">
								<form className="row g-3">
									<div className="col-md-6">
										<label className="visually-hidden" htmlFor="inputName">Name</label>
										<input className="form-control form-livedoc-control" id="inputName" type="text" placeholder="Name" />
									</div>
									<div className="col-md-6">
										<label className="visually-hidden" for="inputPhone">Phone</label>
										<input className="form-control form-livedoc-control" id="inputPhone" type="text" placeholder="Phone" />
									</div>
									<div className="col-md-6">
										<label className="form-label visually-hidden" for="inputCategory">Category</label>
										<select className="form-select" id="inputCategory">
											<option selected="selected">Category</option>
											<option> Category One</option>
											<option> Category Two</option>
											<option> Category Three</option>
										</select>
									</div>
									<div className="col-md-6">
										<label className="form-label visually-hidden" htmlFor="inputEmail">Email</label>
										<input className="form-control form-livedoc-control" id="inputEmail" type="email" placeholder="Email" />
									</div>
									<div className="col-md-12">
										<label className="form-label visually-hidden" htmlFor="validationTextarea">Message</label>
										<textarea className="form-control form-livedoc-control" id="validationTextarea" placeholder="Message" style={{ "height": "250px" }} required="required"></textarea>
									</div>
									<div className="col-12">
										<div className="d-grid">
											<button className="btn btn-primary rounded-pill" type="submit">Sign in</button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</section>
				<section className="py-5">
					<div className="container">
						<div className="row">
							<div className="col-12 py-3">
								<div className="bg-holder bg-size" style={{ "background-image": "url(assets/img/gallery/blog-post.png)", "background-position": "top center", "background-size": "contain" }}>
								</div>
								<h1 className="text-center">RECENT BLOGPOSTS</h1>
							</div>
						</div>
					</div>
				</section>
				<section>
					<div className="bg-holder bg-size" style={{ "background-image": "url(assets/img/gallery/dot-bg.png)", "background-position": "top left", "background-size": "auto" }}>
					</div>
					<div className="container">
						<div className="row">
							<div className="col-sm-6 col-lg-3 mb-4">
								<div className="card h-100 shadow card-span rounded-3"><img className="card-img-top rounded-top-3" src="assets/img/gallery/covid-19.png" alt="news" />
									<div className="card-body"><span className="fs--1 text-primary me-3">Health</span>
										<svg className="bi bi-calendar2 me-2" xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
											<path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z"></path>
											<path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z"> </path>
										</svg><span className="fs--1 text-900">Nov 21, 2021</span><span className="fs--1"></span>
										<h5 className="font-base fs-lg-0 fs-xl-1 my-3">COVID-19: The Most Up-to-Date Information</h5><a className="stretched-link" href="/!">read full article</a>
									</div>
								</div>
							</div>
							<div className="col-sm-6 col-lg-3 mb-4">
								<div className="card h-100 shadow card-span rounded-3"><img className="card-img-top rounded-top-3" src="assets/img/gallery/laboratories.png" alt="news" />
									<div className="card-body"><span className="fs--1 text-primary me-3">Lifestyle</span>
										<svg className="bi bi-calendar2 me-2" xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
											<path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z"></path>
											<path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z"> </path>
										</svg><span className="fs--1 text-900">Nov 25, 2021</span><span className="fs--1"></span>
										<h5 className="font-base fs-lg-0 fs-xl-1 my-3">Importance of Accreditation for Laboratories</h5><a className="stretched-link" href="/!">read full article</a>
									</div>
								</div>
							</div>
							<div className="col-sm-6 col-lg-3 mb-4">
								<div className="card h-100 shadow card-span rounded-3"><img className="card-img-top rounded-top-3" src="assets/img/gallery/nicotine.png" alt="news" />
									<div className="card-body"><span className="fs--1 text-primary me-3">Health</span>
										<svg className="bi bi-calendar2 me-2" xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
											<path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z"></path>
											<path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z"> </path>
										</svg><span className="fs--1 text-900">Nov 28, 2021</span><span className="fs--1"></span>
										<h5 className="font-base fs-lg-0 fs-xl-1 my-3">The dangers of nicotine are addressed in depth</h5><a className="stretched-link" href="/!">read full article</a>
									</div>
								</div>
							</div>
							<div className="col-sm-6 col-lg-3 mb-4">
								<div className="card h-100 shadow card-span rounded-3"><img className="card-img-top rounded-top-3" src="assets/img/gallery/treatment.png" alt="news" />
									<div className="card-body"><span className="fs--1 text-primary me-3">Health</span>
										<svg className="bi bi-calendar2 me-2" xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
											<path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z"></path>
											<path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z"> </path>
										</svg><span className="fs--1 text-900">Nov 30, 2021</span><span className="fs--1"></span>
										<h5 className="font-base fs-lg-0 fs-xl-1 my-3">Treatment of patients with diabetes during COVID-19</h5><a className="stretched-link" href="/!">read full article</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="bg-primary">
					<div className="bg-holder bg-size" style={{ "background-image": "url(assets/img/gallery/cta-bg.png)", "background-position": "center right", "margin-top": "-8.125rem", "background-size": "contain" }}>
					</div>
					<div className="container">
						<div className="row">
							<div className="col-lg-6">
								<h2 className="fw-bold text-light">Get an update every week</h2>
								<p className="text-soft-primary">Livedoc was created in order to improve the patient experience. <br />Providing world-className tests, and a wide range of other services.</p>
							</div>
							<div className="col-lg-6">
								<h5 className="mb-3 text-soft-primary">SUBSCRIBE TO NEWSLETTER </h5>
								<form className="row gx-2 gy-2 align-items-center">
									<div className="col">
										<div className="input-group-icon">
											<label className="visually-hidden" htmlFor="inputEmailCta">Address</label>
											<input className="form-control form-livedoc-control form-cta-control text-soft-primary" id="inputEmailCta" type="email" placeholder="Email" />
										</div>
									</div>
									<div className="d-grid gap-3 col-sm-auto">
										<button className="btn btn-lg btn-light rounded-3 px-5 py-3" type="submit">Subscribe</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</section> */}
				<section className="py-0 bg-secondary">
					<div className="bg-holder opacity-25" style={{ "background-image": "url(assets/img/gallery/dot-bg.png)", "background-position": "top left", "margin-top": "-3.125rem", "background-size": "auto" }}>
					</div>
					<div className="container">
						<div className="row py-8">
							<div className="col-12 col-sm-12 col-lg-6 mb-4 order-0 order-sm-0">
								<a className="text-decoration-none" href="/">
									<img src="assets/img/gallery/footer-logo.png" height="51" alt="" /></a>
								<p className="text-light my-4">Delivering Wellness, <br />One Click at a Time!</p>
								<p className="fs--1 my-2 fw-bold text-200">All rights Reserved &copy; Your Company, 2023</p>
							</div>

							<div className="col-6 col-sm-4 col-lg-2 mb-3 order-3 order-sm-2">
								<h5 className="lh-lg fw-bold text-light mb-4 font-sans-serif"> Customer Care</h5>
								<ul className="list-unstyled mb-md-4 mb-lg-0">
									<li className="lh-lg"><Link className="footer-link" to="/about-us">About Us</Link></li>
									<li className="lh-lg"><a className="footer-link" href="/">Contact US</a></li>
									<li className="lh-lg"><a className="footer-link" href="/">Get Update</a></li>
								</ul>
							</div>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}

export default HomePage;
