import React, { useState } from 'react'
import Badge from 'react-bootstrap/Badge'
import Modal from './modal'
import Cart from './cart'
import { useCart } from './ContextReducer'
export default function Navbar() {
  let data=useCart()
  const [CartView,setCartView]=useState(false)
  return (
    <>
    <div className='btn bg-white text-success mx-2' onClick={()=>{setCartView(true)}}> 
    My Cart {" "}
    <Badge pill bg="danger">{data.length}</Badge>
    {CartView?<Modal onClose={()=>setCartView(false)}><Cart/></Modal>:null}
    </div>
    
    </>
  )
}
