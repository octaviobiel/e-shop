import React, {useContext} from 'react'
import { useState } from 'react'
import { CartContext } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom'

const CardDetail = ( {item }) => {

  const { addToCart, cart, isInCart } = useContext(CartContext);

  const isInCartDetail = isInCart(cart, item.id);

  const [counter, setCounter] = useState(1);

  const navigate = useNavigate();

  const agregar = () => {
    setCounter(counter+1);
  }

  const restar = () => {
    setCounter(counter-1);
  }

  const agregarAlCarrito = () =>{
    addToCart(counter);
    navigate('/cart');
  }

  return (
    <div>
        <h1>{item.name}</h1>
        <img src={item.img} alt="img" />
        <h2>$ {item.price}</h2>
        {
          isInCartDetail ? <h3>El producto ya se encuentar en el carrito</h3>
          :
          <div>
            <button disabled={counter < 1} onClick={restar}>-</button>{counter}<button onClick={agregar}>+</button>
            <button onClick={agregarAlCarrito}>Agregar a carrito</button>
          </div>
        }
    </div>
  )
}

export default CardDetail