"use client"
import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cartProducts, setCartProducts] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [isOpenCartPanel, setIsOpenCartPanel] = useState(false);

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

    const cartUpdate = (update_product) => {
        console.log(update_product);
        const updatedProducts = cartProducts.map(product => {
            if (product.id == update_product.id) {
                return update_product
            }
            return product;
        })
        setCartProducts([...updatedProducts])
    }

    return (
        <CartContext.Provider value={{ addCard, cartProducts, cartCount, isOpenCartPanel, setIsOpenCartPanel, cartUpdate }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;