import React from 'react'
import { useParams } from 'react-router-dom'

const Checkout = () => {

const { idCompra } = useParams();

  return (
    <div>
        La compra ha sido procesada. Id de seguimiento: {idCompra}
    </div>
  )
}

export default Checkout