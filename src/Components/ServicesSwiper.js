import React from "react";

import img1 from "../img/adoption.png"
import img2 from "../img/check-list.png"
import img3 from "../img/intervention.png"
import img4 from "../img/speech-therapy.png"
import img5 from "../img/therapy.png"
import img6 from "../img/specialization.png"
import img7 from "../img/brain.png"
import img8 from "../img/philosophy.png"
import img9 from "../img/counselor.png"
import img10 from "../img/pills.png"
import img11 from "../img/cognitive.png"
import img12 from "../img/government.png"

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
    <div className="my-10 mt-10">
        <h2 className="text-center text-4xl font-semibold ">Services</h2>
        <div className="border-2 border-[#9c29b2] w-12 m-auto  mt-2 relative"></div>
      </div>
    <Swiper
      className="h-[400px] mt-10 w-[1500px]"
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={20}
      slidesPerView={4}
      navigation
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide className="bg-[#490D59] font-baloo text-lg text-[#fff] rounded-xl  flex">
      <div className="p-8">
              <img src={img1} alt="Child psychotherapy" className="w-20 mb-4"></img>
              <h2 className="font-semibold text-lg mb-3">Child Psychology</h2>
              <p>
                Child psychotherapy strengthen emotional support and address
                psychological challenges for children. We've made a secure and
                engaging environment for them to freely express themselves and
                cultivate healthy coping mechanisms.
              </p>
            </div>
      </SwiperSlide>
      <SwiperSlide className="w-[40vw] h-[30vw] bg-red-400 font-baloo text-lg text-[#fff] rounded-xl ">
      <div className="p-8">
            <img src={img2} alt="Assessments" className="w-20 mb-4"></img>
              <h2 className="font-semibold text-lg mb-3">Assessments</h2>
              <p>
                Assessments in child psychotherapy involve the systematic
                evaluation of a child's cognitive, emotional, behavioral, and
                social functioning. With assessments, we offer insights that can
                guide personalized interventions.
              </p>
            </div>
      </SwiperSlide>
      <SwiperSlide className="w-[40vw] h-[30vw] bg-orange-500 font-baloo text-lg text-[#fff] rounded-xl ">
      <div className="p-5 pl-8">
            <img src={img3} alt="Early intervention" className="w-20 mb-4"></img>

              <h2 className="font-semibold text-lg mb-3">Early Intervention</h2>
              <p>
                Early intervention refers to targeted services and support
                provided to infants and young children who exhibit developmental
                delays or are at risk of delays. Our intervention programs are
                designed to support children's growth, especially in their
                critical early years.
              </p>
            </div>
      </SwiperSlide>
      <SwiperSlide className="w-[40vw] h-[30vw] bg-pink-600 font-baloo text-lg text-[#fff] rounded-xl">
      <div className="p-8">
            <img src={img4} alt="Speech therapy" className="w-20 mb-4"></img>

              <h2 className="font-semibold text-lg mb-3">Speech Therapy</h2>
              <p>
                Speech therapy involves the assessment and treatment of
                communication disorders and difficulties with speech and
                language. We create engaging therapy sessions to boost their
                communication skills.
              </p>
            </div>
      </SwiperSlide>

      <SwiperSlide className="bg-green-700 font-baloo text-lg text-[#fff] rounded-xl flex">
      <div className="p-8">
            <img src={img10} alt="Dyslexia therapy" className="w-20 mb-4"></img>

              <h2 className="font-semibold text-lg mb-3">Dyslexia Therapy</h2>
              <p>
                Dyslexia therapy is a specialized intervention crafted to assist
                children with dyslexia, a learning disorder impacting their
                reading, spelling, and writing abilities. Our therapies are
                personalized to each child's unique needs.
              </p>
            </div>
      </SwiperSlide>
      <SwiperSlide className="w-[40vw] h-[30vw] bg-blue-800 font-baloo text-lg text-[#fff] rounded-xl ">
      
      <div className="p-8">
            <img src={img6} alt="Special education" className="w-20 mb-4"></img>

              <h2 className="font-semibold text-lg mb-3">Special Education</h2>
              <p>
                Special education services provide individualized instruction
                and support for children with developmental or learning
                disabilities. Our programs are designed to cater to the
                individualized learning requirements of children with various
                abilities.
              </p>
            </div>
      </SwiperSlide>
      <SwiperSlide className="w-[40vw] h-[30vw] bg-yellow-700 font-baloo text-lg text-[#fff] rounded-xl ">
      <div className="p-8">
            <img src={img7} alt="Brain Gym" className="w-20 mb-4"></img>

              <h2 className="font-semibold text-lg mb-3">Brain Gym</h2>
              <p>
                Brain Gym comprises a set of movements and exercises aimed at
                promoting brain function and enhancing learning. These fun
                activities engage children's minds in a playful manner.
              </p>
            </div>

      </SwiperSlide>
      <SwiperSlide className="w-[40vw] h-[30vw] bg-yellow-500 font-baloo text-lg text-[#fff] rounded-xl">
      <div className="p-8">
            <img src={img5} alt="Autism intervention" className="w-20 mb-4"></img>

              <h2 className="font-semibold text-lg mb-3">Autism Intervention</h2>
              <p>
                Autism intervention involves a range of therapies and strategies
                designed to address the challenges faced by individuals with
                autism spectrum disorder (ASD). We focus on improving
                communication, social skills, and overall quality of life.
              </p>
            </div>
      </SwiperSlide>

      <SwiperSlide className="bg-purple-400 font-baloo text-lg text-[#fff] rounded-xl flex">
      <div className="p-8">
            <img src={img8} alt="Mindfulness" className="w-20 mb-4"></img>

              <h2 className="font-semibold text-lg mb-3">Mindfulness</h2>
              <p>
                Mindfulness in child psychotherapy involves teaching children to
                focus on the present moment, cultivating awareness and emotional
                regulation. Our programs help children manage stress, improve
                self-awareness, and cultivate emotional balance.
              </p>
            </div>
      </SwiperSlide>
      <SwiperSlide className="w-[40vw] h-[30vw] bg-red-600 font-baloo text-lg text-[#fff] rounded-xl">
      <div className="p-5">
            <img src={img9} alt="Career counseling" className="w-20 mb-4"></img>

              <h2 className="font-semibold text-lg mb-3">Career Counseling</h2>
              <p>
                Career counseling for children involves helping them explore
                their interests, strengths, and aptitudes to make informed
                decisions about educational and career paths. We offer
                counseling services to help them make wise decisions about their
                career paths.
              </p>
            </div>
      </SwiperSlide>
      <SwiperSlide className="w-[40vw] h-[30vw] bg-slate-800 font-baloo text-lg text-[#fff] rounded-xl ">
      <div className="p-8">
            <img src={img12} alt="Remedial education" className="w-20 mb-4"></img>

              <h2 className="font-semibold text-lg mb-3">Remedial Education</h2>
              <p>
                Remedial education is dedicated to offering extra instruction
                and support to children facing academic challenges. Our remedial
                education programs target specific learning challenges, helping
                children catch up and excel academically.
              </p>
            </div>
      </SwiperSlide>
      <SwiperSlide className="w-[40vw] h-[30vw] bg-gray-500 font-baloo text-lg text-[#fff] rounded-xl ">
      <div className="p-5 pl-8">
            <img src={img11} alt="Behavior modification" className="w-20 mb-4"></img>

              <h2 className="font-semibold text-lg mb-3">Behavior Modification</h2>
              <p>
                Behavior modification is a therapeutic approach that involves
                systematically changing undesirable behaviors and reinforcing
                positive ones. Our behavior modification programs focuses on
                addressing behavioral concerns, enhancing social interactions,
                and boosting self-esteem in children.
              </p>
            </div>
      </SwiperSlide>
     
    </Swiper>
    </>

  );
}

export default swipper;
