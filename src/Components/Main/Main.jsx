import React from 'react'
import CardContainer from './CardContainer'
import style from './Main.module.css'
import {Routes, Route} from 'react-router-dom'
import DetailContainer from './DetailContainer'
import Cart from './Cart/Cart'
import Checkout from './Checkout/Checkout'

const Main = () => {
  return (
    <div>
        <Routes>
          <Route path="/" element={<CardContainer/>} />
          <Route path="/category/:category" element={<CardContainer/>} />
          <Route path="/item/:id" element={<DetailContainer/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/checkout/:idCompra" element={<Checkout/>}/>
        </Routes>
    </div>
  )
}

export default Main