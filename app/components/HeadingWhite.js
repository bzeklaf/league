'use client';
import React from 'react'
import { Fade } from 'react-awesome-reveal'


const HeadingWhite = ({title,subtitle}) => {
  return (
    <>
    <Fade cascade triggerOnce>
    <h3  className="towntendisplay-regular inline-block uppercase text-xl bg-gradient-to-r from-[#FBE523] via-[#FFB800] to-[#FF9900]   text-transparent bg-clip-text">
            {subtitle}
    </h3>
    <h1 className="towntendisplay text-4xl lg:text-6xl font-bold text-white">{title}</h1>
    </Fade>
   </>

  )
}

export default HeadingWhite