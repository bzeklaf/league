'use client';
import Image from 'next/image'
import React from 'react'
import { Rubik_Mono_One } from 'next/font/google'
import {FaInstagram,FaTwitter} from 'react-icons/fa'
import {Fade, Hinge, JackInTheBox} from 'react-awesome-reveal'

const font = Rubik_Mono_One({ weight:"400",subsets: ['latin'],variable:'--rubik-mono-one',display:'swap' })


const Header = () => {
  return (
    <>
    <div className="hero min-h-screen" style={{backgroundImage:"url(/images/header-bg.png)"}}>
  <div className="hero-overlay bg-opacity-50"></div>
  <div className="hero-content -mt-40 text-center">
    <div className=' rubik-mono-one'>
      <JackInTheBox cascade triggerOnce>
      <h1 className="text-6xl lg:text-6xl xl:text-9xl bg-gradient-to-r from-yellow-400 to-orange-400 text-transparent bg-clip-text">HEAR</h1>
      <h1 className="text-6xl lg:text-6xl xl:text-9xl text-white">SEE</h1>
      <h1 className="text-6xl lg:text-6xl xl:text-9xl text-white">CREATE.</h1>
      </JackInTheBox>
     <div className='mt-20'>

       <a href='/#workwithus' className='rounded upload_btn inline-block transition-all ease-in-out delay-50 duration-200 group-hover:scale-125 mx-auto'>
        
       </a>

     </div>
    </div>

  </div>
</div>

{/* add a vertical banner that goes from top to bottom of the header floated on the left with black background */}
<div className='fixed left-0 top-20 h-full w-[40px] '>
  <div className='h-3/6 inline-block'></div>
<span className='rotate-90 py-4  block align-middle  text-center text-white whitespace-nowrap'> Follow us</span>
<br/>
<a href='' className='block ml-2 my-4'>
<FaInstagram height={24} width={24} className='text-white'/>
</a>

<a href='' className='block ml-2'>
<FaTwitter height={24} width={24}  className='text-white'/>

</a>

</div>



    </>
  )
}

export default Header