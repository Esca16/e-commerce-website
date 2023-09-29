import Category from "@/components/HomePage/Category";
import NavBar from "@/components/HomePage/Navbar";
import PopularProduct from "@/components/HomePage/PopularProduct";
import CartProvider from "@/context/CartProvider";
import ProductProvider from "@/context/ProductProvider";

export default async function Home() {
  return (
    <ProductProvider>
      <CartProvider>
        <NavBar />
        <main>
          <div className="container mx-auto">
            <h1>Home Page</h1>
            <br />
            <Category />
            <PopularProduct />
          </div>
        </main>
      </CartProvider>
    </ProductProvider>
  )
}
