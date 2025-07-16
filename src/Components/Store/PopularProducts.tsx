'use client'

import Image from "next/image";
import popular_products_banner from "@/../public/images/popular.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductCard from "./ProductCard";
import 'swiper/css';

const PopularProducts = () => {
  return (
    <div className="flex flex-row items-center w-full max-w-6xl mx-auto pb-[12rem] md:py-[6rem]">
        <div className="hidden md:flex w-1/5 rounded-lg overflow-hidden">
            <Image src={popular_products_banner} height={600} alt="golden product offers" />
        </div>
        <div className="flex flex-col w-full md:w-4/5 gap-4">
            <h2 className="flex place-self-end pb-6 md:hidden text-2xl iransans_med px-4 text-right">محبوب ترین محصولات</h2>        
            <div className="hidden lg:flex flex-row justify-end flex-wrap gap-4">
                <button className="rounded-3xl px-4 py-2 w-[6rem] text-center bg-[#FFBBE2] border-[1.5px] hover:bg-[#DA1C5C] hover:shadow-lg cursor-pointer border-[#DA1C5C] text-black transition-all">
                    کارومد
                </button>
                <button className="rounded-3xl px-4 py-2 w-[6rem] text-center bg-[#FFBBE2] border-[1.5px] hover:bg-[#DA1C5C] hover:shadow-lg cursor-pointer border-[#DA1C5C] text-black transition-all">
                    سوپا
                </button>
                <button className="rounded-3xl px-4 py-2 w-[6rem] text-center bg-[#FFBBE2] border-[1.5px] hover:bg-[#DA1C5C] hover:shadow-lg cursor-pointer border-[#DA1C5C] text-black transition-all">
                    بکر
                </button>
                <button className="rounded-3xl px-4 py-2 w-[6rem] text-center bg-[#FFBBE2] border-[1.5px] hover:bg-[#DA1C5C] hover:shadow-lg cursor-pointer border-[#DA1C5C] text-black transition-all">
                    آوا
                </button>
            </div>
            <div className="flex lg:hidden flex-row justify-end flex-wrap gap-4 px-4">
                <Swiper slidesPerView={3} spaceBetween={45}>
                    <SwiperSlide>
                        <button className="rounded-3xl px-4 py-2 w-[6rem] text-center bg-[#FFBBE2] border-[1.5px] hover:bg-[#DA1C5C] hover:shadow-lg cursor-pointer border-[#DA1C5C] text-black transition-all">
                            کارومد
                        </button>
                    </SwiperSlide>
                    <SwiperSlide>
                        <button className="rounded-3xl px-4 py-2 w-[6rem] text-center bg-[#FFBBE2] border-[1.5px] hover:bg-[#DA1C5C] hover:shadow-lg cursor-pointer border-[#DA1C5C] text-black transition-all">
                            سوپا
                        </button>
                    </SwiperSlide>
                    <SwiperSlide>
                        <button className="rounded-3xl px-4 py-2 w-[6rem] text-center bg-[#FFBBE2] border-[1.5px] hover:bg-[#DA1C5C] hover:shadow-lg cursor-pointer border-[#DA1C5C] text-black transition-all">
                            بکر
                        </button>
                    </SwiperSlide>
                    <SwiperSlide>
                        <button className="rounded-3xl px-4 py-2 w-[6rem] text-center bg-[#FFBBE2] border-[1.5px] hover:bg-[#DA1C5C] hover:shadow-lg cursor-pointer border-[#DA1C5C] text-black transition-all">
                            آوا
                        </button>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="w-full">
                <Swiper
                className="golden_products_slider"
                spaceBetween={10}
                slidesPerView={1}
                centeredSlides={false}
                loop={true}
                breakpoints={{
                    400: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                    centeredSlides: false
                    },
                    768: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                    centeredSlides: false
                    },
                }}>
                    <SwiperSlide className="w-full flex justify-center items-center">
                        <ProductCard name="اسپکلوم پیچی بکر سایز کوچک" price="برای اطلاع از قیمت تماس بگیرید" picture_path="product_1" />
                    </SwiperSlide>
                    <SwiperSlide className="w-full flex justify-center items-center">
                        <ProductCard name="اسپکلوم پیچی بکر سایز کوچک" price="برای اطلاع از قیمت تماس بگیرید" picture_path="product_1" />
                    </SwiperSlide>
                    <SwiperSlide className="w-full flex justify-center items-center">
                        <ProductCard name="اسپکلوم پیچی بکر سایز کوچک" price="برای اطلاع از قیمت تماس بگیرید" picture_path="product_1" />
                    </SwiperSlide>
                    <SwiperSlide className="w-full flex justify-center items-center">
                        <ProductCard name="اسپکلوم پیچی بکر سایز کوچک" price="برای اطلاع از قیمت تماس بگیرید" picture_path="product_1" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    </div>
  )
}

export default PopularProducts;