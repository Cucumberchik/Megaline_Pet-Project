"use client"
import "./style.css"
import React, {  ReactNode, useEffect, useState } from 'react'

export const TetxtScroll = ({children}:{children:ReactNode}):ReactNode => {
    const [scrolled, setScrolled] = useState<string>("stop");

  const handleScroll:()=>void = () => {
    if (window.scrollY > 100) { 
      setScrolled("scrolled");
    } else {
      setScrolled("stop");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  console.log(scrolled);
  
  return (
    <span className={`text_scroll`}>
      {children}
      </span>
  )
}
