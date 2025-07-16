import Image from "next/image";
import maysa_logo from "@/../public/images/maysa.png";
import bekr_logo from "@/../public/images/bekr.png";
import supa_logo from "@/../public/images/supa.jpg";
import ava_logo from "@/../public/images/AvaMedical.png";

const Brands = () => {
  return (
    <div className="relative -top-[4rem] flex justify-center items-center px-[6rem] pt-[2rem] pb-[2rem]">
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-0 shadow-lg rounded-3xl">
            <div className="w-[15rem] py-6 px-4 flex flex-col justify-center items-center gap-0 border-1 border-gray-300 rounded-t-3xl rounded-tl-3xl rounded-tr-3xl md:rounded-tr-none md:rounded-l-3xl"
            style={{ direction: 'rtl' }}>
                <div className="w-[8rem] md:h-[8rem]">
                    <Image src={maysa_logo} alt="" />
                </div>
                <h3 className="pt-4 md:pt-8 iransans_med text-lg md:text-xl">کآرومد</h3>
                <h5 className="pt-2 iransans_regular text-gray-500 text-lg">12 محصول</h5>
            </div>
            <div className="w-[15rem] py-6 px-4 flex flex-col justify-center items-center gap-2 border-1 border-gray-300"
            style={{ direction: 'rtl' }}>
                <div className="md:w-[8rem] w-[6rem] md:h-[8rem]">
                    <Image src={bekr_logo} alt="" />
                </div>
                <h3 className="pt-4 md:pt-8 iransans_med text-xl">بکر</h3>
                <h5 className="pt-2 iransans_regular text-gray-500 text-lg">23 محصول</h5>
            </div>
            <div className="w-[15rem] py-6 px-4 flex flex-col justify-center items-center gap-2 border-1 border-gray-300"
            style={{ direction: 'rtl' }}>
                <div className="md:w-[8.5rem] w-[6rem]">
                    <Image src={supa_logo} alt="" />
                </div>
                <h3 className="pt-4 md:pt-8 iransans_med text-xl">سوپا</h3>
                <h5 className="pt-2 iransans_regular text-gray-500 text-lg">7 محصول</h5>
            </div>
            <div className="w-[15rem] py-6 px-4 flex flex-col justify-end items-center gap-2 border-1 border-gray-300 rounded-bl-3xl rounded-br-3xl md:rounded-bl-none md:rounded-r-3xl"
            style={{ direction: 'rtl' }}>
                <div className="md:w-[12rem] w-[8rem]">
                    <Image src={ava_logo} alt="" />
                </div>
                <h3 className="pt-4 md:pt-8 iransans_med text-xl">آوا مدیکال</h3>
                <h5 className="pt-2 iransans_regular text-gray-500 text-lg">9 محصول</h5>
            </div>
        </div>
    </div>
  )
}

export default Brands