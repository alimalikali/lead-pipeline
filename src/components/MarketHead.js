import React from 'react'
import star from "../images/Group 10.png";

export default function MarketHead() {
  return (
    <>
    <div className="flex flex-col justify-center items-center px-3 pt-32 pb-8">
            <div>
              <img src={star} alt="bla bla bla" />
            </div>
            <div >
              <p className=" [font-family:'Montserrat-Bold',Helvetica] font-bold text-[#484759] sm:text-[42px] text-2xl leading-relaxed text-center ">
                The marketing and communication platform for
                <br />
                your Businesses
              </p>
            </div>
          </div>
    </>
  )
}
