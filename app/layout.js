import CartProvider from '@/context/CartProvider'
import './globals.css'
import { Inter } from 'next/font/google'
import ProductProvider from '@/context/ProductProvider'
import Header from '@/components/Header'
import CartSection from '@/components/Cart'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative`}>
        <CartProvider>
          <ProductProvider>
            <Header />
            {children}
            <CartSection />
          </ProductProvider>
        </CartProvider>
      </body>
    </html>
  )
}
