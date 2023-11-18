import React from "react";

import img1 from "../img/drishti.png";
import img2 from "../img/hetika.png";
import img3 from "../img/shivangi.png";
import img4 from "../img/shrusti.png";
import shaloo from "../img/sheela.jpeg";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

import "swiper/css";
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

function swipper() {
  return (
    <>
    <div className="my-10">
        <h2 className="text-center text-3xl font-semibold ">Meet Your Mentors</h2>
        <div className="border-2 border-[#9c29b2] w-20 m-auto  mt-2 relative"></div>
      </div>
    <Swiper
      className="w-[1400px] h-[550px] mt-10"
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={20}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide className="bg-[#490D59] font-baloo text-lg text-[#fff] rounded-xl p-10 flex">
        <div className="flex flex-col ">
          <img src={shaloo} alt="Dr. Sheela Dang" className="w-40  m-auto "></img>
          <div>
            <div className="">
            <h2 className="text-center  text-2xl font-bold mt-10">
            Dr. Sheela Dang
          </h2>
          <p className="text-center text-md mt-4">
            Sheela Dang is a Mumbai-based psychologist and the founder/director of Sheela Dang Mental Health Care Centre (OPC), Private Limited and Little Dots Child Development Centre.<span className="text-red-700 font-bold text-xl">Read More...</span>
          </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="bg-[#490D59] font-baloo text-lg text-[#fff] rounded-xl p-10 flex">
        <div className="flex flex-col ">
          <img src={img1} alt="Drishti R Shah" className="w-40  m-auto "></img>
          <div>
            <div className="">
            <h2 className="text-center  text-2xl font-bold mt-10">
            Drishti R Shah
          </h2>
          <p className="text-center text-md mt-4">
            She is a psychologist with her Master’s degree from Singhania University. Since the beginning, she has been passionate about children, and this platform has allowed her to pursue both her passion and her career as a child psychologist. <span className="text-red-700 font-bold text-xl">Read More...</span>
          </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="w-[40vw] h-[30vw] bg-[#490D59] font-baloo text-lg text-[#fff] rounded-xl p-10">
      <div className="flex flex-col">
          <img src={img2} alt="Hetika Kirti Dhakkan" className="w-40 m-auto"></img>
          <div>
            <div className="">
            <h2 className="text-center  text-2xl font-bold mt-10">
            Hetika Kirti Dhakkan
          </h2>
          <p className="text-center text-md">
            She is a psychologist with her Bachelor’s degree from Mithibai College of Arts, Mumbai and Master’s degree (clinical psychology) from CMR university, Bangalore. She has always enjoyed working with children. <br/> <span className="text-red-700 font-bold text-xl">Read More...</span> 
          </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="w-[40vw] h-[30vw] bg-[#490D59] font-baloo text-lg text-[#fff] rounded-xl p-10">
      <div className="flex flex-col">
          <img src={img3} alt="Shivangi Rawat" className="w-40 m-auto"></img>
          <div>
            <div className="">
            <h2 className="text-center  text-2xl font-bold mt-10">
            Shivangi Rawat
          </h2>
          <p className="text-center text-md">
            Miss Shivangi Rawat is a psychologist at Little Dots Child
            Developmental Centre. She has always had a knack of connecting with children and an unabashed love for supporting children in their journeys of becoming a unique person with a happy and blossoming life. <br/> <span className="text-red-700 font-bold text-xl">Read More...</span>
          </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="w-[40vw] h-[30vw] bg-[#490D59] font-baloo text-lg text-[#fff] rounded-xl p-10">
      <div className="flex flex-col">
          <img src={img4} alt="Shrusti S Mehta" className="w-40 m-auto"></img>
          <div>
            <div className="">
            <h2 className="text-center text-2xl font-bold mt-10">
            Shrusti S Mehta
          </h2>
          <p className="text-center text-md">
            Shrusti S Mehta is a psychologist with her Bachelor’s degree from St. Wilfred College and her Master’s degree in Psychology from Bir Tikendrajit University. Shrusti has 2 years of experience in Child & Adolescent Psychology and Marital Counselling. <br/> <span className="text-red-700 font-bold text-xl">Read More...</span>
          </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
    </>

  );
}

export default swipper;
