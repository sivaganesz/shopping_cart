import React, { useState } from 'react'
import Data from './Data.json'
import { Product } from './Product'
export const Home = ({cart , setcart}) => {
    const [products] = useState(Data)
  return (  
    <div className='p-4'>
        <div className="container p-3 flex flex-wrap gap-1 justify-center">
        {products.map((product)=>(
                <Product key={product.id} product={product} cart={cart} setcart={setcart}/>
            ))}
        </div>
    </div>
  )
}   
