import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../../context/CartContext'
import { Link } from 'react-router-dom'
import CartDetail from './CartDetail'

const Cart = () => {

    const { cart, totalPrecio, totalUnidades, addToCart, clearCart, deleteProd, aumentarUno, disminuirUno} = useContext(CartContext);

  if(cart.length === 0){
    return(
        <>
            <h1>El carrito esta vacío</h1>
            <h2><Link to="/">Retornar a la pagina principal</Link></h2>
        </>
    )}
    return(
        <>
            {cart.map((prod) => (
                <CartDetail
                key={prod.id}
                prod={prod}
                deleteProd={deleteProd}
                aumentarUno={aumentarUno}
                disminuirUno={disminuirUno}
                />
            ))}
            <div>
                <button onClick={clearCart}>Vaciar carrito</button>
                <h2>Total: {totalPrecio}</h2>
            </div>
        </>
    )

    
}


export default Cart