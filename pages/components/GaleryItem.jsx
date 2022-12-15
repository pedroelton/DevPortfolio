/* eslint-disable @next/next/no-img-element */
import React from 'react'


const GaleryItem = ({photo, alt}) => {
  return (
    <>
        <img src={photo} alt={alt} className="w-[72px] hover:scale-110 transition-all duration-300 m-3" />
    </>
  )
}

export default GaleryItem