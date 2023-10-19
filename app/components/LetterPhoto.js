import React from 'react'

const LetterPhoto = ({className,image,rectangle}) => {
  return (
    <div className={className}>
        <div className='relative place-self-center'> 
          <img src={image} alt="letter" className='w-4/6 lg:w-3/6 max-h-full  mx-auto'/>
          {
            rectangle
          }
        </div>
    </div>
  )
}

export default LetterPhoto