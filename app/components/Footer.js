'use client';
import React from 'react'
import {FaInstagram,FaTwitter} from 'react-icons/fa'
import Modal from './Modal'

import {terms_modal_content,privacy_modal_content,contact_modal_content} from '../constant'

const Footer = () => {
  return (
    <footer className="p-4 lg:px-8 py-4 bg-[#262626] text-base-content ">

        <Modal id={'terms'} title={'Terms & Conditions'} body={terms_modal_content}/>
        <Modal id={'privacy'} title={'Privacy Policy'} body={privacy_modal_content}/>
        <Modal id={'contact'} title={'Contacts'} body={contact_modal_content}/>




    <div className='flex flex-col lg:flex-row gap-12'>

        <div className='w-full lg:w-6/12'>
            <div className='flex flex-row items-center gap-6 my-4'>
                    <div>
                        <img src='/images/logo.png' alt='logo' className='w-24 h-24'/>
                    </div>
                
                    <div>
                        <a href='' className='block ml-2'>
                            <FaInstagram height={48} width={48} className='text-white w-6 h-6'/>
                        </a>
                    </div>

                   <div>
                        <a href='' className='block ml-2'>
                            <FaTwitter height={48} width={48}  className='text-white w-6 h-6'/>
                        </a>
                   </div>
               
            </div>


            <p className='text-gray-500 text-justify px-4'>
           League of Sound is a modern, authentic and forward thinking record label that is aiming to reshape the music industry and make it fair for musicians. 
            </p>
            <div className='h-[1px] w-full bg-black my-2'></div>
            <p className='text-justify  px-4'>
                © 2023 League of Sound. All rights reserved            
            </p>
        </div>

        <div className='w-full lg:w-6/12 text-sm lg:text-base'>
            <div className='grid grid-cols-3'>
                <div>
                    <nav>
                        <header className="uppercase text-white font-bold">Legal</header>
                        <a className="link link-hover font-thin" onClick={()=>document.getElementById('terms').showModal()}>Terms & Conditions</a> <br/>
                        <a className="link link-hover font-thin" onClick={()=>document.getElementById('privacy').showModal()}>Privacy Policy</a> <br/>
                    </nav>
                </div>

                <div>
                    <nav>
                        <header className="uppercase text-white font-bold">Company</header> 
                        <a className="link link-hover font-thin" href='/about'>About</a> <br/>
                        <a className="link link-hover font-thin" onClick={()=>document.getElementById('contact').showModal()}>Contacts</a> <br/>
                    </nav>
                </div>
            </div> {/*remove /div here 

                <div>
                    <nav>
                        <header className="uppercase text-white font-bold">Features</header> 
                        <a className="link link-hover font-thin">Secure Payment</a> <br/>
                        <a className="link link-hover font-thin">Daily Cashback</a> <br/>
                        <a className="link link-hover font-thin">Auto Cashflow</a> <br/>
                        <a className="link link-hover font-thin">Scan and Pay</a> <br/>
                        <a className="link link-hover font-thin">Monocard</a> <br/>
                        <a className="link link-hover font-thin">Wallet</a> <br/>
                    </nav>
                </div>
            --> add /div here

            <div className='grid grid-cols-3 py-10'>

                <div>
                <nav>
                        <header className="uppercase text-white font-bold">Contact</header> 
                        <a className="link link-hover font-thin">Contact Us</a> <br/>
                        <a className="link link-hover font-thin">Contact Support</a> <br/>
                    </nav>
                </div>

                <div>
                <nav>
                        <header className="uppercase text-white font-bold">Legal</header> 
                        <a className="link link-hover font-thin">Terms</a> <br/>
                        <a className="link link-hover font-thin">Privacy</a> <br/>
                    </nav>
                </div>
                </div>
*/}
        </div>

    </div>
  
</footer>
  )
}

export default Footer