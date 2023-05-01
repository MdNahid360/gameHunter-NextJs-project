import Image from 'next/image';
import React, { useState, useRef, useContext } from 'react';
import { HiDownload } from 'react-icons/hi';
 // Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import pic from '../../../public/image/headerBg.png'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import Link from 'next/link';
import { SetContext } from '@/context/Mycontext';
import RetingCart from '../RetingCart/RetingCart';
const AppItem = ({data}) => {
    const [downloadApp, setDownloadApp] = useState(false);
    const {pay, setPay} = useContext(SetContext)
    const {id, title, pic, category, status,discription, downloadFile, retting, price, demoPic} = data;
    const downloadHandler =()=>{
        setDownloadApp(!downloadApp)
    }
    console.log(pay);
    return (
        <div className='px-4 mt-3'>
        <div className="collapse">
            <input type="checkbox" className="peer" />
            <div className="collapse-title bg-[#242f4589] text-primary-content peer-checked:bg-[#141728] peer-checked:text-secondary-content">
               <div className="flex gap-2">
                 <div className="w-[100px] bg-[#272c4db6] rounded">
                      <Image src={pic} width="100%" /> 
                 </div>
                <span className="bg-">
                    <h2 className="md:text-2xl text-lg font-semibold">{title}</h2>
                     <div className="flex items-center mt-2 gap-2">
                        <small className={`${status ? 'px-2  py-[1px] flex items-center justify-center w-[auto] text-sm rounded bg-[#ff002243] text-[#ef2f5c]' : ''}`}>{status}</small>

                        <small className={`${category === "free" ? 'bg-[#3e2af52b] text-[#5a35ff]' : 'bg-[#ffe20534] text-[#ffed26]' } px-2  py-[1px] flex items-center justify-center w-[auto] text-sm rounded `}>{category=== "free" ? "Free" : <>${price}</>}</small>
                     </div>
                   {
                    category ==='free' ?  <button onClick={downloadHandler} className="bg-[#0062ff] flex items-center gap-2 mt-3 rounded px-3 py-1 relative z-[100]">
                          <HiDownload className='text-lg'/>  {downloadApp ? 'Downloading...' : 'Download' } {category==="ordered" ? "Downloading..." : ""}

                    </button> :  <Link href="/PayCart" onClick={()=> setPay(data)}  className="bg-[#0062ff] flex items-center w-[100px] text-center justify-center gap-2 mt-3 rounded px-3 py-1 relative z-[100]">
                       Buy ${price}
                    </Link>
                   }
                </span>
              </div> 
            </div>
            <div className="collapse-content  text-primary-content peer-checked:bg-[#141728] peer-checked:text-secondary-content">
                 <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                        }}
                        pagination={{
                        clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        
                        {
                            demoPic?.map(itm => 
                            <SwiperSlide key={itm.id}>
                                 <Image className="h-[360px]" src={itm?.pic} />
                            </SwiperSlide>
                          )
                        }
                    </Swiper>
                    <p className="mt-3 text-[gray]">{discription}</p>

                    <h1 className="border-b pb-2 mt-8 text-lg">Review</h1><br />
                    <RetingCart />
            </div>
            </div>
        </div>
    );
};

export default AppItem;