import React from "react";
// import img1 from "../img/facebook.png";
import img2 from "../img/instagram.png";
import img3 from "../img/linkedin.png";
import logo from "../img/logo.png";
// import hand from "../img/hand-shake.png";
import teddy from "../img/teddy.png";
// import helicopter from "../img/halicopter.png";
import email from "../img/email.png";
import phone from "../img/phone.png";
import map from "../img/map.png";

function Footer() {
  return (
    <>
      <div className="md:pl-28 bg-[#fde7cd] pb-5">
        {/* <div className="relative">
          <img src={hand} alt="" className="absolute right-0 mt-20 w-36 brightness-120 md:w-auto"></img>
        </div> */}

        <div className="relative">
          <img
            src={teddy}
            alt="TEDDY"
            className="absolute md:left-[-80px] md:top-20 md:mt-20 w-16 left-5"
          ></img>
        </div>

        <div className="relative">
          {/* <img
            src={helicopter}
            alt=""
            className="absolute top-[450px] left-20 mt-20"
          ></img> */}
        </div>
        <div className="flex flex-wrap ">
          <div>
            <img src={logo} alt="Littledots" className="md:w-80 w-72 ml-[-40px]"></img>
            <h2 className="text-black md:text-2xl md:w-96 md:mt-[-100px]  md:font-baloo md:font-semibold mt-[-80px] px-8">
              Children and God's precious gift and we want them to enjoy every
              moment of their childhood
            </h2>

            <div className="mt-5 md:ml-8 hidden md:block">
              <h2 className="text-xl font-semibold ">Follow Us On:</h2>

              <div className="flex gap-5 mt-5">
                {/* <div className="w-14 h-14 rounded-full border border-black flex justify-center items-center bg-[#ffd600]">
                  <a href="#">
                    <img src={img1} alt="" className="w-8"></img>
                  </a>
                </div> */}

                <div className="w-14 h-14 rounded-full border border-black flex justify-center items-center bg-[#ffd600]">
                  <a href="https://instagram.com/littledotsofficial?utm_source=qr&igshid=OGU0MmVlOWVjOQ==">
                    <img src={img2} alt="instagram" className="w-6"></img>
                  </a>
                </div>
                <div className="w-14 h-14 rounded-full border border-black flex justify-center items-center bg-[#ffd600]">
                  <a href="https://www.linkedin.com/in/sheela-dang-a71887227?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                    <img src={img3} alt="linkedin" className="w-6"></img>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="md:mt-52 flex flex-col gap-5 md:ml-20 ml-8 mt-10 ">
            <div className="">
              <h2 className="text-2xl md:text-4xl font-semibold font-baloo">
                Get In Touch
              </h2>
              <div className="flex gap-2 ">
                <p className="">Tuesday to Sunday: </p>
                <span className="block">12 to 7</span>
              </div>
              <div className="flex gap-2 ">
                <p className="">Monday: </p>
                <span className="block font-bold">Closed</span>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-5">
                <img src={email} alt="email" className=" w-6 "></img>
                <a href="mailto: info@littledotscdc.com">
                  <p className="border-b-2 border-red-500">
                    info@littledotscdc.com
                  </p>
                </a>
              </div>
              <div className="flex items-center justify-center flex-wrap gap-6 w-[300px]">
                <img src={phone} alt="phone" className="w-6"></img>
                <div className="flex flex-wrap gap-2">
                  <a href="tel: +91 9920453561">
                    <p className="border-b-2 border-red-500">+91 9920453561</p>
                  </a>{" "}
                  /
                  <a href="tel: +91 8657459250">
                    <p className="border-b-2 border-red-500">8657459250</p>
                  </a>
                </div>

                <a
                  href="tel: +91 18002100490"
                  className="flex items-center gap-4"
                >
                  <span className="font-semibold">Toll Free: </span>
                  <p className="border-b-2 border-red-500">18002100490</p>
                </a>
              </div>
              <div className="flex items-start gap-5">
                <img src={map} alt="address" className="w-6"></img>
                <p className="w-56">
                  Room no. 1 Kesarinath CHSL opp vijaysales, SV road, Goregaon
                  west
                </p>
              </div>
            </div>
          </div>

          <div className="md:mt-52 flex flex-col gap-5 md:ml-56 ml-8 mt-10">
            <div className="">
              <h2 className="text-2xl md:text-4xl font-semibold font-baloo">
                Usefull Services
              </h2>
            </div>

            {/* <div className="flex flex-col gap-6">
              <div className="flex items-center gap-5">
                <img src={email} alt="" className="w-8 "></img>
                <a href="mailto: info@littledotscdc.com"><p className="border-b-2 border-red-500">info@littledotscdc.com</p></a>
              </div>
              <div className="flex items-center gap-5">
              <img src={phone} alt="" className="w-8"></img>
              <a href="tel: 91+ 8657420227"><p className="border-b-2 border-red-500">91+ 8657420227</p></a>
              </div>

            </div> */}

            <div className="flex gap-20">
              <ul className="flex flex-col gap-3 list-disc">
                <a href="#">
                  <li>Child Psychotherapy</li>
                </a>
                <a href="#">
                  <li>Assessments</li>
                </a>
                <a href="#">
                  <li>Occupational Therapy</li>
                </a>
                <a href="#">
                  <li>Early Invention</li>
                </a>
                <a href="#">
                  <li>Speech Therapy</li>
                </a>
                <a href="#">
                  <li>Dyslexia Therapy</li>
                </a>
                <a href="#">
                  <li>Remedial Education</li>
                </a>
              </ul>

              <ul className="flex flex-col gap-3 list-disc">
                <a href="#">
                  <li>Special Education</li>
                </a>
                <a href="#">
                  <li>Brain Gym</li>
                </a>
                <a href="#">
                  <li>Autism Intervention</li>
                </a>
                <a href="#">
                  <li>ADHD Intervention</li>
                </a>
                <a href="#">
                  <li>Mindfulness</li>
                </a>
                <a href="#">
                  <li>Career Counseling</li>
                </a>
                <a href="#">
                  <li>Behavioral Modification</li>
                </a>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="py-2 w-full flex flex-col md:flex-row items-center md:justify-between md:px-40  md:bg-[#ffd600] md:text-black bg-black text-white md:h-20">
      <div className="flex gap-5 py-4 md:hidden ">
              
                <div className="w-9 h-9 rounded-full border border-black flex justify-center items-center bg-[#ffd600]">
                  <a href="https://instagram.com/littledotsofficial?utm_source=qr&igshid=OGU0MmVlOWVjOQ==">
                    <img src={img2} alt="" className="w-5"></img>
                  </a>
                </div>
                <div className="w-9 h-9 rounded-full border border-black flex justify-center items-center bg-[#ffd600]">
                  <a href="https://www.linkedin.com/in/sheela-dang-a71887227?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                    <img src={img3} alt="" className="w-5"></img>
                  </a>
                </div>
              </div>
        <p className="md:text-xl text-sm font-bold text-center">
          {" "}
          &copy; 2023 CODERBOX TM. All Rights Reserved
        </p>
        <p className=" text-sm mt-1  hidden md:block">
          Terms & Condition | Privacy Policy | Support
        </p>
      </div>
    </>
  );
}

export default Footer;
