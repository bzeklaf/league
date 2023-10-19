import React from 'react'
import { Slide } from 'react-awesome-reveal'

const Stats = () => {

    const stats = [
        [3, 'Top Class Collabs'],
        [400, 'Master Rights'],
        [35, 'Music Experts'],
    ]

    return (
        <div>



            {stats.map((stat, index) => {
                return (
                    <>
                        <Slide triggerOnce direction='up' delay={index * 100}>
                        <div className='flex items-center pt-12 pb-6'>
                            <div className='w-1/2'>
                                <h1 className=' towntendisplay text-4xl lg:text-6xl bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text'>{stat[0]}</h1>
                            </div>
                            <div className='w-1/2'>
                                <span className='text-white'>{stat[1]}</span>
                            </div>
                        </div>
                        <div className='h-[1px] w-4/6 bg-gradient-to-r from-yellow-400 via-orange-400 to-transparent'></div>
                        </Slide>

                    </>
                )
            })}

        </div>
    )
}

export default Stats