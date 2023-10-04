"use client"
import { CartContext } from "@/context/CartProvider";
import { useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Cart = ({ product }) => {

    const { addCard } = useContext(CartContext);

    const onClickAddCart = () => {
        product.orderQuantity = 1;
        addCard(product);
    }
    return (
        <>
            <button>
                <AiOutlineShoppingCart onClick={onClickAddCart} size={24} className="text-violet-900 cursor-pointer" />
            </button>
        </>
    );
}

export default Cart;