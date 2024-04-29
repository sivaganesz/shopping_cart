import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import { Viewcart } from './components/Viewcart'
import { Home } from './components/Home'
function App() {
  const [cart , setcart]=useState([])
  return (
    <BrowserRouter>
      <>
        <Header cart={cart}/>
        <div className='container'>
          <Routes>
            <Route path="/" element={<Home cart={cart} setcart={setcart}/>} />
            <Route path="/Viewcart" element={<Viewcart cart={cart} setcart={setcart}/>} />
          </Routes>
        </div>
      </>
    </BrowserRouter>
  )
}

export default App
