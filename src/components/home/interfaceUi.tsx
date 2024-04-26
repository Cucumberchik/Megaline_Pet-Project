'use client'
import bacdrop_lines from "~/assets/other/bacdrop-liner.png"
import planet from "~/assets/other/planet.png"


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
      <div className='_page'>
        <Image className="_backdrop__client_page" src={bacdrop_lines} alt="bacdrop_lines" draggable="false" />
        <div className="_light_backdrop"/>
        <div className="_iterface_page">
          <div className="_client_page">
            <div className="_gpon_title">
              <h2>GPON</h2>
            </div>
          {/* <Image className="_planet_image" src={planet} alt="planet" /> */}
          </div>
        </div>
      </div>
    </>
  )
})
