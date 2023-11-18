import React from 'react'
import img1 from "../img/childplay.jpg"
import img2 from "../img/approach.png"
import img3 from "../img/parent.png"


function Sec1() {
  return (
    <>
        <div className='text-center md:text-left md:px-20'>
            <h3 className='text-[#da1414] font-semibold md:text-4xl font-baloo'>WE CARE FOR YOUR CHILDREN</h3>
             <h2 className='font-grand font-bold text-3xl md:text-4xl mt-3 '>Your child will grow and learn with the best <br/>  environment</h2>
        </div>
        <div className='md:flex md:px-20 md:gap-20 md:mt-20'>
            <div>
                <div className='w-80 h-80 md:w-96 md:h-96 mt-24 relative m-auto md:mt-10 md:m-0'>
                    <img src={img1} alt='child play' className='rounded-full'></img>

                    <div className='w-36 h-36 md:w-40 md:h-40  rounded-full p-5 bg-[#490d59] text-white absolute top-[-40px]'>

                    <div className='outline-dashed  w-[100px] h-[100px] md:w-[120px] md:h-[120px] rounded-full flex justify-center items-center flex-col'>
                        <h2>100%</h2>
                        <p>A+ Results</p>

                    </div>
                </div>
                </div>
            </div>

            <div>
                <div className='mt-14 md:mt-8 px-6'>
                    <h2 className='text-center md:text-left md:text-xl text-[#333]'>Little Dots offers an enriching environment where your child can expand their 
                    <br/>imagination with the best learning experience.</h2>
                </div>
                <div>
                        <div>
                            <h3 className='text-center mt-5 font-bold md:text-left md:ml-8'>SESSIONS: TUESDAY TO SUNDAY</h3>
                        </div>
                        <div className='text-center my-10 md:my-5 md:text-left md:ml-8'>
                            <h3 className='text-[#c20000] font-semibold text-lg'>Working Hours</h3>
                            <span>12PM to 7PM</span>
                        </div>
                </div>
                <div className='md:flex '>
                    <div className='flex flex-col justify-center 
                    items-center text-center px-8 md:text-left md:block '>
                        <div className='border border-black w-24 h-24 flex justify-center items-center rounded-full'>
                            <img src={img2} alt='Our Approach</h2>' className='w-16'></img>
                        </div>
                        <div>
                            <h2 className='font-medium my-2'>Our Approach</h2>
                            <p>Little Dots is founded on the belief that every child deserves a bright and happy future. That's why your child will get the learning environment as per your choices.</p>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center 
                    items-center text-center px-8 mt-10 md:mt-0 md:text-left md:block' >
                        <div className='border border-black w-24 h-24 flex justify-center items-center rounded-full '>
                            <img src={img3} alt='Parents and Family Support' className='w-16 '></img>
                        </div>
                        <div>
                            <h2 className='font-medium my-2'>Parents and Family Support</h2>
                            <p>We understand that parents and families play a critical role in a child's development. We offer guidance and support to help families understand and navigate their child's unique needs.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </>
  )
}

export default Sec1