import "~/style/components/page.scss"
import { ReactNode } from 'react'

import { SwiperComponents } from '~/components/swiper/swiper'
import { SwitchComponent } from '~/components/switch/switchComponent'
import { SwiperNews } from '~/components/swiper/swiperNews'
import { TetxtScroll } from '~/components/text/TetxtScroll'
import { Footer } from "~/components/Footer/footer"

export default function Home():ReactNode {
  return (
    <main>
      <div className="container">
        <div className="wellcome_div" >
          <div className="intros">

            <div className="contant">
              <div className="intro_intro verticaly"/>
              <div className="intro_intro verticaly"/>
              <div className="intro_intro verticaly"/>
              <div className="intro_intro verticaly"/>
            </div>
          </div>
          <div className="_ercan">
          <div className="intro_intro horyzantaly"/>

              <TetxtScroll>
                  Добро пожаловать в megaline
              </TetxtScroll>
              <p>Самый лучший интернет провайдер</p>
          <div className="intro_intro horyzantaly"/>

              <div className="_buttons_">
                <div className="_contant_buttons">
                    <button className="ligth-btn">Оставить заявку</button>
                    <button className="outline-light-btn">Позвонить</button>
                </div>
              </div>
          <div className="intro_intro horyzantaly"/>
          <div className="swiper_wellcome_page">
              <SwiperNews />
          <div className="intro_intro horyzantaly"/>
          </div>
              
          </div>
        </div>
        <div className="_switch_client">
          <SwitchComponent/>
        </div>
      <Footer />
      </div>
    </main>
  )
}
