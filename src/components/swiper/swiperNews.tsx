
"use client"
import { FC, ReactNode } from 'react'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'

import feadbackIcon from "~/assets/icons/metal/feadback-metal-icon.png"
import gpsIcon from "~/assets/icons/metal/gps-meta-icon.png"
import phoneIcon from "~/assets/icons/metal/phone-metal-icon.png"
import elctroIcon from "~/assets/icons/metal/electro-metal-icon.png"
import Link from 'next/link'
type TypeSwiperNews = {
    title: string,
    paragraph: string,
    to: string,
    image: ReactNode
        
}
export const SwiperNews:FC = ():ReactNode => {
    const slideContant:Array<TypeSwiperNews[]> = [
        [
            {title: "Городской телефон за 1 день!",
        paragraph: "Просто и быстро подключим квартиру или офис к городской стационарной телефонии от «Мега-Лайн».",
        to: "/telephony",
        image: <Image src={phoneIcon} alt='phone-icon' />
        },
        {title: "Ударный пакет спортивных каналов!",
        paragraph: "Более 8-ми самых популярных и интересных спортивных каналов!",
        to: "/internet",
        image: <Image src={elctroIcon} alt='electro-icon' />
        }
        ],
        [
            {title: "Способы оплаты",
        paragraph: "Вы можете оплатить услуги в одном из множества пунктов приемов платежей, как с комиссией, так и без.",
        to: "/payment-methods",
        image: <Image src={gpsIcon} alt='gps-icon' />
        },
        {title: "Система обратной связи — Trouble Ticket!",
        paragraph: "Формируй свои обращения с помощью личного кабинета! Решай технические вопросы просто и быстро!",
        to: "/for-clients",
        image: <Image src={feadbackIcon} alt='feadback-icon' />
        }
        ]
    ]
  return (
    <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        modules={[Autoplay,Pagination]}
        className="_news_swiper"
      >
        {slideContant.map((el:TypeSwiperNews[], id: number)=>(
            <SwiperSlide key={id}>{el.map((item:TypeSwiperNews, idx:number)=>(
                <Link href={item.to} className='_silde_news' key={idx}>
                    {item.image}
                    <div className="title">
                        <h2>{item.title}</h2>
                        <p>{item.paragraph}</p>
                    </div>
                </Link>
            ))}</SwiperSlide>
        ))}
      </Swiper>
  )
}
