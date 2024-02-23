import React, { createContext, useReducer, useContext } from 'react'

const CartStateContext = createContext()
const CartDispatchContext = createContext()

const reducer = (state, action) => {
	switch (action.type) {
		case "ADD":
			return [...state,
			{
				id: action.id,
				name: action.name,
				qty: action.qty,
				price: action.price,
				img: action.img
			}]
		case "REMOVE":
			let newArr = [...state]
			newArr.splice(action.index, 1)
			return newArr
		case "DROP":
			let empArray = []
			return empArray
		case "UPDATE":
			let arr = [...state]
			arr.find((med, index) => {
				if (med.id === action.id) {
					console.log(med.qty, parseInt(action.qty), action.price + med.price)
					arr[index] = { ...med, qty: parseInt(action.qty) + med.qty, price: action.price + med.price }
				}
				return arr
			})
			return arr
		default:
			console.log("Error in Reduced")
	}
}

export const CartProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, [])
	return (
		<CartDispatchContext.Provider value={dispatch}>
			<CartStateContext.Provider value={state}>
				{children}
			</CartStateContext.Provider>
		</CartDispatchContext.Provider>
	)
}

export const useCart = () => useContext(CartStateContext)
export const useDispatchCart = () => useContext(CartDispatchContext)
