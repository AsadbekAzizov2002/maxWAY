import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import car from "./assets/car.png";
import clap from "./assets/clap.png";

<>
  <link
    rel="stylesheet"
    type="text/css"
    charset="UTF-8"
    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
  />
  <link
    rel="stylesheet"
    type="text/css"
    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
  />
</>;

export default function Corusel() {
  var settings = {
    dots: true,
    infinite: true,
    default: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className=" bg-slate-500 px-10">
      <Slider {...settings}>
        <div>
          <div className=" px-10 pt-5">
            <div className=" flex justify-between items-center">
             
              <div className=" flex justify-end">
                <img className=" h-[580px] w-[1400px]" src={car} />
              </div>
            </div>
          </div>{" "}
        </div>
        <div>
          <div className=" px-10 pt-5">
            <div className=" flex justify-between items-center">
             
              <div className=" flex justify-end">
                <img className=" h-[580px] w-[1400px]" src={clap} />
              </div>
            </div>
          </div>{" "}
        </div>
       
        
      </Slider>
    </div>
  );
}
