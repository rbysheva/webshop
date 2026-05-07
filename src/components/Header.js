import React, { useState } from 'react'
import { RiShoppingBasket2Line } from "react-icons/ri";
import Order from './Order';


const showOders =(props) => {
    let sum = 0
    props.orders.forEach(el => sum += Number.parseFloat(el.price))
  return <div>
    {props.orders.map(el => (
    <Order key={el.id} item={el} onDelete={props.onDelete}  />
    ))}
    <p class ='sum'>Total: {new Intl.NumberFormat().format(sum)}$ </p>
    </div>
}

const showNothing = () => {
  return (<div className='empty'>
    <h2>Your cart is currently empty</h2>
  </div>)
}

export default function Header(props) {
let [cartOpen, setCartOpen] = useState(false)

  return (
    <header>
            <div>
                <span className='logo'> Cyber LOVE </span>
                <ul className='nav'>
                   <li>About CyberLOVE</li>
                   <li>Get in Touch</li>
                   <li>My Space</li>
                </ul>
                <RiShoppingBasket2Line onClick={() => setCartOpen(cartOpen = !cartOpen)} className = {`shop-cart-button ${cartOpen && 'active'}`}/>

                {cartOpen && (
                  <div className='shop-cart'>
                    {props.orders.length >0 ?
                    showOders(props) : showNothing()}
                  </div>
                )}
            </div>
            <div className='presentation'> </div>
    </header>
  )
}
