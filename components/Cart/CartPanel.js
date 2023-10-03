import CartProductList from "./CartProductList";
import CloseButton from "./CloseButton";

const CartPanel = () => {
    return (
        <div className="fixed h-screen w-[40%] bg-slate-200 right-0 top-0 z-20 overflow-y-auto overflow-hidden">
            <div className="flex justify-between px-5 my-4">
                <h1 className="text-lg font-semibold">Your Cart</h1>
                <CloseButton />
            </div>
            <CartProductList />
        </div>
    );
}

export default CartPanel;