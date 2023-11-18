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
      <div>
        <h2 className="text-center text-3xl font-semibold">Meet Your Mentors</h2>
        <div className="border-2 border-[#9c29b2] w-20 m-auto  mt-2 relative"></div>
      </div>
      <Swiper
        className="mt-10 w-[310px]"
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
         <SwiperSlide className="bg-[#490D59] font-baloo text-lg text-[#fff] rounded-xl p-10 flex">
        <div className="flex flex-col ">
          <img src={shaloo} alt="sheela dang" className="w-40  m-auto "></img>
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
        {/* <SwiperSlide className="bg-[#490D59] font-baloo text-lg text-[#fff] rounded-xl p-5 ">
          <img src={img1} alt="" className=""></img>
          <h2 className="text-center  text-2xl font-bold mt-10">
            Drishti R Shah
          </h2>
          <p className="text-center mt-5">
            She is a psychologist with her Master’s degree from Singhania University. Since the beginning, she has been passionate about children, and this platform has allowed her to pursue both her passion and her career as a child psychologist. She works with children & adolescents with neurodevelopmental disorders with a great deal of love, compassion, affection and assists their parents as well. When it comes to dealing with these children & adolescents,
            she is really kind, composed and patient. She provides a safe environment for children & adolescents while also assisting them in learning more about their mental, emotional, social, and behavioural issues through a variety of techniques of therapy. She is committed onto promoting healthy development, emotional well-being and empowering children & adolescents to thrive in lives. Our goal is to
            work collaboratively with families to make a positive and
            long-lasting difference in the lives of children & adolescents.
          </p>
        </SwiperSlide> */}
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
        {/* <SwiperSlide className="bg-[#490D59] font-baloo text-lg text-[#fff] rounded-xl p-5 ">
          <img src={img2} alt="" className=""></img>
          <h2 className="text-center  text-2xl font-bold mt-10">
            Hetika Kirti Dhakkan
          </h2>
          <p className="text-center mt-5">
            She is a psychologist with her Bachelor’s degree from Mithibai College of Arts, Mumbai and Master’s degree (clinical psychology) from CMR university, Bangalore. She has always enjoyed working with children. And this platform has enabled her to pursue her passion of using psychology as a means to support and mentor kids of all ages and backgrounds in developing the skills they require to grow and create a safe, nurturing environment where they can work through internal conflicts and improve their emotional regulation. She has a calm yet playful nature towards children. She also enjoys collaborating with parents to promote awareness of the challenges children face while growing and deepen their understanding of their
            kids.
          </p>
        </SwiperSlide> */}

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
        {/* <SwiperSlide className="bg-[#490D59] font-baloo text-lg text-[#fff] rounded-xl p-5 ">
          <img src={img3} alt="" className=""></img>
          <h2 className="text-center  text-2xl font-bold mt-10">
            Shivangi Rawat
          </h2>
          <p className="text-center mt-5">
            Miss Shivangi Rawat is a psychologist at Little Dots Child
            Developmental Centre. She has always had a knack of connecting with children and an unabashed love for supporting children in their journeys of becoming a unique person with a happy and blossoming life. She along with her team sought out to bring the best in every child whilst utilising different approaches for every little one.
            She has done her Graduation in Psychology and Philosophy and she completed her Post Graduation in Clinical Psychology. She has a passion for helping children and creating distinctive paths to make their learning experience a jolly one. She works in areas like-
            expressive skills, speech and language processing and emotional regulation for young hearts. For her, it goes beyond the realms of work but more of something she loves. It is in her enthusiasm that dictates her motive to pursue this merry path along with the ardent devotion of her team.
          </p>
        </SwiperSlide> */}

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
        {/* <SwiperSlide className="bg-[#490D59] font-baloo text-lg text-[#fff] rounded-xl p-5 ">
          <img src={img4} alt="" className=""></img>
          <h2 className="text-center  text-2xl font-bold mt-10">
            Shrusti S Mehta
          </h2>
          <p className="text-center mt-5">
            Shrusti S Mehta is a psychologist with her Bachelor’s degree from St. Wilfred College and her Master’s degree in Psychology from Bir Tikendrajit University. Shrusti has 2 years of experience in Child & Adolescent Psychology and Marital Counselling. In nature, she is a very calm, collected, and easy to understand person. Shrusti strives
            to assist children and adolescents in overcoming obstacles and discovering their full potential which nurtures their mental and emotional growth. And also enjoys working with them. Having rich experience in handling marital issues, shrusti also guides couples through the complexities of relationships and provides a supportive environment for them to work together overcome their hurdles and to
            establish a stronger foundation. Shrusti seeks to support adults in exploring their thoughts and feelings, empowering them to make assertive and informed decisions, with a pratical approach and a commitment to encouraging personal growth in every area of their life
          </p>
        </SwiperSlide> */}

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
