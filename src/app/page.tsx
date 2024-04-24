import { ReactNode } from 'react'
import "~/style/components/page.scss"
import { SwiperComponents } from '~/components/swiper/swiper'
import { SwitchComponent } from '~/components/switch/switchComponent'
import { SwiperNews } from '~/components/swiper/swiperNews'
import { TetxtScroll } from '~/components/text/TetxtScroll'

export default function Home():ReactNode {
  return (
    <main>
      <div className="container">
      <TetxtScroll>
        Gogogl
      </TetxtScroll>
        <div className="wellcome_div">
          <h1>Добро пожаловать в megaline</h1>
          <p>Самый лучший интернет провайдер</p>
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
