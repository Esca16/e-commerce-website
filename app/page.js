import Category from "@/components/HomePage/Category";
import ForYouProduct from "@/components/HomePage/ForYouProduct";
import NavBar from "@/components/HomePage/Navbar";
import PopularProduct from "@/components/HomePage/PopularProduct";
import CartProvider from "@/context/CartProvider";
import ProductProvider from "@/context/ProductProvider";

export default async function Home() {
  return (
    <ProductProvider>
      <CartProvider>
        <NavBar />
        <main className="mt-24">
          <div className="container mx-auto">
            <h1>Home Page</h1>
            <br />
            <Category />
            <PopularProduct />
            <ForYouProduct />
          </div>
        </main>
      </CartProvider>
    </ProductProvider>
  )
}
