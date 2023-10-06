import Link from "next/link";

const EmptyFavorite = () => {
    return (
        <div className="w-full flex flex-col gap-2 items-center py-8 bg-violet-200">
            <p className="text-sm">There are no favorite items yet.</p>
            <Link href={"/"} className="bg-violet-900 text-sm text-white px-3 py-4 w-fit">Continue Shopping</Link>
        </div>
    );
}

export default EmptyFavorite;