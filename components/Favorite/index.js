"use client"
import { ProductContext } from "@/context/ProductProvider";
import { useContext } from "react";
import ProductCard from "../utils/ProductCard";

const FavoriteList = () => {
    const { favoriteProducts } = useContext(ProductContext)
    return (
        <div className="flex flex-wrap gap-y-5 mt-5 ">
            {favoriteProducts.map((fProduct) => (
                <ProductCard product={fProduct} key={fProduct.id + "favorite"} />
            ))}
        </div>
    );
}

export default FavoriteList;