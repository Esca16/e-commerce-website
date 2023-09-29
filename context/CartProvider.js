"use client"
import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cartProducts, setCartProducts] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        setCartCount(cartProducts.length);
    }, [cartProducts]);

    const addCard = (product) => {
        const isExistCard = cartProducts.find((pro) => pro.id === product.id); 
        if (isExistCard) {
            return;
        } else {
            setCartProducts([...cartProducts, product])
        }
    }
    return (
        <CartContext.Provider value={{ addCard, cartProducts, cartCount }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;