
import "~/style/components/page.scss"
import { ReactNode,} from 'react'

import { SwiperNews } from '~/components/swiper/swiperNews'
import { TetxtScroll } from '~/components/text/TetxtScroll'
import { InterfaceComponent } from "~/components/home/interfaceUi"


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
              <p>Просто. Выгодно. Надежно</p>
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
        <InterfaceComponent />
        
      </div>
    </main>
  )
}
