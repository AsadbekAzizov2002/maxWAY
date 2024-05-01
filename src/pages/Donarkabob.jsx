import React from 'react'

import img15 from "./../assets/img15.png";
import img16 from "./../assets/img16.png";



const Donarkabob = () => {
  return (
    <div>
      <main>
        <div>
          <div>
            <div>
              <h1 className=" px-5 mt-[69px] font-bold text-2xl">
                🍱Donar kebab
              </h1>
              <div className=" gap-10 px-5 flex  ">
                <div className=" w-[304px] h-[379px]">
                  <img className=" pt-3 px-3" src={img15} alt="" />
                  <h2 className=" px-4 pt-3 font-semibold">Donar kebab</h2>
                  <p className=" px-4 w-[342px] mt-[7px]">
                    Mol go'shti donari-go'sht, makkajo'xori
                  </p>
                  <p className=" px-4 w-[]">bilan guruch, k...</p>
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
                <div className=" w-[304px] h-[379px]">
                  <img className=" pt-3 px-3" src={img15} alt="" />
                  <h2 className=" px-4 pt-3 font-semibold">Donar Box</h2>
                  <p className=" px-4 w-[342px] mt-[7px]">
                    Mol go'shti donari-go'sht, kartoshka
                  </p>
                  <p className=" px-4 w-[]">fri, guruch, ranch...</p>
                  <div className="px-4  mt-3 flex gap-12 items-center">
                    <span className=" gap-1 flex">
                      <h2 className=" font-bold ">37 000 </h2>
                      <h3>so'm</h3>
                    </span>
                    <button className=" bg-[#51267D] rounded-3xl  w-[106px] h-10 text-white">
                      Qo'shish
                    </button>
                  </div>
                </div>{" "}
                <div className=" w-[304px] h-[379px]">
                  <img className=" pt-3 px-3" src={img16} alt="" />
                  <h2 className=" px-4 pt-3 font-semibold">Non</h2>
                  <p className=" px-4 w-[342px] mt-[7px]">Yumshoq bulochka </p>
                  <p className=" px-4 w-[]"></p>
                  <div className="px-4  mt-3 flex gap-12 items-center">
                    <span className=" gap-1 flex">
                      <h2 className=" font-bold ">3 000 </h2>
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
        </div>
      </main>
    </div>
  );
}

export default Donarkabob