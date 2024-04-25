import "~/style/components/page.scss"
import { ReactNode, lazy } from 'react'

import { SwiperComponents } from '~/components/swiper/swiper'
import { SwitchComponent } from '~/components/switch/switchComponent'
import { SwiperNews } from '~/components/swiper/swiperNews'
import { TetxtScroll } from '~/components/text/TetxtScroll'
import Image from 'next/image'

export default function Home():ReactNode {
  return (
    <main>
      <div className="container">
        <div className="wellcome_div" >
           <div className="_vertically line_intro_"/>
          <div className="_ercan">
          <div className="_vertically line_intro_"/> 
            <div className="_horizontally line_intro_ _top"/>
              <TetxtScroll>
                  Добро пожаловать в megaline
              </TetxtScroll>
              <p>Самый лучший интернет провайдер</p>
              <div className="_buttons_">
                <button className="ligth-btn">Оставить заявку</button>
                <button className="outline-light-btn">Позвонить</button>
              </div>
              
              <div className="_horizontally line_intro_ _bottom"/>
          </div>
          <div className="_vertically line_intro_"/>
        </div>
        <div className="_switch_client">
        <SwitchComponent/>
        </div>
      <SwiperComponents/>
      <SwiperNews />
      </div>
    </main>
  )
}
