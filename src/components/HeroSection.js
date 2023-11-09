import React from "react";
import line1 from "../images/Line-1.png";
import linem from "../images/Line-m.png";
import exp   from "../images/experience it here.png"
import arrow   from "../images/Vector 69.png"


export default function HeroSection() {
  return (
    <>
      <section>
        <div className="space-y-28">
        <div className=" ">
          <div className="relative ">
            <img src={linem} alt="line" className="absolute left-[-10px] top-[20px] hidden md:inline-block" />
          </div>

          <div className="flex flex-col justify-center sm:space-y-7 space-y-16 ">
            <div className="flex flex-col items-center space-y-4 sm:mt-28 mt-11  ">
              <div className="w-fit ">
                <p className="  font-bold text-transparent inline-block font-mont  sm:leading-[4] leading-normal  text-center  space-y-3">
                  <span className="text-[#484859] sm:text-[56.7px] text-3xl  mb-2">The 
                  <span className="px-2 py-[2px] text-white bg-[#507ddc] rounded-[10px] [background:linear-gradient(180deg,rgb(80,125,220)_0%,rgb(99.87,189.85,255)_100%)]">
                    Messaging
                    <br />
                  </span>
                  </span>
                    
                  <span className="text-[#484859] sm:text-[56.7px] text-3xl">
                    tool to grow your local business
                  </span>
                </p>
              </div>
              <div className="md:w-[500px] w-auto h-[81px]  px-3">
                <p className="font-medium text-[#484859] text-[17.8px] text-center tracking-[0] leading-[27px]">
                  Manage all of your communication—from reviews to website
                  conversations to text marketing, payments, and more—with
                  LeadPipelyne.
                </p>
              </div>
            </div>
            <div className=" flex flex-col justify-center items-center space-y-2">
              <div className="flex justify-center">
                <button className=" sm:h-[56px] h-[45px]  px-[20px] py-[13px]  bg-[#34a951] rounded-[6px]  box-border w-fit [font-family:'Mulish-ExtraBold',Helvetica] sm:font-extrabold font-semibold text-white sm:text-[20px] text-[15px] ">
                    Start a free trial
                </button>
              </div>
              <div className="max-w-[292px] h-[27px] flex justify-center">
                <p className="[font-family:'Montserrat-Medium',Helvetica] font-normal text-[#adadad] text-[14px] tracking-[0] leading-[27px] whitespace-nowrap">
                  <span className="font-medium">
                    *No credit card required.{" "}
                  </span>
                  <span className="[font-family:'Montserrat-Bold',Helvetica] font-bold">
                    Free for 14 days.
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div></div>
          <div className="relative">
            <img src={line1} alt="line" className="hidden md:inline-block absolute right-[0px] top-[-70px]" />
          </div>
        </div>
        <div className="flex flex-row justify-center"> 
         <div> <img alt="" src={exp} /></div>
         <div>  <img alt="" src={arrow} className="mt-3 hidden md:block"/> </div>
          
        </div>
        </div>

      </section>
    </>
  );
}
