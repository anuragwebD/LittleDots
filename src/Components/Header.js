import React from 'react'
import bg from "../img/header.png"

function Header() {
  return (
    <>
    <div className='relative md:mt-[-100px] mt-[-80px]'>
    <img src={bg} alt='children playing' className='w-screen h-60 md:h-auto '></img>

       <div className='flex justify-center items-center flex-col  absolute top-[50%] left-[50%] translate-x-[-50%] mt-[-20px]
       translate-y-[-50%]'>
        <h2 className='font-grand text-center text-2xl md:text-6xl text-white font-bold w-80 md:w-auto'>Empower Your Child with  <br/><span className='text-[#fff500]'>Imagination</span></h2>
        <button className='bg-[#9c29b2] text-sm md:text-lg px-8 py-3 text-center font-bold rounded-2xl text-white  mt-4'>Book A Visit</button>
       </div>
      

    </div>

    </>
  )
}

export default Header