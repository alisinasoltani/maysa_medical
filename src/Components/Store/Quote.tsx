import Image from "next/image";
import quote_image from "@/../public/images/quote_image.png";

const Quote = ({ quote, name, career, profile_image_path }: { quote: string, name: string, career: string, profile_image_path: string }) => {
  return (
    <div className="relative flex flex-col justify-center items-end gap-8 bg-[#FFDB8F] rounded-3xl overflow-hidden px-12 py-12 max-w-[550px]">
        <h4 className="iransans_regular text-xl z-10" style={{ direction: 'rtl' }}>
            { quote }
        </h4>
        <div className="flex flex-row gap-3 z-10">
            <div className="iransans_light text-sm text-right">
                <h5>
                    { name }
                </h5>
                <h5>
                    { career }
                </h5>
            </div>
            <img src={`./images/${profile_image_path}.png`} width={55} alt={`${name}'s Quote on Maysa Medical`} />
        </div>
        <div className="absolute bottom-0 left-0 z-0">
            <Image src={quote_image} alt="What Customers Said About Maysa Medical" width={140} />
        </div>
    </div>
  );
}

export default Quote;