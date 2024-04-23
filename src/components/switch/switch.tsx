"use client"


import React, { ReactNode, useState } from 'react'

export const SwitchComponent = ():ReactNode => {
    const [status, setStatus] = useState<string>("_clients")
  return (
    <div className={`switch_component ${status}`}>
       <button onClick={()=>setStatus("_clients")}>Клиентам</button>
       <button onClick={()=>setStatus("_business")}>Для бизнеса</button>
       <div className="_leght_color"></div>
    </div>
  )
}
//"_business"