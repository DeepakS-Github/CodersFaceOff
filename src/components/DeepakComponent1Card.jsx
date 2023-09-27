import React from 'react'

function DeepakComponent1Card(props) {
  return (
    <section className='flex flex-col shadow-lg rounded-2xl py-10 bg-white px-10'>
        <h1 className='text-[#A9C2CB] text-5xl font-bold'>{props.number}</h1>
        <p className='text-[#020305] text-2xl font-bold mt-6 leading-7'>{props.heading}</p>
        <span className='text-[#171E27] text-md text-[18px] leading-7 mt-4'>{props.text}</span>
    </section>
  )
}

export default DeepakComponent1Card