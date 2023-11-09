
import React from 'react'
import TestmionalData from '../data/TestmionalData'
import rectangleTestimonal from '../images/logo-rectangle.png'
import logorect from '../images/Rectangle 323.png'



export default function Testimony() {
  return (
    <>
     <div className="w-[271px] h-[383px] ">
              <div className="relative w-[271px] h-[280px] flex flex-col space-y-7  ">
                <div>
                  <img
                  src={rectangleTestimonal}
                  alt="rect"
                  className="absolute top-0 -z-10"
                />
                </div>
                
                <div className="pl-5 space-y-3">
                  <img src={TestmionalData.img} alt="logo" />

                  <h1 className="[font-family:'Montserrat-Bold',Helvetica]w-[211px]  font-bold text-[#484859] text-[18px] whitespace-nowrap">
                    {TestmionalData.head}
                  </h1>
                </div>
                <div className="pl-5 space-y-4">
                <p className="w-[215px] h-[69px] [font-family:'Montserrat-Medium',Helvetica] font-medium text-neutral-500 text-[14px] tracking-[0] leading-[23px]">
                 {TestmionalData.paragraph}
                </p>

                <p className=" w-[211px]  [font-family:'Montserrat-Regular',Helvetica] font-normal text-neutral-500 text-[12px] ">
                  <span className="[font-family:'Montserrat-Regular',Helvetica] font-normal text-neutral-500 text-[12px] ">
                    {TestmionalData.footer}
                  </span>
                  
                </p>
                </div>

               
              </div>

              <div className="pl-5" >
                <div className="relative top-[-20px]" >
                  <img alt="rect" src={logorect} className="" />
                  <img alt="rect" src={TestmionalData.user}  className="absolute top-3 left-3"/>
                </div>

              </div>
            </div>

    
    
    </>
  )
}
