import React from 'react'

const CartDetail = ({prod, deleteProd, aumentarUno, disminuirUno}) => {
  return (
    <div>
        <h4>{prod.name}</h4>
        <img src={prod.img} alt={prod.name} />
        <button 
          onClick={() => disminuirUno(prod)}
          disabled={prod.cantidad < 1}
        >-</button>
        <h4>{}</h4>
        <button onClick={() => aumentarUno(prod)}>+</button>
        <h3>Total del producto: {prod.price * prod.cantidad}</h3>
        <button onClick={() => deleteProd(prod)}>Eliminar de carrito</button>
    </div>
  )
}

export default CartDetail