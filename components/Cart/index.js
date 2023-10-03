"use client"
import { CartContext } from "@/context/CartProvider";
import { useContext } from "react";
import CartPanel from "./CartPanel";

const CartSection = () => {
    const { isOpenCartPanel } = useContext(CartContext)
    return (
        <>
            {isOpenCartPanel && <CartPanel />}
        </>
    );

}

export default CartSection;