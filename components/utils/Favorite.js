"use client"
import { ProductContext } from "@/context/ProductProvider";
import { useContext, useEffect, useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"

const Favorite = ({ product }) => {
    const [isFavorite, setIsFavorite] = useState(false);
    const { addFavoriteProducts, removeFavoriteProducts, favoriteProducts } = useContext(ProductContext)

    useEffect(() => {
        const findProduct = favoriteProducts.find((pd) => pd.id === product.id);
        if (findProduct) {
            setIsFavorite(true)
        }
    }, [favoriteProducts,product.id])

    const onClickFavoriteHandler = () => {
        setIsFavorite(!isFavorite)
        if (!isFavorite) {
            addFavoriteProducts(product);
        } else {
            removeFavoriteProducts(product.id)
        }
    }
    return (
        <>
            <div className="absolute top-2 right-2" onClick={onClickFavoriteHandler}>
                {isFavorite ? (
                    <button>
                        <AiFillHeart size={24} className="text-violet-900 cursor-pointer" />
                    </button>
                ) : (
                    <button>
                        <AiOutlineHeart size={24} className="text-violet-900 cursor-pointer" />
                    </button>
                )}
            </div>
        </>
    );
}

export default Favorite;