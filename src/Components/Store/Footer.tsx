import Image from "next/image";
import Link from "next/link"
import instagram_logo from "@/../public/icons/instagram.svg";
import whatsapp_logo from "@/../public/icons/whatsapp.svg";
import footer_image from "@/../public/images/footer_image.png";

const Footer = () => {
  return (
    <div className='w-screen bg-[#19232F] text-white flex flex-col gap-12 justify-center items-center pt-[6rem] px-[6rem]'>
        <div className="w-full flex flex-col gap-2 justify-center items-center lg:items-start text-center lg:text-right" style={{ direction: 'rtl' }}>
            <h2 className="iransans_med text-[1.5rem] md:text-[2.5rem]">تجهیزات پزشکی کالا اندیش مایسا</h2>
            <h3 className="iransans_light text-[1rem] md:text-[1.5rem] max-w-[30rem] lg:max-w-none">تامین بی دغدغه کالای پزشکی با بهترین کیفیت و امن ترین و سریع ترین ارسال</h3>
        </div>
        <div className="w-full flex flex-col lg:flex-row justify-between gap-12 lg:gap-0 items-center lg:items-start lg:text-right" style={{ direction: 'rtl' }}>
            <div className="flex flex-col justify-start items-center lg:items-start gap-3 iransans_regular text-[0.8rem] md:text-[1.5rem] max-w-[500px] text-center lg:text-right">
                <h5>نشانی: اصفهان، خیابان طیب، خیابان میرداماد، نبش کوچه 16، ساختمان ماهان، طبقه اول.</h5>
                <h5>شماره تماس:  03132372704</h5>
                <h5>شماره همراه: 09922886982</h5>
                <h5>مدیرعامل: مسعود امامی کیا</h5>
                <h5>تلفکس: 03132371453</h5>
                <h5>ایمیل: info@maysamedical.com</h5>
                <div className="flex justify-between items-center gap-4 pt-4">
                <Link href={""}>
                    <button className="w-[3.3rem] h-[3.3rem] bg-gradient-to-bl from-[#405DE6] from-15% via-[#5B51D8] via-35% via-[#833AB4] via-60% to-[#F56040] to-100% rounded-full flex justify-center items-center">
                    <Image src={instagram_logo} width={32} height={32} alt="instagram logo" />                
                    </button>
                </Link>
                <Link href={""}>
                    <button className="w-[3.3rem] h-[3.3rem] bg-gradient-to-bl from-[#075E54] from-13% via-[#128C7E] via-63% to-[#25D366] to-100% rounded-full flex justify-center items-center">
                    <Image src={whatsapp_logo} width={32} height={32} alt="instagram logo" />                
                    </button>
                </Link>
                </div>
            </div>
            <div className="flex justify-end w-[250px] md:w-[400px] h-[250px] md:h-[400px] rounded-md overflow-hidden">
                <iframe className="w-[250px] md:w-[400px] h-[250px] md:h-[400px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d399.64832288162273!2d51.66319137684377!3d32.66164836958336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fbc35eb15208f33%3A0xc585d2ca55d2c1df!2z2LTYsdqp2Kog2YXZh9mG2K_Ys9uMINm-2LLYtNqp24wg2YXYp9uM2LPYpw!5e0!3m2!1sen!2s!4v1751025741470!5m2!1sen!2s" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
        <div className="w-screen flex flex-row justify-center items-end">
            <Image src={footer_image} height={300} alt="کالا اندیش مایسا: سلامتی، باهم" />
        </div>
    </div>
  );
}

export default Footer;