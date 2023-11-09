import React from "react";
import pic from "../images/pic1.png";
import tweet1 from "../images/tweet1.png";
import tweet2 from "../images/tweet2.png";
import tweet3 from "../images/tweet3.png";
import tweet4 from "../images/tweet5.png";

export default function Community() {
  return (
    <>
      <div className="lg:px-10 px-5 pt-20">
        <div className="flex lg:flex-row flex-col lg:items-baseline items-center lg:space-x-10 space-x-0 space-y-24 lg:space-y-0">
          {/* left */}
          <div className="">
            <div className="flex flex-col lg:px-7 px-7 lg:py-0 py-5 lg:space-y-0 space-y-10 lg:justify-around justify-normal  bg-[#F2FCEF] rounded-2xl max-w-[450px] lg:h-[560px] h-auto">
              <div className="flex flex-col space-y-5 lg:items-start items-center">
                <h1 className=" max-w-[265px] font-bold text-[#484859] text-[32px] ">
                  Click to create
                </h1>
                <p className=" max-w-[339px]  font-medium text-[#adbac9] lg:text-[18px] text-sm leading-7">
                  Adjust demo flows to include new features, or based on what
                  you discover in Analytics. All edits will automatically
                  reflect in published Arcades.
                </p>
              </div>
              <div>
                <img src={pic} alt="sd" className="w-[350px] max-h-[270px]" />
              </div>
            </div>
          </div>
          {/* right */}
          <div className="max-w-[650px] space-y-7 max-h-[560px] flex flex-col justify-around">
            <div>
              <p className=" max-w-[601px] h-[78px] font-bold text-[#484859] sm:text-[32px] text-[18px]  tracking-[0] leading-[normal]">
                See how the community is reacting to LeadPipelyne
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-1">
              <img src={tweet1} alt="sd" className="w-full" />
              <img src={tweet4} alt="sd" className="w-full" />
              <img src={tweet2} alt="sd" className="w-full" />
              <img src={tweet3} alt="sd" className="sm:block hidden w-full" />
              <img src={tweet3} alt="sd" className="sm:block hidden w-full" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
