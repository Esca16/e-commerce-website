"use client"
import Category from "@/components/HomePage/Category";
import ForYouProduct from "@/components/HomePage/ForYouProduct";
import PopularProduct from "@/components/HomePage/PopularProduct";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data } = useSession()
  return (
    <main>
      {JSON.stringify(data)}
      <div className="container mx-auto px-4">
        <h1>Home Page</h1>
        <br />
        <Category />
        <PopularProduct />
        <ForYouProduct />
      </div>
    </main>
  )
}
