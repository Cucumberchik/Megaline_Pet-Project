"use client"
import "~/style/components/page.scss"
import { ReactNode, useState,} from 'react'

import { SwiperNews } from '~/components/swiper/swiperNews'
import { TetxtScroll } from '~/components/text/TetxtScroll'
import { InterfaceComponent } from "~/components/home/interfaceUi"
import { ModalSubmitApplication } from "~/components/modals/submit_application"


export default function Home():ReactNode {
  const [modalSubmitApplicationOpen, setModalSubmitApplicationOpen] = useState<boolean>(false)
  console.log(modalSubmitApplicationOpen);
  
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
                    <ModalSubmitApplication status={modalSubmitApplicationOpen} setChangeStatus={()=>setModalSubmitApplicationOpen(false)} />
                    <button className="ligth-btn" onClick={()=>setModalSubmitApplicationOpen(true)}>Оставить заявку</button>
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
