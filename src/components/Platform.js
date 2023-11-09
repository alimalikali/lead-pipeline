import React from "react";
import bgDesgin from "../images/desgin.png";
import star from "../images/Group 10.png";
import line1 from "../images/line1.png";
import line2 from "../images/line2.png";
import pic1 from "../images/pp1.png";
import pic2 from "../images/pp4.png";
import pic3 from "../images/ali.png";
import arrow from "../images/Arrow1.png";
import picN from "../images/abcd.png";




export default function Platform() {
  return (
    <>
      <section className="relative mt-28 " >
      <img src={bgDesgin} alt="sa" className="absolute top-0 -z-20" />
          <img src={line1} alt="sa" className="absolute z-20 right-0 top-[-12px]" />
          <img src={line2} alt="sa" className="absolute z-20 left-0 top-96" />
        <div className="pt-28 ">
          <div className="flex py-12 mt-16 h-auto  space-y-24 flex-col bg-[#484859]  items-center">

            {/* top */}
            <div className="relative flex flex-col items-center px-7">
              <img src={bgDesgin} alt="sa" className="top-400px absolute -z-20" />
              <img src={bgDesgin} alt="sa" className="top-600px absolute -z-20" />


              <img src={star} alt="sa" className="w-[70px] h-auto" />
              <h1 className="w-auto text-center text-white sm:text-5xl  text-2xl  font-bold font-['Montserrat'] leading-normal">
                Learn how businesses like yours use our <br />
                platform
              </h1>
            </div>

            {/* bottom */}
            <div className="flex flex-col items-center space-y-7">
              <div className="flex gap-1 justify-center bg-[#484859]">
                <div className="lg:flex hidden space-y-7">
                  <div className="flex flex-wrap flex-row gap-1 justify-center ">
                    <img src={pic1} alt="sd" className="w-[632px]  " />
                    <img src={pic3} alt="sd" className="w-[496px]  " />
                    <img src={pic3} alt="sd" className="w-[496px]  " />
                    <img src={pic2} alt="sa" className="w-[632px]  " />
                  </div>
                </div>

                <div className="lg:hidden flex flex-col items-center space-y-9 px-4 w-auto">
                  <img src={pic1} alt="sd" className="max-w-auto " />
                  <div className="flex flex-row space-x-4 snap-x snap-proximity overflow-x-auto no-scrollbar overflow-y-hidden ">
                    <img src={picN} alt="sd" className="w-auto   snap-center  snap-always" />
                    <img src={picN} alt="sd" className="w-auto   snap-center  snap-always" />
                  </div>
                  <img src={pic2} alt="sa" className="max-w-auto " />
                </div>
              </div>

              <button className=" sm:w-[220px] w-[300px] h-[59px] items-start gap-[10px] pl-[20px] py-[16px] relative bg-white rounded-[20px] overflow-hidden border-0 border-none  box-border">
                  <div className="relative flex flex-row items-center  w-fit mb-1 [font-family:'Montserrat-Medium',Helvetica] font-extrabold text-[#507DDC] text-[13px] text-center  leading-[normal]">
                    See More Stories
                    <img src={arrow} alt="arrow" className="sm:ml-6 ml-24"/>
                  </div>
                </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
