import React, { useEffect, useState } from 'react'

export const Viewcart = ({cart,setcart}) => {
    const [total,settotal]=useState(0)

    useEffect(()=>{
        settotal(cart.reduce((acc,curr)=> acc + parseFloat(curr.amt),0))
    },[cart])

    const removecart = (index)=>{
   const removeCart  = [...cart];
   removeCart.splice(index,1)
   setcart(removeCart)
    }
  return (
    <div className='cart-container p-5 pl-10'>
        <h1 className='text-2xl font-bold'>CART PRODUCTS</h1>
        {cart.map((product)=>(
        <div className="cart-product border w-96 p-5 flex mt-5">
        <div className="img">
        <img src={product.pic} className='w-44 h-28' alt={product.name} />
        </div>
        <div className="cart-product-details ml-5 text-center mt-3">
            <h3>Product Name: {product.name}</h3>
            <p>Price Rs : {product.amt}</p>
        </div>
        <button className='ml-10 mt-5 bg-red-600 w-20 h-10 rounded' onClick={removecart}>remove</button>
        
    </div>
       )) }

        <h2 className='mt-5 ml-2 text-2xl font-semibold'>Total : ₹  {total}</h2>

    </div>
  )
}
