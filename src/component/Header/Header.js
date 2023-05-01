import Image from 'next/image';
import spd from '/public/spiderman.png'
import spidermanBnr1 from '/public/image/spidrman-mails-banner-1.jpg'
import spidermanBnr2 from '/public/image/spidrman-mails-banner-2.jpg'
import React, { useContext, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { SetContext } from '@/context/Mycontext';
import Link from 'next/link';

const Header = () => {
  const {download, setDownload,cart, setCart} = useContext(SetContext)
   const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  const data=[
    {
        id :0,
        status : "new",
        category : "free",
        title : "Marvel's Spider-Man:Myles Morales",
        price : 220,
        pic : spd,
        demoPic : [
            {id: 0,pic : spidermanBnr1, title: 'banner-1'},
            {id: 1,pic : spidermanBnr2, title: 'banner-2'},
        ],
        bannerBg : "",
        category : "free",
        discription : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, unde consectetur? Dolores aliquid sunt accusantium maxime, quasi non. Error sint, eius accusamus dolore vitae deserunt quidem ipsa nulla atque. Distinctio iure ducimus doloremque dolorum illo? loremLorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, unde consectetur? Dolores aliquid sunt accusantium maxime, quasi non. Error sint, eius accusamus dolore vitae deserunt quidem ipsa nulla atque. Distinctio iure ducimus doloremque dolorum illo? lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, unde consectetur? Dolores aliquid sunt accusantium maxime, quasi non. Error sint, eius accusamus dolore vitae deserunt quidem ipsa nulla atque. Distinctio iure ducimus doloremque dolorum illo? lorem",
        retting : "0.4",
        downloadFile : ""
    },
    {
        id :1,
        status : "",
        category : "paid",
        title : "Game name is here",
        price : 220,
        pic : spd,
        demoPic : [
            {pic : '', title: ''}
        ],
        bannerBg : "",
        discription : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, unde consectetur? Dolores aliquid sunt accusantium maxime, quasi non. Error sint, eius accusamus dolore vitae deserunt quidem ipsa nulla atque. Distinctio iure ducimus doloremque dolorum illo? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, unde consectetur? Dolores aliquid sunt accusantium maxime, quasi non. Error sint, eius accusamus dolore vitae deserunt quidem ipsa nulla atque. Distinctio iure ducimus doloremque dolorum illo? lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, unde consectetur? Dolores aliquid sunt accusantium maxime, quasi non. Error sint, eius accusamus dolore vitae deserunt quidem ipsa nulla atque. Distinctio iure ducimus doloremque dolorum illo? lorem",
        retting : "0.4",
        downloadFile : ""
    },
    {
        id :2,
        status : "new",
        category : "free",
        title : "  Marvel's Spider-Man:Myles Morales",
        price : 220,
        demoPic : [
            {pic : '', title: ''}
        ],
        pic : spd,
        bannerBg : "",
        discription : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, unde consectetur? Dolores aliquid sunt accusantium maxime, quasi non. Error sint, eius accusamus dolore vitae deserunt quidem ipsa nulla atque. Distinctio iure ducimus doloremque dolorum illo? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, unde consectetur? Dolores aliquid sunt accusantium maxime, quasi non. Error sint, eius accusamus dolore vitae deserunt quidem ipsa nulla atque. Distinctio iure ducimus doloremque dolorum illo? lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, unde consectetur? Dolores aliquid sunt accusantium maxime, quasi non. Error sint, eius accusamus dolore vitae deserunt quidem ipsa nulla atque. Distinctio iure ducimus doloremque dolorum illo? lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, unde consectetur? Dolores aliquid sunt accusantium maxime, quasi non. Error sint, eius accusamus dolore vitae deserunt quidem ipsa nulla atque. Distinctio iure ducimus doloremque dolorum illo? lorem",
        retting : "0.4",
        downloadFile : ""
    },
  ]

  //local storage
  const addApp =(data)=>{
    setCart([...cart, data])
   
  }
  return (
        <div>
             <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        centeredSlides={false}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper">
        {
            data.map(data => 
               <SwiperSlide key={data.id}>
              <div style={{
                backgroundImage: `linear-gradient(30deg,rgb(24, 27, 45), rgba(255, 145, 0, 0.137), rgba(0, 0, 255, 0.066)), url("/public/image/headerBg.png")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',

              }} className="home-banner md:h-[320px] mt-12 rounded-xl md:grid grid-cols-2">
                   <div className="flex items-center justify-center p-8">
                       <div className="">
                          {
                            data.status === "new" ?   <span className="md:block hidden bg-[#ff2f52] text-sm px-2 py-1 rounded-lg w-[50px] text-center">New</span> : <></>
                          }
                      <h1 className="md:text-4xl text-[25px] font-semibold mt-2 md:text-left  text-center">
                       {data.title}
                      </h1>
                          <Link href="/InstallApp" onClick={()=> {
                            addApp(data)
                            setDownload(data)
                          }} className="bg-[#003cff] flex items-center gap-2 md:px-8 px-2 md:py-[10px] py-[3px] text-md md:mt-8 mt-3 rounded-lg md:mx-0 mx-auto w-[150px] justify-center"> Buy ${data.price}</Link>
                       </div>
                   </div>
                   <div className="">
                       <Image className="md:mt-[-110px] md:w-[98%] w-[90%] md:mx-0 mx-auto" src={spd}/>
                   </div>
              </div>
        </SwiperSlide>       
         )
        }
      
      </Swiper>

        </div>
    );
};

export default Header;