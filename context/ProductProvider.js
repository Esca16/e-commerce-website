"use client"
import { createContext, useEffect, useState } from "react";
import randomItem from "random-item";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [popularProducts, setPopularProducts] = useState([]);
    const [forYouProducts, setForYouProducts] = useState([]);
    const [favoriteProducts, setFavoriteProducts] = useState([]);

    const ForYouProduct = (products_array) => {
        let forU = [];
        while (forU.length != 8) {
            const randomProducts = randomItem(products_array);
            const isDuplicate = forU.find((item) => item.id == randomProducts.id);
            if (!isDuplicate) {
                forU.push(randomProducts);
            }
        }
        setForYouProducts([...forU]);
    }
    const loadProduct = async () => {
        const res = await fetch("https://dummyjson.com/products");
        const { products } = await res.json();

        ForYouProduct(products);
        setProducts([...products]);
        const productFilter = products.filter((product) => product.rating > 4.5);
        const pProduct = productFilter.slice(0, 4);
        console.log(pProduct);
        setPopularProducts([...pProduct]);
    }

    useEffect(() => {
        loadProduct();
    }, []);

    const addFavoriteProducts = (products) => {
        const isExistFavProducts = favoriteProducts.find((favProduct) => favProduct.id == products.id);
        if (isExistFavProducts) {
            return;
        }
        setFavoriteProducts([...favoriteProducts, products])
    }

    const removeFavoriteProducts = (product_id) => {
        const removeProductFilter = favoriteProducts.filter((pd) => pd.id !== product_id);
        setFavoriteProducts([...removeProductFilter])
    }

    return (
        <ProductContext.Provider value={{ products, popularProducts, forYouProducts, favoriteProducts, addFavoriteProducts, removeFavoriteProducts }}>{children}</ProductContext.Provider>
    );
}

export default ProductProvider;