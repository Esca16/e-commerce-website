import Link from "next/link";
import CartCount from "./CartCount";

const Header = () => {
    return (
        <nav className="flex bg-violet-50 py-5 px-4 items-center justify-between sticky top-0 w-full z-10">
            <div>
                <p className="text-3xl font-semibold text-violet-900">Logo</p>
            </div>
            <div className="flex gap-4">
                <Link href={"/products/Favorite"} className="font-semibold text-center">Favorite Products</Link>
                <CartCount />
            </div>
        </nav>
    );
}
export default Header;