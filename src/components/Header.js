import React, { useState } from "react";
import logo from "../images/logomain.png";
import hamBurger from "../images/hamburger.png";

export default function Header() {
  const initialshow = (false);
  const [show, setShow] = useState(initialshow);

  return (
    <>
      <div className="w-full h-[100px]">
        <div className="w-full flex flex-row justify-around items-center h-[100px]">
          {show ? (
            <div className="absolute top-20 w-full bg-gradient-to-r from-[#507DDC] to-[#64BEFF] lg:hidden flex items-center flex-col z-10 space-y-7 pb-10">
              <div className=" ">
                <ul className="flex flex-col justify-between items-center  space-y-[40px]">
                  <li></li>
                  <li className="font-normal text-white hover:text-black  text-[15.4px] tracking-[o] leading-[normal]">
                    Product
                  </li>
                  <li className="font-normal  text-white hover:text-black  text-[15.4px] tracking-[o] leading-[normal]">
                    Solutions
                  </li>
                  <li className="font-normal  text-white hover:text-black  text-[15.4px] tracking-[o] leading-[normal]">
                    Pricing
                  </li>
                  <li className="font-normal  text-white hover:text-black  text-[15.4px] tracking-[o] leading-[normal]">
                    Resources
                  </li>
                  <li className="font-normal  text-white  hover:text-black text-[15.4px] tracking-[o] leading-[normal]">
                    Customer Support
                  </li>
                </ul>
              </div>
              {/* sign in */}

              <button className="   gap-[10px] px-[20px] py-[16px] rounded-[6px] overflow-hidden border-2 border-solid border-white hover:border-black   box-border">
                <div className="w-fit font-extrabold  text-blue-950 hover:text-white text-[20px] text-center">
                  Sign In
                </div>
              </button>
            </div>
          ) : null}

          {/* logo */}

          <div>
            <div className="w-4 ">
              <img
                alt=" burger "
                src={hamBurger}
                className="absolute left-7 top-8 lg:hidden block"
                onClick={() => setShow(!show)}
              />
            </div>

            <img src={logo} alt="logo" />
          </div>

          {/* list */}

          <div className="w-[562px] h-[19px] lg:block hidden ">
            <ul className="flex flex-row justify-between  space-x-[20px]">
              <li className="font-normal text-[#484859] text-[15.4px] tracking-[o] leading-[normal]">
                Product
              </li>
              <li className="font-normal text-[#484859] text-[15.4px] tracking-[o] leading-[normal]">
                Solutions
              </li>
              <li className="font-normal text-[#484859] text-[15.4px] tracking-[o] leading-[normal]">
                Pricing
              </li>
              <li className="font-normal text-[#484859] text-[15.4px] tracking-[o] leading-[normal]">
                Resources
              </li>
              <li className="font-normal text-[#484859] text-[15.4px] tracking-[o] leading-[normal]">
                Customer Support
              </li>
            </ul>
          </div>
          {/* sign in */}

          <button className="  lg:block hidden  gap-[10px] px-[20px] py-[16px] rounded-[6px] overflow-hidden border-2 border-solid border-[#507ddc]  box-border">
            <div className="w-fit font-extrabold text-[#507ddc] text-[20px] text-center">
              Sign In
            </div>
          </button>
        </div>
      </div>
    </>
  );
}
