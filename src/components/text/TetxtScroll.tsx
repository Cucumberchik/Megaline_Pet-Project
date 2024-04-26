"use client"
import styled from 'styled-components'

import React, {  ReactNode, useCallback, useEffect, useState } from 'react'

const TextRGBColor = styled.span<{ scrollCount: string }>`
  color: transparent;
  background: linear-gradient(
    123deg,
    rgb(177, 108, 234) ${(props) => 20 + +props.scrollCount}%,
    rgb(255, 94, 105) ${(props) => 35 + +props.scrollCount}%,
    rgb(255, 138, 86) ${(props) => 45 + +props.scrollCount}%,
    rgb(255, 168, 75) 100%
  );
  background-clip: text;
  font: 900 50px / 100% var(--font-inter);
  text-transform: uppercase;
`;
export const TetxtScroll = ({children}:{children:ReactNode}):ReactNode => {
  const [asyncComponent, setAsyncComponet] = useState(false)
  const [scrolled, setScrolled] = useState<number>(0);

  const handleScroll = useCallback(() => {
    if(window.scrollY > scrolled){
      setScrolled( window.scrollY * .1);
    }
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(()=>{
    let asyncInterval = setTimeout(()=>setAsyncComponet(true),1);
    return ()=> clearTimeout(asyncInterval)
  },[])
  
  let scrollCount:string = scrolled.toString().split('.')[0];

  


  if(asyncComponent){
    return (
      <TextRGBColor scrollCount={scrollCount} >
        {children}
        </TextRGBColor>
    )
  }
  return <></>
}
