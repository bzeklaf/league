'use client';
import React from 'react'
import HeadingWhite from '../HeadingWhite'
import { AttentionSeeker } from 'react-awesome-reveal'

const Stories = () => {
  return (
    <div id='stories' className='my-20 px-8'>

        <div className='text-center'>
        <HeadingWhite title="Inspirational Stories" subtitle={"CASE STUDY"}/>
        </div>

            <div className='flex flex-col lg:flex-row gap-6 lg:gap-20 mt-20 px-4 lg:px-10'>
                <div className='basis-full lg:basis-4/12'>
                    <div className='relative'>
                        <div>
                            <img src='/images/PHOTO3.png' alt='Photo1' className='w-full'/>
                            <p className='pr-6 text-justify lg:pb-10'>
                                Stevie Wonder ,one of the most known musicians of all time, blind at the age of 4 turning music into his life, learning to play the piano, drums and bass. Participating in the church choir. Now he has more than 30 Top 10 hits to his name as well as a dozen Grammy Awards. He became successful despite the setbacks in his life.
                            </p>
                        </div>
                      
                        <div className='hidden lg:block absolute -left-10 -bottom-12'>
                            <img src='/images/s4.png' alt='Photo1' className='w-4/6'/>
                        </div>

                    </div>
                </div>
                <div className='basis-full lg:basis-8/12'>
                <AttentionSeeker effect={'pulse'}>
                <img src='/images/PHOTO4.png' alt='Photo1' className='w-full'/>
                </AttentionSeeker>
                    <p className='pr-6 text-justify'>
                    Don’t let life fool you, you control who you want to become and when you want to become. Follow your dreams, passion and make music your life and partner. Who is your inspiration? Who do you look up to?
                    </p>
                </div>

            </div>
    </div>
  )
}

export default Stories