import React from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import League from './components/sections/League'
import Mission from './components/sections/Mission'
import Lot from './components/sections/Lot'
import Producers from './components/sections/Producers'
import WorkWithUs from './components/sections/WorkWithUs'
import Footer from './components/Footer'
import Distribution from './components/sections/Distribution'
import Legal from './components/sections/Legal'

const page = () => {
  return (
    <>
    <Navbar/>
    <Header/>
    <League/>
    <div>
      <img src='/images/Photo1.png' alt='Photo1' className='w-full'/>
    </div>
    <Mission/>
    <Lot/>
    <Producers/>
    <Distribution/>
    <Legal/>
    <WorkWithUs/>
    <Footer/>
    </>
  )
}

export default page