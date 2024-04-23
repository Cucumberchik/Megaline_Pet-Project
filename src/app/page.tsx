import { ReactNode } from 'react'
import "~/style/components/page.scss"
import { SwiperComponents } from '~/components/swiper/swiper'
import { SwitchComponent } from '~/components/switch/switch'

export default function Home():ReactNode {
  return (
    <main>
      <div className="container">
        <div className="_switch_client">
        <SwitchComponent/>
        </div>
      <SwiperComponents/>
      </div>
    </main>
  )
}
