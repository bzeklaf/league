import React from 'react'
import HeadingWhite from '../HeadingWhite'

const Mission = () => {

  const missions =[
    {
      image: '/images/3.png',
      image_hover: '/images/3-hover.png',
      text: 'We focus on authenticity, hard work and talent to create infinite music rather than streams and fanbase. We let artists find their niche, discover who they want to become and sharpen the message they want to convey. We then amplify their hard work and talent and convert it into millions of fans.'
    },
    {
      image: '/images/4.png',
      image_hover: '/images/4-hover.png',
      text: 'We’re building a community where voices are heard from all around the world and uncover the real talent in the depths of urban and rural jungles. We handpick the hottest and most iconic artists in the world to feature on our artists albums, EP’s and singles to leave the audiences in awe.'
    },
    {
      image: '/images/5.png',
      image_hover: '/images/5-hover.png',
      text: 'We’re constructing a shiny, healthy catalogue made of timeless music that will continue to generate revenue for decades to come. We want to build the beautiful music legacy for future generations to draw inspiration from.'
    }
  ]


  return (
    <div id='mission' className='text-center my-20'>
        <HeadingWhite title="Mission" subtitle={"OUR FUTURE"}/>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center mt-20 gap-6'>


          {
             missions.map((mission, index) => {

              return (
                  <div className="group w-96 relative">
                  <figure><img className='group-hover:hidden shadow-2xl shadow-black' src={mission.image} alt="Image" /></figure>
                  <figure><img className='hidden group-hover:block shadow-2xl shadow-black' src={mission.image_hover} alt="Image" /></figure>
                  <div className="text-white group-hover:bg-black group-hover:opacity-[0.5] hidden group-hover:block absolute top-16 bottom-16 left-0 right-0">
                     <p className='text-justify px-8 flex items-center h-full'>{mission.text}</p>
                  </div>
                  </div>
              
              )
            })

          }

        </div>
        
    </div>
  )
}

export default Mission