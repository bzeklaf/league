'use client';
import React, { useEffect,useState } from 'react'
import HeadingWhite from '../HeadingWhite'
import Slider from 'react-slick'

const Lot = () => {

  const [slidesToShow, setSlidesToShow] = useState(8);

  const settings = {
    dots: false,
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    waitForAnimate: false,
    cssEase: "linear"
  };

  
  

  const first_row_images=[
    ['/images/SECTION4_1/top.png','Online advertising'],
    ['/images/SECTION4_1/top-1.png','Public Relations'],
    ['/images/SECTION4_1/top-2.png','Spotify pitching'],
    ['/images/SECTION4_1/top-3.png','Apple pitching'],
    ['/images/SECTION4_1/top-4.png','Push npull advertising'],
    ['/images/SECTION4_1/top.png','Influencer campaigns'],
    ['/images/SECTION4_1/top-1.png','Audio Distribution'],
    ['/images/SECTION4_1/top-2.png','Video Distribution'],
    ['/images/SECTION4_1/top-3.png','Financial Support'],
    ['/images/SECTION4_1/top-4.png','Audience Development'],
  ]

  const second_row_images=[
    ['/images/SECTION4_1/top.png','Online advertising'],
    ['/images/SECTION4_1/top-1.png','Public Relations'],
    ['/images/SECTION4_1/top-2.png','Spotify pitching'],
    ['/images/SECTION4_1/top-3.png','Apple pitching'],
    ['/images/SECTION4_1/top-4.png','Push npull advertising'],
    ['/images/SECTION4_1/top.png','Influencer campaigns'],
    ['/images/SECTION4_1/top-1.png','Audio Distribution'],
    ['/images/SECTION4_1/top-2.png','Video Distribution'],
    ['/images/SECTION4_1/top-3.png','Financial Support'],
    ['/images/SECTION4_1/top-4.png','Audience Development'],
  ]

  function handleResize() {
   
    if (window.innerWidth < 1024) {
      setSlidesToShow(6);
    }
    if (window.innerWidth < 768) {
      setSlidesToShow(4);
    }
    if (window.innerWidth < 640) {
      setSlidesToShow(2);
    }
    if (window.innerWidth > 1024) {
      setSlidesToShow(8);
    }
  }

  useEffect(() => {
    window.addEventListener('resize', () => {
      handleResize();
    });
    handleResize();
  },[]
  )


  return (
    <div id='lot' className='text-center my-20'>
    <HeadingWhite title="THE LOT" subtitle={"CREATIVE IDEAS"}/>
    <p className='text-center px-12 py-8'>Our creative campaign ideas are based, amongst other thighs:</p>

    <div className="overflow-x-hidden">

    <Slider slidesToShow={slidesToShow}  {...settings}>
      {first_row_images.map((image,index)=>{
        return(
          <div key={index} className="group relative">
            <div className='px-2'>
              <img src={image[0]} alt={image[1]} className="object-cover w-full h-full"/>
            </div>
            <div className='hidden group-hover:block absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black to-transparent'>
              <p className='text-white text-center py-4 px-2 '>{image[1]}</p>
            </div>

          </div>
        )
      }
      )}
      </Slider>

      <Slider slidesToShow={slidesToShow} rtl={true} {...settings}>
      {second_row_images.map((image,index)=>{
        return(
          <div key={index} className="group relative">
            <img src={image[0]} alt={image[1]} className="object-contain  w-full h-full px-2"/>
            <div className='hidden group-hover:block absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black to-transparent'>
              <p className='text-white text-center py-2 px-2'>{image[1]}</p>
            </div>

          </div>
        )
      }
      )}
      </Slider>



    
</div>


    </div>
  )
}

export default Lot