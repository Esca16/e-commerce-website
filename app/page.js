import Category from "@/components/HomePage/Category";
import ForYouProduct from "@/components/HomePage/ForYouProduct";
import PopularProduct from "@/components/HomePage/PopularProduct";

export default async function Home() {
  return (
        <main className="mt-24">
          <div className="container mx-auto">
            <h1>Home Page</h1>
            <br />
            <Category />
            <PopularProduct />
            <ForYouProduct />
          </div>
        </main>
  )
}
