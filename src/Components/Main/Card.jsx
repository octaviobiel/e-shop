import React from 'react'
import { Link } from 'react-router-dom'
import style from './Card.module.css'

const Card = ({ prod }) => {
  return (
    <div className = { style.card }>
        <h3>{prod.name}</h3>
        <img src={prod.img} alt="producto" />
        <h4>$ {prod.price}</h4>
        <Link to={`/item/${prod.id}`}>Detalle</Link>
    </div>
  )
}

export default Card