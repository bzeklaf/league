import React from 'react'
import { AttentionSeeker } from 'react-awesome-reveal'

const LetterPhotoAside = ({ className,title,description,rectangle}) => {
  return (
   <div className={`${className} bg-black bg-opacity-50`}>
     <div className='relative  px-12  p-20 lg:p-24'>
    <AttentionSeeker effect={'pulse'}>
    <h2 className='text-3xl font-bold my-4 mb-8 bg-gradient-to-r from-yellow-400 to-orange-600 text-transparent bg-clip-text ' dangerouslySetInnerHTML={{ __html: title }}>
      </h2>
      </AttentionSeeker>

      {/* a 1px height div with gradient from yellow to transparent via orange */}
      <div className='w-3/6  h-[1px] bg-gradient-to-r from-yellow-400 via-orange-400 to-transparent mb-8'></div>

      <p className='w-5/6 lg:w-5/6 text-justify my-4' dangerouslySetInnerHTML={{ __html: description }}></p>

     
      {
            rectangle
      }
  
    </div>
   </div>
  )
}

export default LetterPhotoAside