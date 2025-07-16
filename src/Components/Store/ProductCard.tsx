import Image from "next/image";
import cart_icon from "@/../public/icons/store/cart.svg";
import Link from "next/link";

interface Product {
    name: string;
    price: string;
    picture_path: string;
}

const ProductCard = (product: Product) => {
  return (
    <div className="flex flex-col justify-center items-center gap-3 w-min pb-4">
        <Link href={""}>
            <div className="flex justify-center items-center w-[250px]">
                <img src={`./images/${product.picture_path}.png`} alt={`کالا اندیش مایسا: ${product.name}`} />
            </div>
        </Link>
        <Link href={""}>
            <div className="cart_logo_pseudo relative w-12 h-12 flex justify-center items-center rounded-full bg-[#F7B32E]">
                <Image src={cart_icon} width={24} alt="اضافه کردن محصول به سبد خرید" />
            </div>
        </Link>
        <Link href={""}>
            <h3 className="iransans_med text-base px-4 text-center">
                { product.name }
            </h3>
        </Link>
        <h5 className="iransans_regular px-4 text-center text-[12px]">
            { product.price }
        </h5>
    </div>
  )
}

export default ProductCard