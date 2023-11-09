import React from "react";
import form1 from "../images/last2.png";
import form2 from "../images/last1.png";

export default function Form() {
  return (
    <>
      <section>
        <div className="  py-28  mxsm:px-24  px-2  ">
          <div className="flex lg:h-96 h-[590px] lg:flex-row flex-col  relative rounded-2xl justify-between bg-[#484859]">
            {/* left */}
            <div className="w-auto h-auto pb-10 pt-12 md:pl-10  px-4  lg:pr-0 space-y-6  ">
              <div className="w-auto h-auto flex sm:flex-row flex-wrap  flex-col">
                <div className=" text-white md:text-5xl text-3xl font-light    leading-10">
                  Get started with 
                </div>
                <span className=" text-blue-500 md:text-5xl w-auto ml-2 text-3xl font-bold font-['Montserrat'] leading-10">
                    LeadPipelye
                  </span>
              </div>
              <div className="max-w-96  text-white sm:text-lg text-sm font-normal   leading-relaxed">
                Ready to grow? Get a 14-day free trial with LeadPipelyne today.
              </div>
              <div className="md:w-[450px] w-auto h-14 ">
                <div className="relative flex flex-col  sm:space-y-0  space-y-6 items-end">
                  <input type="email" placeholder="Enter Email Address" label="Email Address" className="md:w-[450px] w-full h-14 pl-5 bg-white  rounded-xl shadow border border-gray-100"
                  />
                  <button className="w-28 h-10 sm:absolute sm:right-4 sm:top-2  rounded-xl px-6 pt-3.5 pb-4 bg-blue-500  shadow justify-center items-center gap-2 inline-flex">
                    <div className="text-center text-white text-sm font-semibold">
                      Start trial
                    </div>
                  </button>
                </div>
              </div>
              <div className="sm:block hidden">
                <span className="text-zinc-400 text-sm font-medium   leading-relaxed">
                  *No credit card required \{" "}
                </span>
                <span className="text-zinc-400 text-sm font-bold font-['Montserrat'] leading-relaxed">
                  Free for 14 days.
                </span>
              </div>
            </div>

            {/* right */}

            <div className="flex flex-row items-end  lg:justify-normal justify-end  lg:relative lg:w-[370px] w-auto">
              <img
                className="  lg:w-44 sm:w-40 w-24 lg:absolute lg:right-44 lg:bottom-0  "
                alt="form"
                src={form1}
              />

              <img
                className="  lg:w-72 sm:w-60  w-40 z-10 lg:absolute lg:right-0 lg:bottom-0"
                alt="form"
                src={form2}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
