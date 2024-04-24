"use client"
import "./style.css"
import styled from 'styled-components'



import React, {  ReactNode, useCallback, useEffect, useState } from 'react'

export const TetxtScroll = ({children}:{children:ReactNode}):ReactNode => {

  const [scrolled, setScrolled] = useState<number>(0);

  const handleScroll = useCallback(() => {
    if(window.scrollY > scrolled){
      setScrolled( window.scrollY * .2);
      
    }
  }, [])
  
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  let scrollCount:string = scrolled.toString().split('.')[0];

  const TextRGBColor = styled.span`
    color: transparent;
    background: linear-gradient(
      123deg,
      #adadad 0%,
      #f7f7f7 ${scrollCount}%,
      rgba(166, 166, 166, 1) ${15 + scrollCount}%,
      rgba(126, 126, 126, 1) 100%
      );
      background-clip: text;
      font: 900 50px / 100%  var(--font-metor-sans);
      text-transform: uppercase;
  `;
  


  
  return (
    <TextRGBColor >
      {children}
      </TextRGBColor>
  )
}
