import Image from 'next/image';
import slider from '@/../public/images/3dslider.png';

const Hero = () => {
  return (
    <div className="h-full w-screen flex flex-col items-center justify-center py-[4rem] text-black gap-10">
        <div className='flex flex-col gap-1 justify-center items-center'>
            <h1 className='title text-[2.2rem] font-bold md:text-[5.5rem] lg:text-[7rem]'>Maysa Medical Co.</h1>
            <h2 className='iransans_med text-[1.1rem] md:text-[2.5rem] lg:text-[3rem]'>تامین بی دغدغه کالای پزشکی</h2>
        </div>
        <div className='w-[280px] md:w-[500px] lg:w-[800px]'>
            <Image src={slider} alt='maysa medical 3d slider' />
        </div>
    </div>
  )
}

export default Hero