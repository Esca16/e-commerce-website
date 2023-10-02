import CartCount from "./CartCount";

const NavBar = () => {
    return (
        <nav className="flex bg-violet-50 py-5 px-4 items-center justify-between fixed w-full -mt-24 z-10">
            <div>
                <p className="text-3xl font-semibold text-violet-900">Logo</p>
            </div>
            <div>
                <CartCount />
            </div>
        </nav>
    );
}
export default NavBar;