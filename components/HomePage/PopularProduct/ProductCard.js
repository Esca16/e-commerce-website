import Cart from "./Cart";

const ProductCard = ({ product }) => {
    return (
        <div className="basis-1/2 md:basis-1/3 lg:basis-1/4 px-2">
            <div className="bg-violet-50 relative">
                <div className="absolute bottom-3 right-4">
                    <Cart/>
                </div>
                <div className="relative">
                    <div className="absolute top-2 right-2">
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;