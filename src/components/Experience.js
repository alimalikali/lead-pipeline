import React from "react";
import star from "../images/Group 10.png";
import screenshot from "../images/screen-shot.png";


export default function Experience() {
  return (
    <>
      <section>
        <div className="flex flex-col space-y-16">
          {/* top */}

          <div>
            <div className="flex flex-col items-center space-y-3">
              <div>
                <img src={star} alt="star" />
              </div>

              <div>
                <h1 className="max-w-[1151px] font-bold text-[#484759] lg:text-[42px]  text-2xl  text-center tracking-[0] lg:leading-[59px] leading-8">
                  Create interactive product demo experiences
                  <br />
                  in minutes
                </h1>
              </div>
            </div>
          </div>

          {/* bottom  */}

          <div className=" flex justify-center px-5 ">
            <div className="w-[1180px] max-h-fit lg:space-y-0 space-y-8 rounded-xl bg-gradient-to-r from-[#507DDC] to-[#64BEFF] flex lg:flex-row flex-col py-10 px-8 justify-around">
              <div className="flex flex-col space-y-16 justify-around">
                <div className="flex flex-col space-y-5 items-start ">
                  <h1 className=" max-w-[265px] font-bold text-white text-[32px] tracking-[0] leading-[normal]">
                    User-driven experiences
                  </h1>
                  <p className=" max-w-[339px] font-medium text-white lg:text-[18px] text-sm tracking-[0] leading-[28px]">
                    Let users experience your product through interactive,
                    guided demos. No more pausing and rewinding, users can
                    progress at their own pace.
                  </p>
                </div>

                <button className="lg:block hidden  w-48 h-[56px] items-start gap-[10px] pl-[12px] py-[16px] relative bg-white rounded-[6px] overflow-hidden border-0 border-none  box-border">
                  <div className="relative w-fit mb-[-1.00px] [font-family:'Montserrat-Medium',Helvetica] font-extrabold text-[#5385e0] text-[20px] text-center tracking-[-0.53px] leading-[normal]">
                    Experience now
                  </div>
                </button>
              </div>
              <div className=" box-border flex flex-col justify-center space-y-8">
                <img
                  src={screenshot}
                  alt=""
                  className="lg:w-[614px] lg:h-[392px] h-[auto] w-[auto] "
                />
                <button className="lg:hidden  lg:w-[614px] w-[auto]  justify-center h-[56px] flex  gap-[10px] pl-[12px] py-[16px] relative bg-white rounded-[6px] overflow-hidden border-0 border-none  box-border">
                  <div className="relative w-fit mb-[-1.00px] [font-family:'Montserrat-Medium',Helvetica] font-extrabold text-[#5385e0] text-[20px] text-center  tracking-[-0.53px] leading-[normal]">
                    Experience now
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        
      </section>
    </>
  );
}
