import React from "react";
import left1 from "../images/r2.png";
import left2 from "../images/r4.png";
import Cover from "../images/Cover.png";
import tstar from "../images/Ticket-Star.png";
import screenshot1 from "../images/Screenshot-1.png";
import screenshot2 from "../images/Screenshot-2.png";
import screenshot3 from "../images/screen-shot.png";

export default function Review({ reviews, left }) {
  const positionVar = "absolute bottom-[-40px] left-[160px] lg:block hidden ";
  const orderVarTop = "lg:order-2 order-1" ;
  const orderVarBtm =   "relative lg:order-1 order-2";
  const imageUrl = left === 1 ? left1  : left === 2 ? left2 : screenshot2;
  const position = left === 1 ?  positionVar  : left === 2 ? positionVar : "absolute bottom-[20px] left-[-100px] lg:block hidden ";
  const orderTop = left === 1 ? orderVarTop  : left === 2 ? orderVarTop  : 'relative';
  const orderBtm = left === 1 ? orderVarBtm  : left === 2 ? orderVarBtm : 'relative';
  return (
    <>
      <section className="md:mb-40 mb-20">
        <div className="">
          <div className="flex lg:flex-row flex-col items-center lg:px-12 px-6">
            <div className={`${orderTop}`}>
              <div className="flex flex-col justify-center">
                <img src={Cover} alt="bla bla bla" className="  -z-10 " />
                <img src={Cover} alt="bla bla bla" className=" -z-10 " />
                <div className="flex flex-row lg:space-x-8 space-x-3 absolute pl-10">
                  <div className="flex justify-center  lg:items-center items-start">
                    <img src={tstar} alt="aa" />
                  </div>
                  <div className="sm:space-y-2 xsm:space-y-0">
                    <div className="[font-family:'Montserrat-Bold',Helvetica] font-bold text-[#484859] sm:text-[32px] text-lg">
                      {reviews}
                    </div>
                    <p className="[font-family:'Montserrat-Medium',Helvetica] font-medium text-[#adadad] sm:text-[22px] text-sm">
                      Drive more reviews and website traffic.
                    </p>
                    <div className=" [font-family:'Montserrat-Bold',Helvetica] font-bold text-[#507ddc] sm:text-[16px] text-xs ">
                      Learn More
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={`${orderBtm}`}>
              <div className="block lg:hidden  px-10">
                <img src={screenshot3} alt="kl" className="w-[500px]" />
              </div>

              <div className="relative lg:block hidden px-10">
                <img src={screenshot1} alt="kl" />
                <div className={`${position} `}>
                  <img src={imageUrl} alt="kl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
