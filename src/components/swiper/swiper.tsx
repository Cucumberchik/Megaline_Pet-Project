"use client"
import React, { FC, ReactNode } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
export const SwiperComponents:FC = ():ReactNode => {
  const swiperSlideComponent:string[] = [
    "rnCDe8C.png",
    "Ax49al8.jpeg",
    "1K3JXVZ.png",
    "yuryt7X.png",
    "UeDOueQ.png",
    "H9Pe2EC.jpeg"
  ]
  return (
    
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
        {swiperSlideComponent.map((el:string, id:number)=>(
          <SwiperSlide key={id}><img src={`https://i.imgur.com/${el}`} alt="slider_photo" /></SwiperSlide>
        ))}
      </Swiper>
    
  )
}
