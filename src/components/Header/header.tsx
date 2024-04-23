"use client"
import "~/style/components/header.scss"


import React, { FC, ReactNode } from 'react'
import Link from "next/link"
import { useRouter } from 'next/navigation'

type LinkT = {
    title:string;
    to:string
}
export const Header:FC = ():ReactNode => {
    let route = useRouter()
    const LinkTitle:LinkT[] = [
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
        to: "/FAQ"
        },
        {title: "",
        to: "/for-clients"
        }
    ]
  return (
    <header>
        <div className="container">
            <button className="_logo" onClick={()=>route.push('/')}>
                <img src="/logo.svg" alt="logo" />
            </button>
            <nav className="_header__nav">
                {LinkTitle.map((el, id:number)=>(
                    <Link href={el.to} key={id}>{el.title}</Link>
                ))}
            </nav>
            <button className="_auth_user blue-btn" onClick={()=>route.push('/client')}>
                Вход в личный кабинет
            </button>
        </div>
    </header>
  )
}
