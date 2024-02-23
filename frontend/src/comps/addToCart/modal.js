import React from 'react'
import ReactDom from 'react-dom'
// import { Link } from 'react-router-dom';
// import HomePage from '../HomePage';

const MODAL_STYLES = {
	position: 'fixed',
	top: '55%',
	left: '50%',
	backgroundColor: 'rgb(34,34,34)',
	transform: 'translate(-50%, -50%)',
	zIndex: 1000,
	height: '85%',
	width: '85%'
}

const OVERLAY_STYLES = {
	position: 'fixed',
	top: 0,
	left: 0,
	right: 0,
	bottom: 0,
	backgroundColor: 'rgba(0, 0, 0, .7)',
	zIndex: 1000
}

export default function Modal({ children, onClose }) {

	return ReactDom.createPortal(
		<>
			<div style={OVERLAY_STYLES} />
			<div style={MODAL_STYLES}>
				<button style={{ marginLeft: "92%", marginTop: "2rem", color: "white", backgroundColor: "#da3849" }} onClick={onClose}> X </button>
				{children}
			</div>
		</>,
		document.getElementById('cart-root')
	)
}
