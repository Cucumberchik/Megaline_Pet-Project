import "~/style/components/footer.scss"
import Link from 'next/link'
import { FC, ReactNode } from 'react'
import {  route_map } from '~/route_map/route_map'

import type { TypeLinksRouteMap, TypeRouteMap } from '~/route_map/route_map'

export const Footer:FC = ():ReactNode => {
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
        </div>
    </footer>
  )
}
