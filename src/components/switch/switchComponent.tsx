"use client"


import React, { ReactNode, useState, useCallback, memo } from 'react'

export const SwitchComponent = memo(():ReactNode => {
    const [status, setStatus] = useState<string>("_clients")

    const handleStatus = useCallback(()=>{
      setStatus((prev)=>{
        if(prev == "_clients"){
          return "_business"
        }
        return "_clients"
      })
    },[])
  return (
    <button className={`switch_component ${status}`} onClick={handleStatus}>
       <span children="Клиентам" />
       <span children="Для бизнеса" />
       <span className='_light' />
    </button>
  )
})
//"_business"