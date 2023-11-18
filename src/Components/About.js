import React from "react";
import shaloo from "../img/sheela.jpeg";
import img1 from "../img/online.png";
import img2 from "../img/behavioral.png";

function About() {
  return (
    <>
      <div className="">
        <div className="absolute left-[-170px] mt-96 rotate-[-90deg]">
          <h2
            className="font-algerian hidden md:block text-[150px]
            text-[rgb(0,0,0,8%)]"
          >
            ABOUT US
          </h2>
        </div>

        <div>
          <h2 className="text-center mt-20 text-3xl font-semibold ">
            About Us
          </h2>
          <div className="border-2 border-[#9c29b2] w-20 m-auto  mt-3 relative"></div>

          <div className="">
            <div className="  p-6 m-auto    md:block md:text-left ">
              <img src={shaloo} alt="Dr. Sheela Dang" className="w-[800px]"></img>
              <div
                className="absolute  w-72 md:w-96 mb-[-490px] 
              bg-[#f0f0f0] py-3 px-5 md:ml-[-24px]"
              >
                <h2 className="text-[#e02727] font-grand">
                  A Live Therapy Session by
                </h2>
                <h3 className="">-Dr. Sheela Dang</h3>
              </div>
            </div>
            <div className="md:mt-[-730px]">
              <h2 className="md:ml-[750px] md:mt-5 md:text-2xl lg:text-4xl lg:leading-snug xl:text-5xl xl:leading-snug md:leading-snug font-grand md:font-bold mt-10 md:text-left text-xl text-center">
                Every child is unique that's why their way of handling them
                shoud be
              </h2>
              <div className="flex flex-col md:flex-row border-2 border-black">
              <div className="mt-14 flex flex-col justify-center items-center md:block md:ml-[750px]">
                <img src={img1} alt="Online Counselling" className="w-12 text-center"></img>
                <div className="text-left">
                  <h2 className="mt-3 font-semibold text-center md:text-left">
                    Online Counselling
                  </h2>
                  <p className="w-80 text-center md:text-left p-5 md:p-0">
                    We also offer Online counselling to understand your child's
                    unique strengths and challenges. You can get a personalised
                    plan to support your child's growth and development.
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-col justify-center items-center md:block md:ml-[750px]">
                <img src={img2} alt=" Behavioral Interventions" className="w-12"></img>
                <div className="text-left">
                  <h2 className="mt-3 font-semibold text-center md:text-left">
                    Behavioral Interventions
                  </h2>
                  <p className="w-80 text-center md:text-left p-5 md:p-0">
                    Our behavior experts work closely with your child to develop
                    effective strategies to manage their behaviors and adapt
                    pattern to develop healthier ones.
                  </p>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
