import React from 'react'
import rectangleImage from '../assets/Rectangle-3.png'
import HeroBottom from './HeroBottom'
function Hero() {
  return (
    <div className='relative w-11/12 m-auto'>
    <div className='relative mt-10' >
        <img src={rectangleImage}></img>
        <div className='absolute top-10 left-10 bottom-0 w-[20%] font-bold text-white text-4xl text-left'>

        Unveiling the Wonders of the Universe
        </div>
    </div>
    <HeroBottom/>
    </div>
  )
}

export default Hero