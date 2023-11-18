import React from "react";
import shaloo from "../img/sheela.jpeg";
import img1 from "../img/online.png";
import img2 from "../img/behavioral.png";

function AboutUs() {
  return (
    <>
      {/* <div>
        <h2 className="text-center font-semibold text-3xl">About Us</h2>
        <div>
          <div>
            <h2 className="font-algerian hidden md:block">About Us</h2>
          </div>
        </div>
        <div>
          <div>
            <img src={shaloo} alt=""></img>
          </div>
          <div>
            <h2>
              Every child is unique that's why their way of handling them shoud
              be
            </h2>
            <div>
              <div>
                <img src={img1}></img>
                <h2>Online Counselling</h2>
                <p>
                  {" "}
                  We also offer Online counselling to understand your child's
                  unique strengths and challenges. You can get a personalised
                  plan to support your child's growth and development.
                </p>
              </div>
              <div>
                <img src={img2}></img>
                <h2>Behavioral Interventions</h2>
                <p>
                  {" "}
                  Our behavior experts work closely with your child to develop
                  effective strategies to manage their behaviors and adapt
                  pattern to develop healthier ones.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div> */}

      <div className=" mt-40">
        <div>
        <h2 className="text-center text-3xl font-semibold">About Us</h2>
        <div className="border-2 border-[#9c29b2] w-20 m-auto  mt-3 relative"></div>
        </div>
        <div className="flex flex-col items-center md:flex-row">
            {/* <div>
                <h2 className="font-algerian hidden md:block rotate-[-90deg] text-[150px] border border-black h-[800px]">About Us</h2>
            </div> */}
            <div className="relative">
                <img src={shaloo} alt="Dr. Sheela Dang" className="w-[800px]"></img>
                <div className="absolute bottom-[-20px] w-56 md:w-96 md:bottom-10 left-[85px] md:left-[180px]  px-5 py-2">
                    <h2 className="text-[#da1414]">A live Therapy Session by</h2>
                    <h3 className="font-semibold text-xl">Dr. Sheela Dang</h3>
                </div>
            </div>
            <div className="flex flex-col mt-10 md:mt-0">
                <h2 className="font-grand mt-10 md:text-left text-xl text-center md:text-4xl ">Every child is unique that's why their way of handling them shoud be</h2>
                <div className="flex flex-col gap-10 items-center mt-20 md:items-start">
                    <div className="flex flex-col text-left items-center gap-2 md:items-start">
                        <img src={img1} alt="Online Counselling</h2>" className="w-12"></img>
                        <h2 className="text-lg font-semibold">Online Counselling</h2>
                        <p className="w-96 text-center md:text-left">We also offer Online counselling to understand your child's unique strengths and challenges. You can get a personalised plan to support your child's growth and development.</p>
                    </div>
                    <div className="flex flex-col text-left items-center gap-2 md:items-start">
                        <img src={img2} alt="Behavioral Interventions" className="w-12"></img>
                        <h2 className="text-lg font-semibold">Behavioral Interventions</h2>
                        <p className="w-96 text-center md:text-left"> Our behavior experts work closely with your child to develop effective strategies to manage their behaviors and adapt pattern to develop healthier ones.</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
