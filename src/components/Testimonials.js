import React from "react";
import img1 from "../images/img-1.png";
import img2 from "../images/img-2.png";
import img3 from "../images/img-3.png";
import img4 from "../images/img-4.png";
import star from "../images/Star.png";
import profile from "../images/Profile.png";
import chart from "../images/Chart.png";
import call from "../images/Call.png";
import blueRect from "../images/logo-rectangle.png"
import rectangleTestimonal from "../images/Rectangle 323.png";
import line from '../images/Line 2.png'

// import Testimony from "./Testimony";
// import TestimonialsData from "../data/TestmionalData";

export default function Testimonials() {
  return (
    <>
      <section>
        <div className=" space-y-28 pt-20">
          <div className="relative">
            <img src={line} alt="" className="absolute top-20 -z-10"/>
          </div>
          {/* main head */}
          <div className=" px-3 ">
            <h1 className=" [font-family:'Montserrat-Bold',Helvetica] font-bold text-[#484859]  sm:text-[42px] text-2xl text-center tracking-[0] lg:leading-[59px] leading-[40px]">
              Why 100,000+ businesses like yours <br />
              love LeadPipelyne
            </h1>
          </div>
          {/* testimonal */}
          <div className=" flex justify-center pt-4 ">

          <div className="flex flex-row  snap-x snap-proximity  justify-content:start lg:space-x-5 space-x-10 px-5 overflow-x-auto no-scrollbar overflow-y-hidden  ">
            <div className="w-[271px] h-[400px] snap-center  snap-always">
              <div className="relative w-[271px] h-[280px] flex flex-col space-y-7  ">
                <div>
                  <img
                  src={rectangleTestimonal}
                  alt="rect"
                  className="absolute top-0 -z-10"
                />
                </div>
                
                <div className="pl-5 space-y-3">
                  <img src={star} alt="logo" />

                  <h1 className="[font-family:'Montserrat-Bold',Helvetica]w-[211px]  font-bold text-[#484859] text-[18px] whitespace-nowrap">
                    Get more reviews
                  </h1>
                </div>
                <div className="pl-5 space-y-4">
                <p className="w-[215px] h-[69px] [font-family:'Montserrat-Medium',Helvetica] font-medium text-neutral-500 text-[14px] tracking-[0] leading-[23px]">
                  “We had 28 Google reviews…And now we’re over 600. it’s easy
                  for the staff.”
                </p>

                <p className=" w-[211px]  [font-family:'Montserrat-Regular',Helvetica] font-normal text-neutral-500 text-[12px] ">
                  <span className="[font-family:'Montserrat-Regular',Helvetica] font-normal text-neutral-500 text-[12px] ">
                    Pura Vida Body and Mind Spa
                  </span>
                  <span className="[font-family:'Montserrat-Bold',Helvetica] font-bold">
                    {" "}
                    Julie Davis, Owner
                  </span>
                </p>
                </div>

               
              </div>

              <div className="pl-5" >
                <div className="relative top-[-20px]" >
                  <img alt="rect" src={blueRect} className="" />
                  <img alt="rect" src={img1}  className="absolute top-3 left-3"/>
                </div>

              </div>
            </div>

            <div className="w-[271px] h-[400px] snap-center  snap-always">
              <div className="relative w-[271px] h-[280px] flex flex-col space-y-7  ">
                <div>
                  <img
                  src={rectangleTestimonal}
                  alt="rect"
                  className="absolute top-0 -z-10"
                />
                </div>
                
                <div className="pl-5 space-y-3">
                  <img src={profile} alt="logo" />

                  <h1 className="[font-family:'Montserrat-Bold',Helvetica]w-[211px]  font-bold text-[#484859] text-[18px] whitespace-nowrap">
                    Get more reviews
                  </h1>
                </div>
                <div className="pl-5 space-y-4">
                <p className="w-[215px] h-[69px] [font-family:'Montserrat-Medium',Helvetica] font-medium text-neutral-500 text-[14px] tracking-[0] leading-[23px]">
                  “We had 28 Google reviews…And now we’re over 600. it’s easy
                  for the staff.”
                </p>

                <p className=" w-[211px]  [font-family:'Montserrat-Regular',Helvetica] font-normal text-neutral-500 text-[12px] ">
                  <span className="[font-family:'Montserrat-Regular',Helvetica] font-normal text-neutral-500 text-[12px] ">
                    Pura Vida Body and Mind Spa
                  </span>
                  <span className="[font-family:'Montserrat-Bold',Helvetica] font-bold">
                    {" "}
                    Julie Davis, Owner
                  </span>
                </p>
                </div>

               
              </div>

              <div className="pl-5" >
                <div className="relative top-[-20px]" >
                  <img alt="rect" src={blueRect} className="" />
                  <img alt="rect" src={img2}  className="absolute top-3 left-3"/>
                </div>

              </div>
            </div>

            <div className="w-[271px] h-[400px] snap-center snap-always">
              <div className="relative w-[271px] h-[280px] flex flex-col space-y-7  ">
                <div>
                  <img
                  src={rectangleTestimonal}
                  alt="rect"
                  className="absolute top-0 -z-10"
                />
                </div>
                
                <div className="pl-5 space-y-3">
                  <img src={call} alt="logo" />

                  <h1 className="[font-family:'Montserrat-Bold',Helvetica]w-[211px]  font-bold text-[#484859] text-[18px] whitespace-nowrap">
                    Get more reviews
                  </h1>
                </div>
                <div className="pl-5 space-y-4">
                <p className="w-[215px] h-[69px] [font-family:'Montserrat-Medium',Helvetica] font-medium text-neutral-500 text-[14px] tracking-[0] leading-[23px]">
                  “We had 28 Google reviews…And now we’re over 600. it’s easy
                  for the staff.”
                </p>

                <p className=" w-[211px]  [font-family:'Montserrat-Regular',Helvetica] font-normal text-neutral-500 text-[12px] ">
                  <span className="[font-family:'Montserrat-Regular',Helvetica] font-normal text-neutral-500 text-[12px] ">
                    Pura Vida Body and Mind Spa
                  </span>
                  <span className="[font-family:'Montserrat-Bold',Helvetica] font-bold">
                    {" "}
                    Julie Davis, Owner
                  </span>
                </p>
                </div>

               
              </div>

              <div className="pl-5" >
                <div className="relative top-[-20px]" >
                  <img alt="rect" src={blueRect} className="" />
                  <img alt="rect" src={img3}  className="absolute top-3 left-3"/>
                </div>

              </div>
            </div>


            <div className="w-[271px] h-[400px] snap-center snap-always">
              <div className="relative w-[271px] h-[280px] flex flex-col space-y-7  ">
                <div>
                  <img
                  src={rectangleTestimonal}
                  alt="rect"
                  className="absolute top-0 -z-10"
                />
                </div>
                
                <div className="pl-5 space-y-3">
                  <img src={chart} alt="logo" />

                  <h1 className="[font-family:'Montserrat-Bold',Helvetica]w-[211px]  font-bold text-[#484859] text-[18px] whitespace-nowrap">
                    Get more reviews
                  </h1>
                </div>
                <div className="pl-5 space-y-4">
                <p className="w-[215px] h-[69px] [font-family:'Montserrat-Medium',Helvetica] font-medium text-neutral-500 text-[14px] tracking-[0] leading-[23px]">
                  “We had 28 Google reviews…And now we’re over 600. it’s easy
                  for the staff.”
                </p>

                <p className=" w-[211px]  [font-family:'Montserrat-Regular',Helvetica] font-normal text-neutral-500 text-[12px] ">
                  <span className="[font-family:'Montserrat-Regular',Helvetica] font-normal text-neutral-500 text-[12px] ">
                    Pura Vida Body and Mind Spa
                  </span>
                  <span className="[font-family:'Montserrat-Bold',Helvetica] font-bold">
                    {" "}
                    Julie Davis, Owner
                  </span>
                </p>
                </div>

               
              </div>

              <div className="pl-5" >
                <div className="relative top-[-20px]" >
                  <img alt="rect" src={blueRect} className="" />
                  <img alt="rect" src={img4}  className="absolute top-3 left-3"/>
                </div>

              </div>
            </div>

             {/* {TestimonialsData.map((test) => (
        <Testimony
        id={test.id}
          img={test.title}
          heading={test.views}
          paragraph={test.time}
          footer={test.channel}
          user={test.verified}
          back={test.id}
        >
        </Testimony>
        ))} */}




            
          </div>
          </div>

        </div>
      </section>
    </>
  );
}
