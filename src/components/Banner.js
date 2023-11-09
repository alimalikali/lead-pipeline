import React from "react";
import MainBanner from "../images/Frame 5.png";
import background from "../images/Rectangle 322.png";

export default function Banner() {
  return (
    <>
      <section>
        <div className="relative ">
          <div className="flex justify-center  px-3">
            <img alt="banner" src={MainBanner}  />
          </div>
          <img src={background} alt="back" className="absolute top-[100px] -z-10" />
          <img src={background} alt="back" className="absolute top-[250px] -z-20" />
          <img src={background} alt="back" className="absolute top-[400px] -z-30" />


        </div>
      </section>
    </>
  );
}
