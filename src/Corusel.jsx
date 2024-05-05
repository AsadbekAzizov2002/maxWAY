import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import car from "./assets/car.png";
import clap from "./assets/clap.png";
import Menyu from "./Menyu";

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
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <div className=" bg-slate-500 px-10">
        <Slider {...settings}>
          <div>
            <div className=" px-10 pt-5">
              <div className=" w-[380px] h-[170px] md:h-[170px] md:w-[740px] lg:w-[986px] lg:h-[490px] xl:w-[1410px] xl:h-[600px]">
                <div className="px-5">
                  <img
                    className=" pb-5 h-[160px] w-[360px] md:w-[730px] md:h-[160px] lg:w-[976px] lg:h-[480px] xl:w-[1405px] xl:h-[580px]"
                    src={car}
                  />
                  {/* 580 1400 */}
                </div>
              </div>
            </div>{" "}
          </div>
          <div>
            <div className=" px-10 pt-5">
              <div className=" ">
                <div className="  mx-auto">
                  <img
                    className=" pb-5 h-[160px] w-[360px] md:w-[730px] md:h-[160px] lg:w-[976px] lg:h-[480px] xl:w-[1405px] xl:h-[580px]"
                    src={clap}
                  />
                </div>
              </div>
            </div>{" "}
          </div>
        </Slider>
      </div>
        <Menyu />
    </div>
  );
}
