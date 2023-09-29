"use client"
import { CartContext } from "@/context/CartProvider";
import { useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

const CartCount = () => {
    const {cartCount} = useContext(CartContext)
    return (
        <div className="relative w-fit">
            <AiOutlineShoppingCart size={32} className="text-violet-900 cursor-pointer" />
            <span className="absolute text-sm -top-3 -right-2 p-1 text-center rounded-xl text-white bg-violet-500">{cartCount}</span>
        </div>
    );
}

export default CartCount;