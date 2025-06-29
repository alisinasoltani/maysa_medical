'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';

type ImageSwiperProps = {
  imageFilenames: string[];
  folderPath?: string;
};

const ImageSwiper: React.FC<ImageSwiperProps> = ({ imageFilenames, folderPath = "/images/slider" }) => {
  return (
    <div className='relative -top-[5rem] w-[1000px] rounded-3xl overflow-hidden flex justify-center items-center content-center'>
        <Swiper className='w-[100%] max-w-[1000px]' centeredSlides={true} spaceBetween={10} slidesPerView={1} modules={[Pagination]}>
            {imageFilenames.map((filename) => (
                <SwiperSlide key={filename} className='flex justify-center w-full'>
                <img
                    className='rounded-3xl'
                    src={`${folderPath}/${filename}`}
                    alt={filename}
                    style={{ width: '100%', height: 'auto' }}
                />
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
  );
};

export default ImageSwiper;
