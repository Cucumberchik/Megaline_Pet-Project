'use client'
import bacdrop_lines from "~/assets/other/bacdrop-liner.png"


import Image from 'next/image'
import React, { FC, ReactNode, memo, useCallback, useState } from 'react'


export const InterfaceComponent:FC = memo(():ReactNode => {
  return (
    <>
     <div className="_switch_client">
      </div>
      <div className='_page'>
        <Image className="_backdrop__client_page " priority={true} src={bacdrop_lines} alt="bacdrop_lines" draggable="false" />
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
