'use client';
import React from 'react'
import Image from 'next/image'
import {useState,useEffect} from 'react';
import { AttentionSeeker, Fade, Hinge, JackInTheBox, Roll, Slide } from 'react-awesome-reveal';

const Navbar = () => {


  const [isOpened, setIsOpened] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isNavFixed, setIsNavFixed] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 1024) {
      setIsMobile(true);
    }


    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsNavFixed(true);
      } else {
        setIsNavFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };





  }, []);


  function toggleMenu() {
    setIsOpened(!isOpened);

    if(!isOpened){
       // go to #navbar
      const navbar = document.getElementById('navbar');
      navbar.scrollIntoView({behavior: "instant", block: "center", inline: "nearest"});
    }

  }


  return (
    <div id='navbar' className=''>
  <div className={`navbar ${isNavFixed ? 'fixed' : ''} z-[1] top-0 left-0 bg-base-100 bg-gray-900 border-b-[1pt] border-b-amber-600`}>
  <div className="navbar-start">
    <a href='/' className="text-xl">
        <AttentionSeeker effect={'rubberBand'}>
        <Image src="/images/logo.png" width={48} height={48} alt="Logo" />
        </AttentionSeeker>
    </a>
  </div>


  <div className="navbar-end">
   <div className='hidden lg:inline-block'>
    <ul className="menu menu-horizontal px-1 text-white">
            <Slide direction='top'  triggerOnce>
            <li><a href='/#league' >THE LEAGUE</a></li>
            <li><a href='/#mission'>MISSION</a></li>
            <li><a href='/#lot'>THE LOT</a></li>
            <li><a href='/#producers' >PRODUCERS</a></li>
            <li><a href='/about' >ABOUT</a></li>
            </Slide>
      </ul>
      <a href='/about#contact' className="btn btn-warning btn-outline rounded-none">work with us</a>
   </div>

    <div className='lg:hidden'>
      <button onClick={()=>{toggleMenu()}}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </button>
    </div>
  </div>
</div>
<div className={`bg-base-100 mt-2 w-full h-screen ${isOpened ? 'block' : 'hidden'} bg-base-100 text-center font-bold`}>
      <ul className="menu px-1 text-white flex flex-col content-center gap-6">
            <li><a onClick={()=>{toggleMenu()}} href='/#league' className='text-center block py-4 mt-20'>THE LEAGUE</a></li>
            <li><a onClick={()=>{toggleMenu()}} href='/#mission' className='text-center block py-4'>MISSION</a></li>
            <li><a onClick={()=>{toggleMenu()}} href='/#lot' className='text-center block py-4'>THE LOT</a></li>
            <li><a onClick={()=>{toggleMenu()}} href='/#producers' className='text-center block py-4'>PRODUCERS</a></li>
            <li><a onClick={()=>{toggleMenu()}} href='/about' className='text-center block py-4'>ABOUT</a></li>
      </ul>
      <a href='/about#contact' className="btn btn-warning btn-outline rounded-none">work with us</a>

  </div>
    </div>
  )
}

export default Navbar