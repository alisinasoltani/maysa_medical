import Image from "next/image";
import logo from "@/../public/images/logo.png";
import profile_icon from "@/../public/icons/store/profile.svg";
import notification_icon from "@/../public/icons/store/notification.svg";
import cart_icon from "@/../public/icons/store/cart.svg";
import search_icon from "@/../public/icons/store/search.svg";

const Navbar = () => {
  return (
    <div className="w-screen h-[5rem] bg-white shadow-lg flex flex-row justify-between items-center px-12">
        <div className="flex flex-row justify-start items-center gap-2">
            <button type="submit" className="w-11 h-11 flex flex-row justify-center items-center rounded-full border-[0.5px] 
                border-[#ef6322] hover:shadow-lg hover:bg-[#ef6322] transition-colors duration-300 text-white cursor-pointer">
                    <Image src={profile_icon} width={28} alt="Click to Search Products" />
            </button>
            <button type="submit" className="w-11 h-11 flex flex-row justify-center items-center rounded-full border-[0.5px] 
                border-[#ef6322] hover:shadow-lg hover:bg-[#ef6322] transition-colors duration-300 text-white cursor-pointer">
                    <Image src={notification_icon} width={28} alt="Click to Search Products" />
            </button>
            <button type="submit" className="w-11 h-11 flex flex-row justify-center items-center rounded-full border-[0.5px] 
                border-[#ef6322] hover:shadow-lg hover:bg-[#ef6322] transition-colors duration-300 text-white cursor-pointer">
                    <Image src={cart_icon} width={28} alt="Click to Search Products" />
            </button>
        </div>
        <div className="flex flex-row justify-center items-center">
            <form className="flex flex-row justify-center items-center gap-3">
                <button type="submit" className="w-11 h-11 flex flex-row justify-center items-center rounded-full border-[0.5px] 
                border-[#ef6322] hover:shadow-lg hover:bg-[#ef6322] transition-colors duration-300 text-white cursor-pointer">
                    <Image src={search_icon} width={28} alt="Click to Search Products" />
                </button>
                <input type="text" className="min-w-[22rem] h-11 border-[0.5px] border-[#ef6322] rounded-2xl focus:outline-0 px-4 iransans_regular" style={{ direction: 'rtl' }} />
            </form>
        </div>
        <div>
            <Image src={logo} alt="Maysa Medical Store Logo" height={30} />
        </div>
    </div>
  )
}

export default Navbar;