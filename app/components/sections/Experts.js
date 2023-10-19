'use client';
import {useState} from 'react';
import React from 'react'
import HeadingWhite from '../HeadingWhite'
import { FaTwitter, FaLinkedin } from 'react-icons/fa';
import { AttentionSeeker } from 'react-awesome-reveal';

const Experts = () => {

    const [selectedPersonIndex, setSelectedPersonIndex] = useState(0);

    const people=[
        {
            position: 'Alexander Simons: Founder and CEO League Of Sound Recording Label',
            description:'Alex Simons born in the 90s with a soul of the 80s. Alex is in the industry for over 8 years as an artist and now as a label founder. As a boy Simons wanted to be heard, seen and noticed and most importantly understood. Creating a label now that he didn\’t have back then to help him succeed. Simons puts his artists first, wanting to be the best friend that he never had for his artists. "Music is an energy that lives within us all as it is one, if not the only thing that unites us all. Music gives us the opportunity to forget, feel, sense, love and guide us throughout a timeline reflecting our past and future, however still living in the present time"– Alex Simons',
            image:'/images/p-1.png',
            links:{
                twitter:'#',
                linkedin:'#'
            }
        },
        /*{
            position: 'John Smith, CEO',
            description:'Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
            image:'/images/p-2.png',
            links:{
                twitter:'#',
                linkedin:'#'
            }
        },
        {
            position: 'Samanta Smith, CEO',
            description:'Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
            image:'/images/p-3.png',
            links:{
                twitter:'#',
                linkedin:'#'
            }
        },*/


    ]


    const nextPerson = function(){
        if(selectedPersonIndex<2){
            setSelectedPersonIndex(selectedPersonIndex+1);
        }
    }

    const prevPerson = function (){
        if (selectedPersonIndex>0){
            setSelectedPersonIndex(selectedPersonIndex-1);
        }
    }




  return (
    <div id='experts' className='my-20 px-8'>



        {/* corners */}

        <div className='relative w-full lg:w-4/6 mx-auto'>
            <div className='hidden lg:block absolute -top-10 left-0'>
                <img src='/images/L.png' className='w-5/6'/>
            </div>

            <div className='lg:hidden absolute -top-4 right-0'>
                <img src='/images/L3.png' className='w-5/6'/>
            </div>
        </div>




        <div className='text-center'>
        <HeadingWhite title="Expertise" subtitle={"Meet the Music Experts"}/>
        </div>

        <p className='text-justify w-5/6 lg:w-3/6 mx-auto my-4 py-4'>
        Our team consists of highly accomplished professionals with many years of experience in the music business that have guided many artists to success. With the mixture of deep industry expertise, creative approach, strong relationships and connections in the music business, world-class strategies and great resource management we have developed over the years we help the artists build great foundations for their career.
        </p>

        <div className='border-2 border-yellow-500 shadow-lg shadow-black w-5/6 lg:w-3/6 mx-auto'>

            <div className='flex flex-col lg:flex-row'>

                <div className='w-full lg:w-4/6 py-4 px-6 relative'>
                    <div className='flex justify-between items-center mb-4'>
                        <div>
                            <h1 className='text-xl lg:text-2xl'>{people[selectedPersonIndex].position}</h1>
                        </div>
                        <div className='py-4 flex gap-4 text-yellow-500'>
                            <a href={people[selectedPersonIndex].links.twitter}>
                                <FaTwitter className='w-6 h-6 lg:w-8 lg:h-8'/>
                            </a>
                            <a href={people[selectedPersonIndex].links.twitter}>
                                <FaLinkedin className='w-6 h-6 lg:w-8 lg:h-8'/>
                            </a>
                        </div>
                    </div>
                    <p className='text-justify text-base font-serif font-light'>
                        {people[selectedPersonIndex].description}
                    </p>
                    <div className='text-center my-8 mx-8 left-0 bottom-0  absolute hidden lg:block lg:text-xl'>
                        <button /*onClick={()=>prevPerson()}*/>
                            <img  src='/images/arrow-left.png' className='w-8 h-8 mx-4'/>
                        </button>
                        <button /*onClick={()=>nextPerson()}*/>
                            <img src='/images/arrow-right.png' className='w-8 h-8 mx-4'/>
                        </button>
                    </div>
                    <div className='hidden lg:block h-[100px]'>

                    </div>
                </div>

                <div className='w-full lg:w-3/6'>
                   <AttentionSeeker effect={'tada'}>
                   <img src={people[selectedPersonIndex].image} className='w-full p-4'/>
                     </AttentionSeeker>
                </div>

                <div className='lg:hidden'>
                    <div className='text-center my-8 mx-8'>
                        <button onClick={()=>prevPerson()}>
                            <img  src='/images/arrow-left.png' className='w-8 h-8 mx-4'/>
                        </button>
                        <button onClick={()=>nextPerson()}>
                            <img src='/images/arrow-right.png' className='w-8 h-8 mx-4'/>
                        </button>
                    </div>
                </div>

            </div>

        </div>


        {/* corners */}
        <div className='relative w-full lg:w-4/6 mx-auto'>
            <div className='lg:hidden absolute -top-10 -left-4'>
                <img src='/images/L4.png' className='w-5/6'/>
            </div>

            <div className='hidden lg:block absolute -top-10 right-0'>
                <img src='/images/L2.png' className='w-5/6'/>
            </div>
        </div>

     



    </div>
  )
}

export default Experts