"use client"
import "~/style/components/footer.scss"
import Link from 'next/link'
import { FC, ReactNode } from 'react'
import {  route_map } from '~/route_map/route_map'

import type { TypeLinksRouteMap, TypeRouteMap } from '~/route_map/route_map'

export const Footer:FC = ():ReactNode => {
    let date:string[] = (new Date()).toString().split(' ')

    
  return (
    <footer>
        <div className="container">
            <div className="footer_links">
                {route_map.map((el:TypeRouteMap, id:number)=>(
                    <div className="_footer_link" key={id}>
                        <Link href={el.to}>
                            <h4>{el.headtitle}</h4>
                        </Link>
                        {el.links.map((item:TypeLinksRouteMap, idx:number)=>(
                            <Link key={idx} href={item.to}>
                                <span>{item.title}</span>
                            </Link>
                        ))}
                    </div>  
                ))}
            </div>
            <div className="_megaline_footer">
                <div className="_logo">
                    <img src="/logo.svg" alt="logo" draggable="false" />
                </div>
                <div className="_sopyright">
                    <p>
                    Copyright © {date[3]} LLC Megaline
                    Лицензия ГАС КР: №16-1549-КР, №17-0212-КР
                    Услуга связи по технологии 4G LTE предоставляется по агентскому договору с ОсОО «Айтел».
                    В пакете Интернет+ТВ услугу телевидения предоставляет компания ОсОО "Цифровые решения плюс". Лицензия ГАС КР: №22-0533-КР
                    </p>
                </div>
            </div>
        </div>
    </footer>
  )
}
