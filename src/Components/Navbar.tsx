import Image from "next/image";
import Link from "next/link";
import logo from "@/../public/images/logo.png";

const Navbar = () => {
  return (
    <div className="fixed top-0 z-[100] w-screen flex justify-between items-center h-[3rem] px-12 bg-[rgba(255,255,255,0.6)] backdrop-blur-3xl">
        <div></div>
        <div className="flex gap-6 justify-between items-center iransans_med">
            <Link href={""}>
                <h3>
                    فروشگاه
                </h3>
            </Link>
            <Link href={""}>
                <h3>
                    درباره ما
                </h3>
            </Link>
            <Link href={""}>
                <h3>
                    تماس با ما
                </h3>
            </Link>
        </div>
        <div>
            <Image src={logo} height={30} alt="Maysa Medical Logo" />
        </div>
    </div>
  )
}

export default Navbar