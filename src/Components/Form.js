import React from "react";
import phone from "../img/phone.png";
import map from "../img/map.png";
import email from "../img/email.png";
import helicopter from "../img/halicopter.png"

function Form() {
  return (
    <>
      <div>
        <div>
          <div className="">
            <div className="my-10 ">
              <h2 className="text-3xl font-baloo  text-center font-semibold">
                Fix An Appointment
              </h2>
              <div className="border-2 border-[#9c29b2] w-16 m-auto mt-2"></div>
            </div>

            <div
              className="flex  bg-purple-200  
             items-center gap-28 
            rounded-2xl m-2"
            >
        

              <form className="flex flex-col md:block items-center gap-3 border-4 md:border-3 outline-dashed outline-purple-900 m-2 p-10 rounded-2xl">
                <div className="flex flex-col gap-3 md:block">
                  <input
                    type="text"
                    id=""
                    placeholder="Your Name"
                    required
                    className="outline-none border-2  m-auto rounded-lg p-5 "
                  ></input>

                  <input
                    type="email"
                    id=""
                    placeholder="Your Email"
                    required
                    className="outline-none border-2 m-auto rounded-lg p-5 md:ml-10 "
                  ></input>
                </div>

                <div className="md:mt-10 flex flex-col gap-3 md:block">
                  <input
                    type="number"
                    id=""
                    placeholder="Your Phone"
                    required
                    className="outline-none border-2  m-auto rounded-lg p-5 "
                  ></input>

                  <select className="outline-none border-2 rounded-lg p-5 md:ml-10 m-auto w-64">
                    <option>Select Services</option>

                    <option>Child Psychotherapy</option>
                    <option>Assesment</option>
                    <option>Occupation Therapy</option>
                    <option>Early Intervention</option>
                    <option>Speech Therapy</option>
                    <option>Dyslexia Therapy</option>
                    <option>Special Education</option>
                    <option>Brain Gym</option>
                    <option>Autism Intervention</option>
                    <option>ADHD Intervention</option>
                    <option>Mindfulness</option>
                    <option>Child Psychotherapy</option>
                    <option>Career Counselling</option>
                    <option>Remedial Education</option>
                    <option>Behavior Modification</option>
                  </select>
                </div>
                <textarea
                  rows={10}
                  placeholder="Your message Here"
                  className=" p-5 outline-none border-2 items-center mt-5 w-64 md:w-full"
                ></textarea>
                <button className="border px-10 p-5 rounded-xl bg-[#ff7a00] block font-semibold mt-4">
                  Submit
                </button>
              </form>

              <div className="font-baloo hidden md:block text-xl">
                <div className="absolute right-10 mt-[-100px]">
                  <img src={helicopter} alt="helicopter"></img>
                </div>
                <div className="">
                  <h2 className="text-3xl font-semibold">Contact Info</h2>
                  <button className="border px-8 p-3 rounded-xl bg-[#ff7a00] block font-semibold text-xl mt-5">
                  Talk to a consult
                </button>
                </div>

                <div className="mt-10">
                  <h3 className="text-3xl">Want to know more about treatment</h3>

                  <div className="flex flex-col gap-8 mt-10">
                    <div className="flex items-center gap-5">
                      <img src={phone} alt="phone" className="w-8"></img>
                      <a href="tel: +91 9920453561">+91 9920453561</a>/
                      <a href="tel: +91 8657459250"> 8657459250</a>
                      /
                      <a href="tel: +91 18002100490" className="block"> <span className="font-semibold ">Toll Free:</span> 18002100490</a>

                    </div>
                    <div className="flex items-center gap-5">
                      <img src={email} alt="email" className="w-8"></img>
                      <a href="mailto: info@littledotscdc.com">
                        {" "}
                        info@littledotscdc.com
                      </a>
                    </div>
                    <div className="flex items-center gap-5">
                      <img src={map} alt="map" className="w-8"></img>
                      <p className="w-80">
                        Room No. 1 kesarinath CHSL opp vijaysales, SV road,
                        Goregaon west
                      </p>
                    </div>
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

export default Form;
