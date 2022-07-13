import React from 'react'
import ShoppingCart from '../components/ShoppingCart'
import Navbar from './Navbar'
import '../styles/cart.css'

const CartPage = () => {
  return (
    <div>
      <Navbar/>
      <ShoppingCart/>
    </div>
  )
}

export default CartPage