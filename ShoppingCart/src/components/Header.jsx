import React from 'react';
import { Link } from 'react-router-dom';

export const Header = ({cart}) => {

  return (
    <div className='container p-3'>
      <div className='Header bg-blue-600 lg:flex sm:display-flex  text-center w-full justify-center text-xl font-semibold p-5 gap-32'>
        <h3>ShopCart</h3>
        <h3 ><Link to={"/"}>Home</Link></h3>
        <h3><Link to={"/Viewcart"}>ViewCart</Link></h3>
        <h3>count-{cart.length}</h3>
      </div>
    </div>
  );
};
