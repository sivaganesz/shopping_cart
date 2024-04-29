import React, { useState } from 'react'

export const Product = ({ product,cart,setcart }) => {
    const AddCart = () =>{
        setcart([...cart,product])
    }
    const removeCart = () =>{
        setcart(cart.filter((c)=>c.id!==product.id))

    }
    const Name = product.name.length >15 ? product.name.substring(0,20)+"..":product.name;
    return (
        <div className='flex'>
                    <div className='product mt-3 ml-5 w-52 h-68 border p-5'>
                        <div className="img flex justify-center items-center">
                            <img src={product.pic} className='w-28 h-28' alt={product.name} />
                        </div>
                        <div className='details mt-2'>
                            <h3>{product.name}</h3>
                            <p>Price Rs:{product.amt}</p>
                            <p>FoodType:{product.foodtype}</p>
                        {cart.includes(product)?(<button className='bg-red-400 mt-2 w-24 rounded  hover:bg-red-900 hover:text-white p-0.5'onClick={removeCart}>remove to cart</button>
):                            <button className='bg-green-400 mt-2 w-24 rounded  hover:bg-green-900 hover:text-white p-0.5'  onClick={AddCart}>Add to cart</button>
}
                        </div>
                    </div>
        </div>
    )
}
