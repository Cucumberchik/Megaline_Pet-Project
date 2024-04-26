'use client'
import bacdrop_lines from "~/assets/other/bacdrop-liner.png"


import Image from 'next/image'
import React, { FC, ReactNode, memo, useCallback, useState } from 'react'
import { SwitchComponent } from "../switch/switchComponent"


export const InterfaceComponent:FC = memo(():ReactNode => {
  const [uiInterface, setUiInterface] = useState<boolean>(true)
  const handleUiInterface = useCallback(()=>{
    setUiInterface(!uiInterface)
  },[])
  return (
    <>
     <div className="_switch_client">
          <SwitchComponent onInterface = {()=>handleUiInterface} />
      </div>
      <div className='_client_page'>
        <Image className="_backdrop__client_page" src={bacdrop_lines} alt="bacdrop_lines" draggable="false" />
        
      </div>
    </>
  )
})
