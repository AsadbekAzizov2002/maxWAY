import React from "react";
import img2 from "./../assets/img2.png";
import img3 from "./../assets/img3.png";
import img4 from "./../assets/img4.png";
import img5 from "./../assets/img5.png";
import img6 from "./../assets/img6.png";
import img7 from "./../assets/img7.png";

const MaxiBox = () => {
  return (
    <div>
      <main className=" px-5">
        <div>
          <div className=" mt-[53px]">
            <h1 className=" font-bold text-2xl">🍟🍔🥤Maxi BOX</h1>
            <div className=" grid grid-cols-2 md:grid-cols-4">
              <div className=" w-[304px] h-[379px]">
                <img className=" pt-3 px-3" src={img2} alt="" />
                <h2 className=" px-4 pt-3 font-semibold">Maxi BOX An'anaviy</h2>
                <p className=" px-4 w-[342px] mt-[7px]">
                  Original sendvich, kartoshka fri, 0,4 l
                </p>
                <p className=" px-4 w-[]">coca cola, tanl...</p>
                <div className="px-4 mt-3 flex gap-12 items-center">
                  <span className=" gap-1 flex">
                    <h2 className=" font-bold ">42 000 </h2>
                    <h3>so'm</h3>
                  </span>
                  <button className=" bg-[#51267D] rounded-3xl  w-[106px] h-10 text-white">
                    Qo'shish
                  </button>
                </div>
              </div>{" "}
              <div className=" w-[304px] h-[379px]">
                <img className=" pt-3 px-3" src={img3} alt="" />
                <h2 className=" px-4 pt-3 font-semibold">Maxi BOX Taniqli</h2>
                <p className=" px-4 w-[342px] mt-[7px]">
                  Original sendvich, kartoshka fri, 0,4 l
                </p>
                <p className=" px-4 w-[]">coca cola, tanlas...</p>
                <div className="px-4  mt-3 flex gap-12 items-center">
                  <span className=" gap-1 flex">
                    <h2 className=" font-bold ">42 000 </h2>
                    <h3>so'm</h3>
                  </span>
                  <button className=" bg-[#51267D] rounded-3xl  w-[106px] h-10 text-white">
                    Qo'shish
                  </button>
                </div>
              </div>{" "}
              <div className=" w-[304px] h-[379px]">
                <img className=" pt-3 px-3" src={img4} alt="" />
                <h2 className=" px-4 pt-3 font-semibold">Maxi BOX Retro</h2>
                <p className=" px-4 w-[342px] mt-[7px]">
                  Shaurma Original, kartoshka fri, 0,4 l{" "}
                </p>
                <p className=" px-4 w-[]">coca cola , tanl...</p>
                <div className="px-4  mt-3 flex gap-12 items-center">
                  <span className=" gap-1 flex">
                    <h2 className=" font-bold ">42 000 </h2>
                    <h3>so'm</h3>
                  </span>
                  <button className=" bg-[#51267D] rounded-3xl  w-[106px] h-10 text-white">
                    Qo'shish
                  </button>
                </div>
              </div>{" "}
              <div className=" w-[304px] h-[379px]">
                <img className=" pt-3 px-3" src={img5} alt="" />
                <h2 className=" px-4 pt-3 font-semibold">Max BOX German</h2>
                <p className=" px-4 w-[342px] mt-[7px]">
                  Herman Donar , kartoshka fri, 0,4 l
                </p>
                <p className=" px-4 w-[]">coca cola, tanlash ...</p>
                <div className="px-4  mt-3 flex gap-12 items-center">
                  <span className=" gap-1 flex">
                    <h2 className=" font-bold ">42 000 </h2>
                    <h3>so'm</h3>
                  </span>
                  <button className=" bg-[#51267D] rounded-3xl  w-[106px] h-10 text-white">
                    Qo'shish
                  </button>
                </div>
              </div>{" "}
              <div className=" w-[304px] h-[379px]">
                <img className=" pt-3 px-3" src={img6} alt="" />
                <h2 className=" px-4 pt-3 font-semibold">Maxi BOX Trend</h2>
                <p className=" px-4 w-[342px] mt-[7px]">
                  Gamburger, kartoshka fri, 0,4 l coca{" "}
                </p>
                <p className=" px-4 w-[]">cola, tanlash uch...</p>
                <div className="px-4  mt-3 flex gap-12 items-center">
                  <span className=" gap-1 flex">
                    <h2 className=" font-bold ">42 000 </h2>
                    <h3>so'm</h3>
                  </span>
                  <button className=" bg-[#51267D] rounded-3xl  w-[106px] h-10 text-white">
                    Qo'shish
                  </button>
                </div>
              </div>{" "}
              <div className=" w-[304px] h-[379px]">
                <img className=" pt-3 px-3" src={img7} alt="" />
                <h2 className=" px-4 pt-3 font-semibold">Mini BOX</h2>
                <p className=" px-4 w-[342px] mt-[7px]">
                  Longer, kartoshka fri, coca-cola 0,3,{" "}
                </p>
                <p className=" px-4 w-[]">tanlovga ko'ra so...</p>
                <div className="px-4  mt-3 flex gap-12 items-center">
                  <span className=" gap-1 flex">
                    <h2 className=" font-bold ">42 000 </h2>
                    <h3>so'm</h3>
                  </span>
                  <button className=" bg-[#51267D] rounded-3xl  w-[106px] h-10 text-white">
                    Qo'shish
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MaxiBox;
