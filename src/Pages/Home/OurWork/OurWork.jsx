import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import carousel1 from "../../../assets/images/carousel-1.png";
import carousel2 from "../../../assets/images/carousel-2.png";
import carousel3 from "../../../assets/images/carousel-3.png";
import carousel4 from "../../../assets/images/carousel-4.png";
import carousel5 from "../../../assets/images/carousel-5.png";

export default function OurWork() {
     const carouselImg = [carousel1, carousel2, carousel3, carousel4, carousel5];

     return (
          <section className='w-full h-[650px] bg-primary mb-20'>
               <h1 className='text-white text-3xl font-semibold leading-6 block text-center py-20'>
                    Here are some of <span className='text-secondary'>our works</span>
               </h1>
               <>
                    <Swiper
                         slidesPerView={3}
                         spaceBetween={30}
                         centeredSlides={true}
                         autoplay={{
                              delay: 3000,
                              disableOnInteraction: false,
                         }}
                         pagination={{
                              clickable: true,
                         }}
                         modules={[Autoplay, Pagination, Navigation]}
                         className="w-4/5 h-auto "
                    >

                         {
                              carouselImg.map((Img, index) =>
                                   <SwiperSlide key={index}
                                        className='w-full'
                                   >
                                        <img
                                             src={Img} alt="hero-carosel"
                                             className='w-full'
                                        />

                                   </SwiperSlide>
                              )
                         }

                    </Swiper>
               </>
          </section>
     )
}
