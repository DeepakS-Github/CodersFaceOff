import React from 'react'

function navbar() {
  return (
    <div className='flex justify-between m-auto w-11/12'>
        <div className=' text-xl font-black'>
            ODYSSEY
        </div>
        <div className='w-[35vw] '>
            <ul className='flex justify-between items-center'>
                <li className='ml-2'>StayConnected</li>
                <li>Education</li>
                <li>Community</li>
                <li>About Us</li>
                <button className='pt-2 pb-2 pl-4 pr-4 w-[8vw] shadow rounded-lg bg-black text-white'>Sign In</button>
            </ul>

        </div>
    </div>
  )
}

export default navbar