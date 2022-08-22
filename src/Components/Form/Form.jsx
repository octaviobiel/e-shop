import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Form = ({ cart, totalValue, clearCart}) => {

    const URL = 'https://fake-products-eric.herokuapp.com/api/orders';
    
    const [nombre, setNombre] = useState('');
    const [telefono, setTelefono] = useState('');

    const nav = useNavigate();

    const submit = (e) => {
        e.preventDefault();
        compra();
    }

    const compra = async () => {
        const sendInfo = await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                cart,
                total: totalValue,
                nombre,
                telefono
            }),
        });
        const response = await sendInfo.json();
        clearCart();
        nav(`/checkout/${response.id}`)
    }

    const handleNombre = (e) => {
        setNombre(e.target.value);
    }

    const handleTelefono = (e) => {
        setTelefono(e.target.value);
    }

  return (
    <div>
        <form onSubmit={submit}>
            <input
                type="text"
                name="Nombre"
                placeholder="Nombre"
                onChange={handleNombre}
                value={nombre}
            />
            <input
                type="text"
                name="Telefono"
                placeholder="Telefono"
                onChange={handleTelefono}
                value={telefono}
            />
            <button>Enviar</button>
        </form>
    </div>
  )
}

export default Form