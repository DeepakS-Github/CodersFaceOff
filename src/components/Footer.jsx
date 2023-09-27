// import React from 'react'
import FooterImage from '../../public/images/f1.png'
const Footer = () => {
    return (
        <div className='w-11/12 m-auto'>

            <div className={`flex relative justify-center text-white items-center`}>
                <img src={FooterImage} alt="image" className='h-[80%]' />
                <div className=" details absolute w-[90%] h-1/2 flex flex-col gap-4">
                    <h1 className='text-2xl md:text-6xl  font-bold'>Join Our Community</h1>
                    <p className='w-1/2 text-xs md:text-base'>of stargazers, explorers, and cosmic enthusiasts as we embark on a journey through the cosmos like never before.</p>
                    <div className="inputs w-full md:w-[50%] flex flex-col md:flex-row justify-around">
                        <input type="text" name="" id="" placeholder='Enter Your Mail' className='w-[80%] rounded-xl px-4 text-black' />
                        <button className='py-4 px-7 bg-[#A9C2CB] rounded-xl'>Subscribe</button>
                    </div>
                </div>
            </div>
            <div className="details h-[30vh] ">
                <div className="first flex justify-between text-lg h-[70%] items-center">
                    <div className="first w-[10%] font-bold">Odyssey</div>
                    <div className="second w-[40%] flex justify-around">
                        <p>Stay Connected</p>
                        <p>Education</p>
                        <p>Community</p>
                        <p>About Us</p>
                    </div>
                    <div className="third w-[25%] flex">
                        <p>Privacy Policy</p>
                        <p>Terms & Agreements</p>
                    </div>
                </div>
                <div className="second flex w-full justify-center">
                    <p>[contact@odyssey.com].</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
