export type TypeLinksRouteMap = {
    title: string,
    to: string
}
export interface TypeRouteMap {
    headtitle: string,
    to: string,
    links: TypeLinksRouteMap[]
}

export const route_map:TypeRouteMap[] = [
    {headtitle: "Интернет LTE",
        to: "/4g",
        links: [
            {
                title: "Об услуге",
                to: "/4g/about-the-service"
            },
            {
                title: "Тарифы",
                to: "/4g/tariffs"
            },
            {
                title: "Оборудование",
                to:"/4g/equipment"
            },
            {
                title: "Вопросы и ответы",
                to:"/4g/faq"
            }
        ]
    },
    {headtitle: "Интернет",
        to: "/internet",
        links: [
            {
                title: "Об услуге",
                to: "/internet/about-the-service"
            },
            {
                title: "Тарифы",
                to: "/internet/tariffs"
            },
            {
                title: "Родительский контроль",
                to:"/internet/parental-control"
            },
            {
                title: "Оставить заявку",
                to: "/internet/submit-your-application"
            },
            {
                title: "Вопросы и ответы",
                to:"/4g/faq"
            }
        ]
    },
    {headtitle: "Интернет + TV",
        to: "/internet-tv",
        links: [
            {
                title: "Об услуге",
                to: "/internet-tv/about-the-service"
            },
            {
                title: "Тарифы",
                to: "/internet-tv/tariffs"
            },
            {
                title: "Каналы",
                to:"/internet-tv/channels"
            },
            {
                title: "Подключение",
                to:"/internet-tv/сonnection"
            },
            {
                title: "Вопросы и ответы",
                to:"/internet-tv/faq"
            },
            {
                title: "Оставить заявку",
                to: "/internet-tv/submit-your-application"
            },
        ]
    },
    {headtitle: "Телефония",
        to: "/telephony",
        links: [
            {
                title: "Об услуге",
                to: "/telephony/about-the-service"
            },
            {
                title: "Тарифы",
                to: "/telephony/tariffs"
            },
            {
                title: "Схема подключение",
                to: "/telephony/connection-diagram"
            },
            {
                title: "Вопросы и ответы",
                to:"/telephony/faq"
            }
        ]
    },
    {headtitle: "Для бизнеса",
        to: "/for-business",
        links: [
            {
                title: "Интернет",
                to: "/for-business/internet"
            },
            {
                title: "Хостинг",
                to: "/for-business/hosting"
            },
            {
                title: "Телефония",
                to: "/for-business/telephony"
            },
            {
                title: "Сеть (VPN)",
                to: "/for-business/network"
            },
            {
                title: "Оставить заявку",
                to: "/for-business/submit-your-application"
            },
        ]
    },
    {headtitle: "Клиентам",
        to: "/for-clients",
        links: [
            {
                title: "Вопросы и ответы",
                to:"/for-clients/faq"
            },
            {
                title: "Способы оплаты",
                to:"/for-clients/payment-methods"
            },
            {
                title: "Контакты",
                to:"/for-clients/contacts"
            },
            {
                title: "Документы",
                to:"/for-clients/documents"
            },
            {
                title: "Инструкций",
                to:"/for-clients/instructions"
            },
            {
                title: "GPON",
                to:"/for-clients/gpon"
            },
            {
                title: "Акций",
                to:"/for-clients/shares"
            },
            {
                title: "Заблокированные ресурсы",
                to:"/for-clients/blocked-resources"
            }

        ]
    }
]