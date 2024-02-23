import { BrowserRouter, Routes, Route } from "react-router-dom";
import Map from './comps/Map';
import HomePage from './comps/HomePage';

import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import { CartProvider } from './comps/addToCart/ContextReducer';

import AboutUs from "./comps/Others/AboutUs";
import Login from "./comps/SignIn/login_component";
import SignUp from "./comps/SignIn/signup_component";
import UserDetails from "./comps/SignIn/userDetails";
import AddReminder from './comps/Reminders/AddReminder';
import ShowReminders from './comps/Reminders/ShowReminders';
import Medsinfo from "./comps/Others/medsinfo";
import Disc from "./comps/Others/schemes";
// import AddToCart from "./comps/addToCart/AddToCart";
import Home from './comps/addToCart/Home';
import Donor from "./comps/BloodBank/Donor";
import Organ from "./comps/OrganDonor/Organ";

function App() {
	const isLoggedIn = window.localStorage.getItem("loggedIn");
	return (
		<>
			<CartProvider>
				<BrowserRouter>
					<Routes>
						<Route path="/about-us" element={<AboutUs />} />
						<Route path="/map" element={<Map />} />
						<Route path="/" element={isLoggedIn === "true" ? <HomePage /> : <Login />} />
						<Route path="/sign-in" element={!isLoggedIn ? <Login /> : <HomePage />} />
						<Route path="/sign-up" element={!isLoggedIn ? <SignUp /> : <HomePage />} />
						<Route path="/userDetails" element={isLoggedIn === "true" ? <UserDetails /> : <Login />} />
						<Route path="/addRem" element={<AddReminder />} />
						<Route path="/showRems" element={<ShowReminders />} />
						<Route path="/medsinfo" element={<Medsinfo />} />
						<Route path="/schemes" element={<Disc />} />
						{/* <Route path="/addtocart" element={<AddToCart />} /> */}
						<Route exact path="/medicines" element={<Home />} />
						<Route path="/bloodbank" element={<Donor />} />
						<Route path="/organdonor" element={<Organ />} />



						{/* <Route path="/" element={isLoggedIn == "true" ? <HomePage /> : (isLoggedIn == "false" ? <Login /> : <UserDetails />)} />
					<Route path="/sign-in" element={isLoggedIn == "false" ? <Login /> : <UserDetails />} />
					<Route path="/sign-up" element={isLoggedIn == "false" ? <SignUp /> : <UserDetails />} />
					<Route path="/userDetails" element={isLoggedIn == "true" ? <UserDetails /> : <Login />} /> */}
					</Routes>

					<script src="vendors/@popperjs/popper.min.js"></script>
					<script src="vendors/bootstrap/bootstrap.min.js"></script>
					<script src="vendors/is/is.min.js"></script>
					<script src="https://scripts.sirv.com/sirvjs/v3/sirv.js"></script>
					<script src="https://polyfill.io/v3/polyfill.min.js?features=window.scroll"></script>
					<script src="vendors/fontawesome/all.min.js"></script>
					<script src="assets/js/theme.js"></script>

					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
					<link href="https://fonts.googleapis.com/css2?family=Fjalla+One&amp;family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100&amp;display=swap" rel="stylesheet"></link>
				</BrowserRouter>
			</CartProvider>
		</>

	);
}

export default App;
