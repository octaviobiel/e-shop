import React from 'react'

const CartDetail = ({prod, deleteProd, aumentarUno, disminuirUno}) => {
  return (
    <div>
        <h4>{prod.name}</h4>
        <img src={prod.img} alt={prod.name} />
        <button onClick={disminuirUno}>-</button>
        <button onClick={aumentarUno}>+</button>
        <h3>Precio total: {prod.price * prod.cantidad}</h3>
        <button onClick={deleteProd}>Eliminar de carrito</button>
    </div>
  )
}

export default CartDetail