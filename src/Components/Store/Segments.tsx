import Image from "next/image";
import ultra from "@/../public/images/ultra.png";
import lab_products from "@/../public/images/lab_producs2.png";
import women_products from "@/../public/images/women_products.png";
import { InteractiveHoverButton } from "../ui/interactive-hover-button";
import { ArrowLeft } from "lucide-react";

const Segments = () => {
  return (
    <div className="w-screen flex flex-col gap-0 justify-center items-center px-[4rem] py-[8rem]">
     <div className="w-screen flex flex-col lg:flex-row justify-center items-center lg:items-end lg:gap-[12rem] bg-[#26A9E1] pb-[10rem] max-h-[700px] lg:max-h-[450px]">
        <div className="w-[600px] -translate-y-12 lg:translate-y-0">
          <Image src={ultra} alt="کالا اندیش مایسا: معرفی محصولات سونوگرافی" />
        </div>
        <div className="place-self-start lg:-translate-y-10 flex flex-col items-center lg:items-start w-full lg:w-fit" style={{ direction: 'rtl' }}>
          <h2 className="iransans_med text-[3.3rem] text-[#003CA9] ultra_stroke inline-block">
            معرفی محصولات سونوگرافی
          </h2>
          <h3 className="iransans_regular text-[2rem] w-[31rem] text-white text-right pt-4">
            برای مشاهده لیست قیمت، محصولات و برندها،
            روی لینک زیر کلیک کنید.
          </h3>
          <button className="flex items-center justify-center gap-2 rounded-xl py-3 px-3 iransans_regular text-2xl mt-8  
          border-2 border-white bg-none hover:bg-white text-white hover:text-black transition-colors duration-300 cursor-pointer">
            <h5>محصولات سونوگرافی</h5>
            <ArrowLeft />
          </button>
        </div>
     </div>
     <div className="w-screen flex flex-col lg:flex-row justify-center items-center lg:items-end gap-[8rem] lg:gap-[12rem] bg-[#00A79D] pb-[6rem] h-[1200px] lg:max-h-[450px]">
        <div className="place-self-start lg:-translate-y-10 flex flex-col items-center lg:items-start w-full lg:w-fit" style={{ direction: 'rtl' }}>
          <h2 className="iransans_med text-[3.3rem] text-[#015853] lab_products_stroke inline-block">
            معرفی محصولات آزمایشگاهی
          </h2>
          <h3 className="iransans_regular text-[2rem] w-[31rem] text-white text-right pt-4">
            برای مشاهده لیست قیمت، محصولات و برندها،
            روی لینک زیر کلیک کنید.
          </h3>
          <button className="flex items-center justify-center gap-2 rounded-xl py-3 px-3 iransans_regular text-2xl mt-8  
          border-2 border-white bg-none hover:bg-white text-white hover:text-black transition-colors duration-300 cursor-pointer">
            <h5>محصولات آزمایشگاهی</h5>
            <ArrowLeft />
          </button>
        </div>
        <div className="w-[600px] -translate-y-12 lg:translate-y-0">
          <Image src={lab_products} alt="کالا اندیش مایسا: معرفی محصولات آزمایشگاهی" />
        </div>
     </div>
     <div className="w-screen flex flex-col lg:flex-row justify-center items-center lg:items-end lg:gap-[12rem] bg-[#6863FA] pb-[10rem] max-h-[700px] lg:max-h-[450px]">
        <div className="w-[600px] -translate-y-12 lg:translate-y-0">
          <Image src={women_products} alt="کالا اندیش مایسا: معرفی محصولات زنان و زایمان" />
        </div>
        <div className="place-self-start lg:-translate-y-10 flex flex-col items-center lg:items-start w-full lg:w-fit" style={{ direction: 'rtl' }}>
          <h2 className="iransans_med text-[3.3rem] text-[#221F73] ultra_stroke inline-block">
            محصولات زنان و زایمان
          </h2>
          <h3 className="iransans_regular text-[2rem] w-[31rem] text-white text-right pt-4">
            برای مشاهده لیست قیمت، محصولات و برندها،
            روی لینک زیر کلیک کنید.
          </h3>
          <button className="flex items-center justify-center gap-2 rounded-xl py-3 px-3 iransans_regular text-2xl mt-8  
          border-2 border-white bg-none hover:bg-white text-white hover:text-black transition-colors duration-300 cursor-pointer">
            <h5>محصولات زنان و زایمان</h5>
            <ArrowLeft />
          </button>
        </div>
     </div>
    </div>
  )
}

export default Segments