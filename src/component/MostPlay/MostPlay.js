import gm1 from '/public/image/game1.jpg'
import Image from 'next/image';
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import TitleText from '@/Hooks/title';

const MostPlay = () => {
     const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
    return (
        <div className="mt-5">
             <TitleText title="Most Playing peoples"/>
             <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={true}
        centeredSlides={false}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}

        pagination={{
          clickable: false,
        }}
        
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          "@1.50": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        
        modules={[
            Navigation
            // Pagination,
            // Autoplay
        ]}
        className="mySwiper mt-4 cursor-pointer"
      >
        <SwiperSlide>
                <div className="cart cursor-pointer">
                    <Image src={gm1} className='w-full h-[160px] rounded-xl'/>
                    <h3 className="q mt-3 text-lg ">
                        Stray Game PS5 72336 1920x x, ps5 
                    </h3>
                    <p className="text-[gray] text-sm">3M Downloader</p>
                </div>
        </SwiperSlide>
        <SwiperSlide>
                <div className="cart cursor-pointer">
                    <Image src={gm1} className='w-full h-[160px] rounded-xl'/>
                    <h3 className="q mt-3 text-lg ">
                        Stray Game PS5 72336 1920x x, ps5 
                    </h3>
                    <p className="text-[gray] text-sm">3M Downloader</p>
                </div>
        </SwiperSlide>
        <SwiperSlide>
                <div className="cart cursor-pointer">
                    <Image src={gm1} className='w-full h-[160px] rounded-xl'/>
                    <h3 className="q mt-3 text-lg ">
                        Stray Game PS5 72336 1920x x, ps5 
                    </h3>
                    <p className="text-[gray] text-sm">3M Downloader</p>
                </div>
        </SwiperSlide>
        <SwiperSlide>
                <div className="cart cursor-pointer">
                    <Image src={gm1} className='w-full h-[160px] rounded-xl'/>
                    <h3 className="q mt-3 text-lg ">
                        Stray Game PS5 72336 1920x x, ps5 
                    </h3>
                    <p className="text-[gray] text-sm">3M Downloader</p>
                </div>
        </SwiperSlide>
        <SwiperSlide>
                <div className="cart cursor-pointer">
                    <Image src={gm1} className='w-full h-[160px] rounded-xl'/>
                    <h3 className="q mt-3 text-lg ">
                        Stray Game PS5 72336 1920x x, ps5 
                    </h3>
                    <p className="text-[gray] text-sm">3M Downloader</p>
                </div>
        </SwiperSlide>
      </Swiper>
      
        </div>
    );
};

export default MostPlay;