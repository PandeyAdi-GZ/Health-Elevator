import { Link } from 'react-router-dom';
import React from 'react'

export default function Disc() {
	return (

		<div style={{ "background-color": "#e3f2fd" }}>
			<nav className="navbar" style={{ "background-color": "#e3f2fd" }}>
				<div className="container-fluid">
					{/* <a href='/' className="navbar-brand"><h3>Health Elevator</h3></a> */}
					<Link to="/" className="navbar-brand"><img src='../../assets/img/gallery/logo.png' width={300} alt='HEALTH ELEVATOR' /></Link>
					<button type="button" className="btn btn-outline-primary" disabled>Your own guide to knowledge</button>
				</div>
			</nav>

			<div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
				<div className="carousel-indicators">
					<button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
					<button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
					<button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
				</div>
				<div className="carousel-inner">
					<div className="carousel-item active" data-bs-interval="10000">
						<img src="/disbleimg/happy-disabled-person-wheelchair-background-sea-friend-who-supports-it-concept-support-people-with-disabilities_556258-595.avif" className="d-block w-100" alt="..." />
						<div className="carousel-caption d-none d-md-block">

							<h3 style={{ "color": "antiquewhite" }}><u>YOUR OWN GUIDE FOR DISABLILTY SCHEMES AND INFORMATION</u></h3>
							<h4 style={{ "color": "antiquewhite" }}>You are enough</h4>
						</div>
					</div>
					<div className="carousel-item" data-bs-interval="2000">
						<img src="/disbleimg/360_F_175593432_VUbVjMQErl1U5MJ4tFmD2nwcXd0Iexwz.jpg" className="d-block w-100" alt="..." />
						<div className="carousel-caption d-none d-md-block">

						</div>
					</div>
					<div className="carousel-item">

						<img src="/disbleimg/file-20190221-120338-1gy4r4k.avif" className="d-block w-100" alt="..." />
						<div className="carousel-caption d-none d-md-block">
							<div className="alert alert-primary" role="alert">
								<h5>We rise to great heights by a winding staircase of small steps</h5>
								<p> Francis Bacon</p>
							</div>
							<h3 style={{ "color": "#ea6767;" }}> </h3>
							<p style={{ "color": "#aadcff" }}> </p>
						</div>
					</div>
				</div>
				<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
					<span className="carousel-control-prev-icon" aria-hidden="true"></span>
					<span className="visually-hidden">Previous</span>
				</button>
				<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
					<span className="carousel-control-next-icon" aria-hidden="true"></span>
					<span className="visually-hidden">Next</span>
				</button>
			</div>

			<div className="card " style={{ "background-color": "#e3f2fd;" }}>
				<div className="card-header text-center">
					<h5>Unique Disability ID </h5>
				</div>
				<div className="card-body">
					<h5 className="card-title">About UDID(Unique Disability ID)</h5>
					<p>The UDID project initiated by Department of Empowerment of Persons with Disabilities aims at building a holistic end-to-end integrated system for Issuance of Universal ID & Disability Certificates for Person with Disabilities with their identification and disability details. It includes -</p>
					<p className="card-text"><ul>
						<li>Online availability of data of Person with Disabilities across country through a centralized web application</li>
						<li>Online filing and submission of registration application form for disability certificate/ Universal ID card; Offline applications may also be accepted and subsequently digitized by agencies</li>
						<li>Quick Assessment process for calculating the percentage of disability by the hospitals/ Medical Board</li>
						<li>Non-duplication of PwDs data</li>
						<li>Online renewal and update of information by Person with Disabilities/ on their behalf</li>
						<li>MIS reporting framework</li>
						<li>Effective management including interoperability of the benefits / schemes launched by the Government for PwD</li>
						<li>To take care of additional disabilities in future. Number of disabilities at the moment is seven and shall be subject to increase as per the new Act/ notification which can be up to 19 or more</li>
					</ul></p>

				</div>
				<div className="card-footer text-muted text-center">
					FAQ's
				</div>
			</div>
			<br />
			<div className="container1 h-100">
				<div className="row row-cols-1 row-cols-md-4 g-4">
					<div className="col">
						<div className="card h-100" style={{ "background-color": "#e3eff7;" }}>

							<div className="card-body">
								<h5 className="card-title">What is UDID card? </h5>
								<p className="card-text">UDID Card or Unique Disability Identity card is an initiative by Government of India with a view of creating a National Database for PwDs, and to issue a Unique Disability Identity Card  to each person with disabilities. This aims to encourage transparency, eﬃciency and ease of delivering the government beneﬁts to the person with disabilities, and to ensure uniformity. </p>
								<p>This will help in stream-lining the tracking of physical and ﬁnancial progress of beneﬁciary at all levels of hierarchy of implementation – from village level, block level, District level , State level and National level.</p>
								<h5>Can I ﬁll online form myself or I have to take help of any office?
								</h5>
								<p>The PwD can fill it by themselves or take help from anyone.
								</p>
								<h5>What are the types of UDID Card?</h5>
								<p>White Card: When the disability percentage of a PwD is below 40%
									Yellow Card: When the disability percentage of a PwD is above 40% but on or below 80%
									Blue Card: When the disability percentage of a PwD is above 80%</p>
							</div>
						</div>
					</div>
					<div className="col">
						<div className="card h-100" style={{ "background-color": "#e3eff7;" }}>

							<div className="card-body">
								<h5 className="card-title"> Who can apply for UDID Card and where to apply for UDID card?</h5>
								<p className="card-text">
									Any citizen of India with full/partial disability can apply for UDID card at the website- https://www.swavlambancard.gov.in/</p>
								<h5>What are the documents required for applying for the UDID card?</h5>
								<p>
									A coloured photo, Disability Certiﬁcate (If already has) and Address Proof.</p>
								<h5>What to do when my UDID card validity expires?</h5>
								<p> In case the validity of a temporary UDID card expires, the PwD needs to apply for renewal of UDID card through the portal- https://www.swavlambancard.gov.in/</p>
								<h5> How does a PwD get benefited through the UDID card?</h5>
								<p>Access to government schemes and beneﬁts: The UDID card is recognized as a proof of disability by the government of India. This means that PwDs can use their UDID card to access various government schemes and beneﬁts such as ﬁnancial assistance, healthcare services, education, and employment.
								</p>
							</div>
						</div>
					</div>
					<div className="col">
						<div className="card h-100" style={{ "background-color": "#e3eff7;" }}>
							<div className="card-body">
								<h5 className="card-title">How many digits/characters are there in the UDID Card?</h5>
								<p className="card-text" />
								The UDID card has a total of 18 digits/characters. The ﬁrst 2 characters represent State Code, next 2 digits for district code, next 1 digit for CMO code, next 2 digits for disability type, next 4 digits for year of birth of PwD, following 6 digits for running number and the last digit for check sum which is involved for security reason. </div>
							<h5>Is the UDID Card linked to Digilocker?</h5>
							<p>
								Yes, the UDID cards have been linked to Digilocker in October 2020.</p>
							<h5>How will the UDID card be delivered to the PwD? Is there any timeline for delivering UDID card?</h5>
							<p>Once the UDID card is generated, it will be delivered to the PwD through Speed Post. The PwD can track the UDID card with the consignment number shown on the porta</p>
							<p>However, no such timeline is ﬁxed for the delivery of UDID card but as soon as UDID card is generated by concerned medical authority, the plastic UDID card is dispatched to the PwD through Speed Post.</p>
						</div>
					</div>
					<div className="col">
						<div className="card h-100" style={{ "background-color": "#e3eff7;" }}>
							<div className="card-body">
								<h5 className="card-title">What is the process of UDID Card generation</h5>
								<p className="card-text" />
								<ol>
									<li>The PwD needs to apply through the portal for a fresh UDID card or for a renewal of UDID card in case of temporary UDID card has been</li>
									<li>The application reached to the notiﬁed Chief Medical Oﬃcer (CMO) or District Medical Oﬃcer (DMO) of the PwD’s resident district as the case may</li>
									<li>Post veriﬁcation of application, CMO/DMO assigns specialist doctors for assessment of the verified</li>
									<li>The specialist doctor assesses the PwD on a given date and submits the assessment report to the medical</li>
									<li>The Medical Board takes decision on the percentage and type of disability, validity of disability certiﬁcate and other such issues of the PwD. The medical board informs of its decision to the concerned CMO/DMO.</li>
									<li>Based on the assessment details ﬁlled by the CMO/DMO, a UDID card is generated. The card is then dispatched to the PwD through Speed Post by the</li>
								</ol></div>
							<h6> </h6>

						</div>
					</div>
				</div>
			</div>
			<br />
			<div className="card text-center" style={{ "background-color": "#e3eff7;" }}>
				<div className="card-header">
					<h3> Disability Schemes </h3>
				</div>
				<div className="card-body">
					<h5 className="card-title"> </h5>
					<p className="card-text"></p>

					<div className="tabmain text-center">
						<div className="aboutBlockRow cf">
							<h2 className="headingTitleUdID"> </h2>


							<div className="campTable ">
								<table id="medicalCamp" className="center" summary="Disability Schemes">
									<thead>
										<tr>
											<th>State / UTs Name</th>
											<th>Disability Type</th>
											<th>Scheme Name</th>

											<th>Disability Benefits Criteria</th>
											<th>Type of Benefits</th>

											{/* <!--<th></th>--> */}

										</tr>
									</thead>
									<tbody><tr>
										{/* <!--<td></td>--> */}
										<td>All State / UTs</td>
										{/* <!--<td></td>--> */}
										<td>
											Blindness                                    </td>
										<td>Travelling Allowance for Attendant or Escort</td>

										<td>Special Benefit</td>
										<td>Allowances</td>

									</tr>
										<tr>
											{/* <!--<td></td>--> */}
											<td>All State / UTs</td>
											{/* <!--<td></td>--> */}
											<td>
												Hearing Impairment                                    </td>
											<td>Chochlear Implant Surgery  under ADIP</td>

											<td>40% Disability</td>
											<td>Misc  Benefits</td>

										</tr>
										<tr>
											{/* <!--<td></td>--> */}
											<td>Chhattisgarh</td>
											{/* <!--<td></td>--> */}
											<td>
												Locomotor Disability                                    </td>
											<td>Age Relaxation for Motorized Tricycle  ADIP Scheme</td>

											<td>40% Disability</td>
											<td>Misc  Benefits</td>

										</tr>
										<tr>
											{/* <!--<td></td>--> */}
											<td>Kerala</td>
											{/* <!--<td></td>--> */}
											<td>
												Intellectual Disability                                    </td>
											<td>Niramaya</td>

											<td>40% Disability</td>
											<td>Financial Assistance</td>

										</tr>
										<tr>
											{/* <!--<td></td>--> */}
											<td>Madhya Pradesh</td>
											{/* <!--<td></td>--> */}
											<td>
												Blindness                                    </td>
											<td>Nishashkt Vivah</td>

											<td>60% Disability</td>
											<td>Allowances</td>

										</tr>
										<tr>
											{/* <!--<td></td>--> */}
											<td>Puducherry</td>
											{/* <!--<td></td>--> */}
											<td>
												Acid Attack Victim,<br />Autism Spectrum Disorder,<br />Blindness,<br />Cerebral Palsy,<br />Chronic Neurological Conditions,<br />Hearing Impairment,<br />Hemophilia,<br />Intellectual Disability,<br />Leprosy cured,<br />Locomotor Disability,<br />Low Vision,<br />Mental Illness<br />Multiple Sclerosis,<br />Muscular Dystrophy,<br />Parkinson's Disease,<br />Short Stature/Dwarfism,<br />Sickle Cell Disease,<br />Specific Learning Disabilities,<br />Speech and Language Disability,<br />Thalassemia                                    </td>
											<td>FREE SUPPLY OF CLOTHING ITEMS</td>

											<td>40% Disability</td>
											<td>Financial Assistance</td>

										</tr>
										<tr>
											{/* <!--<td></td>--> */}
											<td>Puducherry</td>
											{/* <!--<td></td>--> */}
											<td>
												Blindness,<br />Cerebral Palsy,<br />Chronic Neurological Conditions,<br />Hearing Impairment,<br />Locomotor Disability,<br />Low Vision<br />
											</td>
											<td>SUPPLY OF PROSTHETIC APPLIANCES TO PwD</td>

											<td>40% Disability</td>
											<td>Misc  Benefits</td>

										</tr>
										<tr>
											{/* <!--<td></td>--> */}
											<td>Puducherry</td>
											{/* <!--<td></td>--> */}
											<td>
												Blindness,<br />Cerebral Palsy,<br />Chronic Neurological Conditions,<br />Hearing Impairment,<br />Hemophilia,<br />Leprosy cured,<br />Locomotor Disability,<br />Low Vision,<br />Multiple Sclerosis,<br />Muscular Dystrophy,<br />Parkinson's Disease,<br />Short Stature/Dwarfism,<br />Sickle Cell Disease,<br />Specific Learning Disabilities,<br />Speech and Language Disability                                    </td>
											<td>ANNUAL TOUR FOR DIFFERENTLY ABLED PERSONS</td>

											<td>40% Disability</td>
											<td>Misc  Benefits</td>

										</tr>
										<tr>
											{/* <!--<td></td>--> */}
											<td>Puducherry</td>
											{/* <!--<td></td>--> */}
											<td>
												Autism Spectrum Disorder,<br />Blindness,<br />Cerebral Palsy,<br />Chronic Neurological Conditions,<br />Hearing Impairment,<br />Hemophilia,<br />Intellectual Disability,<br />Leprosy cured,<br />Locomotor Disability,<br />Low Vision,<br />Mental Illness,<br />Multiple Sclerosis,<br />Muscular Dystrophy,<br />Parkinson's Disease,<br />Short Stature/Dwarfism,<br />Sickle Cell Disease,<br />Specific Learning Disabilities,<br />Speech and Language Disability,<br />Thalassemia                                    </td>
											<td>FINANCIAL ASSISTANCE TO DIFFERENTLY ABLED PERSON</td>

											<td>40% Disability</td>
											<td>Financial Assistance</td>

										</tr>
										<tr>
											{/* <!--<td></td>--> */}
											<td>Puducherry</td>
											{/* <!--<td></td>--> */}
											<td>
												Acid Attack Victim,<br />Autism Spectrum Disorder,<br />Blindness,<br />Cerebral Palsy,<br />Chronic Neurological Conditions,<br />Hearing Impairment,<br />Hemophilia,<br />Intellectual Disability,<br />Leprosy cured,<br />Locomotor Disability,<br />Low Vision,<br />Mental Illness,<br />,<br />,<br />Multiple Sclerosis,<br />Muscular Dystrophy,<br />Parkinson's Disease,<br />Short Stature/Dwarfism,<br />Sickle Cell Disease,<br />Specific Learning Disabilities,<br />Speech and Language Disability,<br />Thalassemia                                    </td>
											<td>GRANT OF SCHOLARSHIP TO DIFFERENTLY ABLED STUDENTS</td>

											<td>40% Disability</td>
											<td>Education Benefit</td>

										</tr>
									</tbody>
								</table>
							</div>
							{/* <!--        </div>--> */}
						</div>
					</div>


				</div>
				<br />
			</div></div>

	)
}
