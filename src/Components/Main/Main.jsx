import React from 'react'
import CardContainer from './CardContainer'
import style from './Main.module.css'
import {Routes, Route} from 'react-router-dom'
import DetailContainer from './DetailContainer'
import Cart from './Cart/Cart'

const Main = () => {
  return (
    <div>
        <Routes>
          <Route path="/" element={<CardContainer/>} />
          <Route path="/category/:category" element={<CardContainer/>} />
          <Route path="/item/:id" element={<DetailContainer/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
    </div>
  )
}

export default Main