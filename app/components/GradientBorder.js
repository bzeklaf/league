import React from 'react'

const GradientBorder = ({children,width}) => {
  return (
    <div className={`bg-gradient-to-r from-yellow-500 to-orange-500 p-[${width}]`}>
       {children}
    </div>
  )
}

export default GradientBorder