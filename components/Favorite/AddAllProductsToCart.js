"use client"
import { CartContext } from "@/context/CartProvider";
import { ProductContext } from "@/context/ProductProvider";
import { useContext } from "react";

const AddAllProductsToCart = () => {
    const { addAllFavoriteProductsToCart } = useContext(CartContext);
    const { favoriteProducts } = useContext(ProductContext)
    return (
        <div className="px-2">
            <button onClick={() => addAllFavoriteProductsToCart(favoriteProducts)} className="mt-4 bg-violet-900 text-sm text-white py-3 px-3 w-fit">Add All to Cart</button>
        </div>
    );
}

export default AddAllProductsToCart;