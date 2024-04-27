"use client"
import "~/style/components/header.scss"

import React, { FC, ReactNode, useCallback, useState } from 'react'
import Link from "next/link"
import { useRouter } from 'next/navigation'
import { SwitchComponent } from "../switch/switchComponent"

type LinkT = {
    title:string;
    to:string
}
export const Header:FC = ():ReactNode => {
    let route = useRouter();
    const [navigation, setNavigation] = useState<boolean>(false)
    const linkTitle:LinkT[] = [
        {title: "Интернет LTE",
        to: "/4g"
        },
        {title: "Интернет",
        to: "/internet"
        },
        {title: "Интернет + TV",
        to: "/internet-tv"
        },
        {title: "Телефония",
        to: "/telephony"
        },
        {title: "Зона поркытия",
        to: "/сoverage-area"
        },
        {title: "Вопросы и ответы",
        to: "/faq"
        },
        {title: "",
        to: "/for-clients"
        }
    ];
    const linkИusiness:LinkT[] = [
        {title: "Услуги",
        to: "/business/services"
        },
        {title: "Зона покрытия",
        to: "/business/сoverage-area"
        },
        {title: "Партнерам",
        to: "/business/partners"
        },
        {title: "Застройщика",
        to: "/business/builders"
        }
    ]
    const handleNavigation = () =>{
        setNavigation(!navigation);
        console.log('ss');
        
      }
      console.log(navigation);
      
  return (
    <header>
        <div className="container">
            <div className="header_head">
                <button className="_logo" onClick={()=>route.push('/')}>
                    <img src="/logo.svg" alt="logo" />
                </button>
                <SwitchComponent onNavigation = {handleNavigation} />
            </div>
            <nav className={`_header__nav ${navigation ? "_client" : ""}`}>
                {(navigation ? linkИusiness : linkTitle).map((el, id:number)=>(
                    <Link href={el.to} key={id}>{el.title}</Link>
                ))}
            </nav>
            <button className="_auth_user ligth-btn" onClick={()=>route.push('/client')}>
                Вход в личный кабинет
            </button>
        </div>
    </header>
  )
}
