
"use client"
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { FC, ReactNode } from 'react'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useRouter } from 'next/navigation'
type TypeSwiperNews = {
    title: string,
    to: string,      
}
export const SwiperNews:FC = ():ReactNode => {
  const route = useRouter()
    const slideContant:TypeSwiperNews[] = [{
        title: "Просто и быстро подключим квартиру или офис к городской стационарной телефонии от «Мега-Лайн».",
        to: "/telephony",
        },
        {
        title: "Более 8-ми самых популярных и интересных спортивных каналов!",
        to: "/internet",
       
        },

          {
        title: "Вы можете оплатить услуги в одном из множества пунктов приемов платежей, как с комиссией, так и без.",
        to: "/payment-methods",
        },
        {
        title: "Формируй свои обращения с помощью личного кабинета! Решай технические вопросы просто и быстро!",
        to: "/for-clients",
        }
        
    ]
  return (
    <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        modules={[Autoplay]}
        className="_news_swiper"
      >
        {slideContant.map((el:TypeSwiperNews, id: number)=>(
            <SwiperSlide key={id} onClick={()=>route.push(el.to)}>
              <div className="title">
                  <p>{el.title}</p>
              </div>
            </SwiperSlide>
        ))}
      </Swiper>
  )
}
