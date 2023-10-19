'use client';
import React from 'react'
import HeadingWhite from '../HeadingWhite'
import LetterPhoto from '../LetterPhoto'
import LetterPhotoAside from '../LetterPhotoAside'
import {Fade, Slide} from 'react-awesome-reveal'

const Producers = () => {
  return (
    <div id='producers'>
      <div className='text-center my-20'>
        <HeadingWhite title="SOUND PRODUCERS" subtitle={"PRODUCERS WE WORK WITH"}/>
        <p className='mx-auto w-5/6 md:w-2/6 text-justify my-8'>Music is an alphabet we musicians speak so for each musician it is crucial to find synergies with the right producer. We have the hit machine, Grammy award-winning producers and songwriters that can create or upgrade your music to chart ready standards. These are some producers that we worked with: 
        </p>

      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-y-10  lg:gap-y-24 items-center'>
        <LetterPhoto className={'order-1 lg:order-1'} image='/images/s.png'
            rectangle={
              <Fade triggerOnce={true}>
              <img src='/images/Rectangle_S.png' alt='Photo1' className='w-auto lg:h-4/6 h-full absolute top-[50%] lg:top-16 right-0'/>
            </Fade>
            }
        />
        <LetterPhotoAside className={'order-2 lg:order-2'} title="Manuel Riva (George Calin)" description="Romanian biggest sound producer. Produced songs as Mhm-Mhm, Mama Said, Russian Girl, Manuel Riva x Alexandra Stan - Heal Your Soul (one of Romanian biggest artists)"/>
        <LetterPhotoAside className={'order-4 lg:order-3'} title="DFRNS" description="Dutch based producer worked with Katy Perry, Jessie J,, Simons, Metro the Savage and many more"/>
        <LetterPhoto className={'order-3 lg:order-4'} image='/images/o.png'
        
        rectangle={
          <Slide direction='right' triggerOnce={true}>
          <img src='/images/Rectangle_O.png' alt='Photo1' className='w-11/12 h-auto absolute bottom-0 left-0'/>
        </Slide>
        }
        
        />
        <LetterPhoto  className={'order-5 lg:order-5'} image='/images/u.png'
        
        rectangle={
          <Slide direction='left' triggerOnce={true}>
          <img src='/images/Rectangle_O.png' alt='Photo1' className='w-11/12 h-auto absolute bottom-0 left-0'/>
        </Slide>
        }
        
        
        />
        <LetterPhotoAside className={'order-6 lg:order-6'} title="Yoda Francesco" description="Worked with Sia, Labrinth and Diplo (single called Mountains), Mario Worldwide, Ne-Yo and many more. A young sound producer with a soul as if he worked for 100 years in the industry."/>
        <LetterPhotoAside className={'order-8 lg:order-7'} title="STREETRUNNER<br/>Nicholas M. Warwar" description="is a Grammy Award winning, multi-platinum record producer from Miami, Florida. The maker of GOD DID by DJ Khaled. Honorable C.N.O.T.E. (Carlton Davis Mays) - multiple diamond producer.  Worked with Ne-Yo, Migos, Flo Rida, Gucci Mane, Travis Scott, Future, Trippie Redd and many more. Best known for producing “New Level” by rapper A$AP Rocky. A producer that doesn’t stop working on music."/>
        <LetterPhoto className={'order-7 lg:order-8'} image='/images/n.png' 
        
        rectangle={
          <Slide direction='right' triggerOnce={true}>
          <img src='/images/Rectangle_n.png' alt='Photo1' className='w-3/6 h-auto absolute bottom-0 right-0'/>
        </Slide>
        }
        
        
        />
        <LetterPhoto className={'order-9 lg:order-9'} image='/images/d.png'/>
        <LetterPhotoAside className={'order-10 lg:order-10'} title="Do you want to work with us?" description="Do you want to partner with us as a music producer? Let's get in touch and <b>get things rolling!</b>"
        
        rectangle={
          <Fade triggerOnce={true}>
          <img src='/images/Rectangle_d.png' alt='Photo1' className=' absolute h-2/6 inset-x-0 left-0 lg:-left-2 -bottom-2'/>
        </Fade>
        }
        
        
        />

      </div>

    </div>
  )
}

export default Producers