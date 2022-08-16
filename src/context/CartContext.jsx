import { createContext, useEffect, useState } from 'react'

export const CartContext = createContext();


const CartProvider = ( props ) => {
    const [cart, setCart] = useState([]);
    const [totalUnidades, setTotalUnidades] = useState(0);
    const [totalPrecio, setTotalPrecio] = useState(0);

    const addToCart = ( item, cantidad ) => {
        if(isInCart(item.id)){
            sumarCantidad( item, cantidad );
        } else {
            setCart([...cart, {...item, cantidad}])
        }
    }

    const clearCart = () => {
        cart.setCart([]);
    }

    const isInCart = ( id ) => {
        return cart.some((prod) => id === prod.id);
    }

    const sumarCantidad = ( item, cantidad ) => {
        const addProd = cart.map((prod) => 
            prod.id === item.id ? {...prod, cantidad: cantidad + prod.cantidad} : prod
        );
        setCart(addProd);
    }

    const deleteProd = ( item ) => {
        const cartUpdate = cart.filter((prod) => prod !== item.id);
        setCart(cartUpdate);
    }

    const unidades = () => {
        const cartCopia = [...cart];
        let cantidades = 0;
        cartCopia.forEach((prod) => {cantidades = cantidades + prod.cantidad});
        setTotalUnidades(cantidades);
    }

    const total = () => {
        const cartCopia = [...cart];
        let cantidadPrecio = 0;
        cartCopia.forEach((prod) => {cantidadPrecio = cantidadPrecio + prod.cantidad * prod.price});
        setTotalPrecio(cantidadPrecio)
    }

    const aumentarUno = (item) => {
        const cartUpdate = cart.map((prod) =>
            prod.id === item.id
                ? { ...prod, cantidad: prod.cantidad + 1 }
                : prod
        );

        setCart(cartUpdate);
    };

    const disminuirUno = (item) => {
        const cartUpdate = cart.map((prod) =>
            prod.id === item.id ? { ...prod, cantidad: prod.cantidad - 1 } : prod
        );

        setCart(cartUpdate);
    };

    useEffect(() => {
        unidades();
        total();
    }, [cart]);

    return (
        <CartContext.Provider
            value={{
                cart,
                totalPrecio,
                totalUnidades,
                addToCart,
                clearCart,
                deleteProd,
                total,
                aumentarUno,
                disminuirUno,
                isInCart,
            }}
        >
            {props.children}
        </CartContext.Provider>
    );
    
}

export default CartProvider;