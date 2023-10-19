'use client';
import React from 'react'
import { FaInstagram, FaTwitter } from 'react-icons/fa';
import Stats from './Stats';
import { Fade, JackInTheBox, Slide } from 'react-awesome-reveal';

const CompanyIntro = () => {
    return (
        <>
            <div className="lg:hidden hero min-h-screen" style={{ backgroundImage: "url(/images/studio.png)" }}>
                <div className="hero-overlay bg-opacity-50"></div>
                <div className="hero-content -mt-40 p-12 lg:py-20">
                    <div className={` max-w-md `}>

                        <div className='relative'>
                        <JackInTheBox cascade triggerOnce>
                            <h1 className="text-6xl xl:text-9xl rubik-mono-one text-white">SEE,</h1>
                            <h1 className="text-6xl xl:text-9xl rubik-mono-one text-white">HEAR,</h1>
                            <h1 className="text-6xl xl:text-9xl rubik-mono-one text-white">CREATE</h1>
                        </JackInTheBox>

                
                  
                        <Fade triggerOnce>
                        <img src='/images/s2.png' className='w-1/12 h-[60%] absolute top-0 right-4' />
                        </Fade>
                         
                        
                        </div>


                        <div className='mt-12'>
                            <Fade triggerOnce>
                            <p className='text-justify'>
                                We call ourselves <span className='text-yellow-500 font-bold'>League Of Sound</span> because the sound, like creativity, is infinite. Sound, coupled with vision, creates the most powerful journey of transformation, hence our motto - <span className='text-yellow-500 font-bold'>“Hear. See. Create”</span>.<br /><br />
                                The journey takes us through extraordinary global cultural events, international collectives of artists, strong partnerships, unique content, the legacy of education and an ongoing international dialogue.
                            </p>
                            </Fade>
                        </div>

                    </div>

                </div>
            </div>

            <div className='lg:hidden'>
                <div className='w-4/6 mx-auto'>
                    <Stats />
                </div>

                <img src='/images/team.png' className='w-full px-12 mt-10' />

                <div className='mt-10 px-12'>
                    <h3 className='text-white text-xl font-bold my-6'>Collabs</h3>
                    <p className='text-justify'>
                        We set up collaborations & partnerships between Dj’s, bands, record labels, venues, executive producers of top artists. We're not into name-dropping but hey, since you might find it intresting only recently we've been doing collabs with the lesser known artists like Snoop Dog, Chris Brown an Young Thug.<br /><br />
                        
                    </p>
                </div>

                <div className='mt-10 px-12'>
                    <h3 className='text-white text-xl font-bold my-6'>Why Los</h3>
                    <p className='text-justify'>
                        Ever felt like you’ve been poorly treated by the industry? Or not been given a fair chance to be truly heard? Or just generally speaking been completely ignored? We are here for you, to help you start the new, successful chapter in your music career.
                    </p>
                </div>

                <img src='/images/mixer.png' className='w-full mt-10 px-12' />



            </div>

            <div className='hidden lg:flex mt-20'>

                <div className='w-6/12'>
                    <div className={`px-20 py-12`}>
                    <Fade cascade triggerOnce>
                        <h1 className="text-6xl xl:text-8xl rubik-mono-one text-white">SEE,</h1>
                        <h1 className="text-6xl xl:text-8xl rubik-mono-one text-white">HEAR,</h1>
                        <h1 className="text-6xl xl:text-8xl rubik-mono-one text-white">CREATE</h1>
                    </Fade>
                        <div className='mt-12 w-5/6 lg:w-5/6'>
                            <Fade triggerOnce>
                            <p className='text-justify'>
                                We call ourselves <span className='text-yellow-500 font-bold'>League Of Sound</span> because the sound, like creativity, is infinite. Sound, coupled with vision, creates the most powerful journey of transformation, hence our motto - <span className='text-yellow-500 font-bold'>“Hear. See. Create”</span>.<br /><br />
                                The journey takes us through extraordinary global cultural events, international collectives of artists, strong partnerships, unique content, the legacy of education and an ongoing international dialogue.
                            </p>
                            </Fade>
                            <Stats />
                            <div className='mt-10'>
                                <h3 className='text-white text-xl font-bold my-6'>Collabs</h3>
                                <p className='text-justify'>
                                    We set up collaborations & partnerships between Dj’s, bands, record labels, venues, executive producers of top artists. We're not into name-dropping but hey, since you might find it intresting only recently we've been doing collabs with the lesser known artists like Snoop Dog, Chris Brown an Young Thug.<br /><br />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-6/12'>
                    <div className='relative'>
                        <img src='/images/studio.png' className='w-full' />

                        <div className='absolute top-0 -left-7'>
                        <Slide direction='top' triggerOnce>
                            <img src='/images/s2.png' className='w-2/6' />
                        </Slide>
                        </div>

                    </div>
                    <div className='flex gap-10'>
                        <div className='w-1/2'>
                            <img src='/images/team.png' className='w-full' />
                            <div className='mt-16'>
                                <h3 className='text-white text-xl font-bold my-6'>Why Los</h3>
                                <p className='text-justify'>
                                    Ever felt like you’ve been poorly treated by the industry? Or not been given a fair chance to be truly heard? Or just generally speaking been completely ignored? We are here for you, to help you start the new, successful chapter in your music career.
                                </p>
                            </div>
                        </div>

                        <div className='w-1/2 pr-12'>
                            <img src='/images/mixer.png' className='w-full' />
                        </div>

                    </div>
                </div>

            </div>


            {/* add a vertical banner that goes from top to bottom of the header floated on the left with black background */}
            <div className='fixed left-0 top-4 h-full w-[40px] '>
                <div className='h-3/6 inline-block'></div>
                <span className='rotate-90 py-4  block align-middle  text-center text-white whitespace-nowrap'> Follow us</span>
                <br />
                <a href='https://www.instagram.com/league_of_sound/?igshid=NzZhOTFlYzFmZQ%3D%3D' target='_blank' className='block ml-2 my-4'>
                    <FaInstagram height={24} width={24} className='text-white' />
                </a>

                <a href='' className='block ml-2'>
                    <FaTwitter height={24} width={24} className='text-white' />
                </a>

            </div>

        </>
    )
}

export default CompanyIntro