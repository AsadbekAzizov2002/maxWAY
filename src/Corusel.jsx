import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

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
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className=" px-10">
      <Slider {...settings}>
        <div>
          <div className=" px-10 mt-5">
            <div className=" flex justify-center items-center">
              <img
                className=" w-full rounded-3xl"
                src="https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2Fceefc9aa-89e1-4464-9415-7cabc48a65d1&w=1200&q=75"
              />
            </div>
          </div>
        </div>
        <div>
          <div className=" px-10 mt-5">
            <div className=" flex justify-center items-center">
              <img
                className=" w-full rounded-3xl"
                src="https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F2edd9920-1b42-4e3f-9491-a2359a08d334&w=1200&q=75"
              />
            </div>
          </div>
        </div>
        <div>
          <div className=" px-10 mt-5">
            <div className=" flex justify-center items-center">
              <img
                className=" w-full rounded-3xl"
                src="https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2Fc548b8fc-3f0d-4180-ad2d-b0419c040101&w=1200&q=75"
              />
            </div>
          </div>
        </div>
        <div>
          <div className=" px-10 mt-5">
            <div className=" flex justify-center items-center">
              <img
                className=" w-full rounded-3xl"
                src="https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2Feedc6ad0-1c3c-40fb-a3f2-15b807b7ed30&w=1200&q=75"
              />
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
