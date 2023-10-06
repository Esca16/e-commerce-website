"use client"
import FavoriteList from "@/components/Favorite";
import AddAllProductsToCart from "@/components/Favorite/AddAllProductsToCart";
import { ProductContext } from "@/context/ProductProvider";
import { useContext } from "react";

const FavoritePage = () => {
    const { favoriteProducts } = useContext(ProductContext)
    return (
        <div className="mt-4">
            <h1 className="font-semibold text-lg px-4">Favorite Items <span>{favoriteProducts.length}</span></h1>
            {favoriteProducts.length > 0 && <AddAllProductsToCart />}
            <FavoriteList />
        </div>
    );
}

export default FavoritePage;