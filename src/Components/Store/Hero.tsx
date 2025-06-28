import Image from "next/image";
import hero_image from "@/../public/images/hero_image.png";
import download_icon from "@/../public/icons/store/download.svg";

const Hero = () => {
  return (
    <div className="w-screen h-screen flex flex-row justify-center md:justify-end items-center md:items-start
    bg-gradient-to-l from-[#6B66FF] from-0% to-[#4B45EB] to-100%">
        <div className="flex flex-col items-center md:items-start gap-3 text-white px-[5rem] py-[5rem] mb-[12rem]" style={{ direction: 'rtl' }}>
            <h1 className="text-[3rem] md:text-[4rem] iransans_demi">
                کالا اندیش مایسا
            </h1>
            <h2 className="max-w-[22rem] md:max-w-none text-[1.6rem] md:text-[2rem] iransans_regular text-center md:text-right">
                رضایت شما در اولویت است یک شعار نیست!
            </h2>
            <button className="w-fit flex flex-row justify-center items-center gap-1 border-2 border-white px-3 py-2 rounded-xl mt-4">
                <h4>
                    کاتالوگ محصولات
                </h4>
                <Image src={download_icon} width={30} alt="Click to Download Products Catalog" />
            </button>
        </div>
        <div className="absolute max-w-[600px] left-0 bottom-0">
            <Image src={hero_image} alt="کالا اندیش مایسا: نفس راحت برای همه!" />
        </div>
    </div>
  )
}

export default Hero