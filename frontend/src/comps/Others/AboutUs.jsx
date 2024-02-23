import React from 'react';
import './AboutUs.css'
import Navbar from '../Navbar';

const AboutUs = () => {
	return (
		<>
			<Navbar />
			<div className='head-about'>
				<h1>About Us</h1>
				<div className='div-profs-about'>
					<a href='https://www.linkedin.com/in/sahilkumar0209/' className='profs-about' target='_blank' rel="noreferrer">
						<img src='../../assets/img/gallery/au1.png' alt='...' /><br />Sahil Kumar
					</a>
					<a href='https://www.linkedin.com/in/adipandey160903/' className='profs-about' target='_blank' rel="noreferrer">
						<img src='../../assets/img/gallery/au2.png' alt='...' /><br />Aditya Pandey
					</a>
					<a href='https://www.linkedin.com/in/ishijindal/' className='profs-about' target='_blank' rel="noreferrer">
						<img src='../../assets/img/gallery/au3.png' alt='...' /><br />Ishita Jindal
					</a><br />
					<a href='https://www.linkedin.com/in/ritika-singh-34b00822a/' className='profs-about' target='_blank' rel="noreferrer">
						<img src='../../assets/img/gallery/au4.png' alt='...' /><br />Ritika Singh
					</a>
					<a href='https://www.linkedin.com/in/kanan-jain-8346b1233/' className='profs-about' target='_blank' rel="noreferrer"x>
						<img src='../../assets/img/gallery/au5.png' alt='...' /><br />Kanan Jain
					</a>
				</div>
			</div>
		</>
	)
}

export default AboutUs