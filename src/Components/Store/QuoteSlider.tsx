'use client';

import Quote from "@/Components/Store/Quote";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

interface Quote {
  name: string,
  career: string,
  quote: string,
  profile_image_path: string,
}

const quotes: Quote[] = [
  {
    name: "نام و نام خانوادگی",
    career: "عنوان شغلی",
    quote: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
    profile_image_path: "quote_profile_1"
  },
  {
    name: "نام و نام خانوادگی",
    career: "عنوان شغلی",
    quote: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
    profile_image_path: "quote_profile_1"
  },
  {
    name: "نام و نام خانوادگی",
    career: "عنوان شغلی",
    quote: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
    profile_image_path: "quote_profile_1"
  },
  {
    name: "نام و نام خانوادگی",
    career: "عنوان شغلی",
    quote: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
    profile_image_path: "quote_profile_1"
  },
  {
    name: "نام و نام خانوادگی",
    career: "عنوان شغلی",
    quote: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
    profile_image_path: "quote_profile_1"
  },
  {
    name: "نام و نام خانوادگی",
    career: "عنوان شغلی",
    quote: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
    profile_image_path: "quote_profile_1"
  }
]

const QuoteSlider = () => {
  return (
    <div className="pb-[8rem] pt-[0rem] px-8 overflow-visible">
        <Swiper navigation={true} modules={[Navigation]} slidesPerView={1} spaceBetween={20} style={{ overflow: 'visible' }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}>
          {
            quotes.map(quote => (
              <SwiperSlide>
                <Quote name={quote.name} career={quote.career} quote={quote.quote} profile_image_path={quote.profile_image_path} />
              </SwiperSlide>
            ))
          }
        </Swiper>
    </div>
  );
};

export default QuoteSlider;