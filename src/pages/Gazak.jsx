import React from 'react'

import img18 from "./../assets/img18.png";
import img19 from "./../assets/img19.png";
import img20 from "./../assets/img20.png";





const Gazak = () => {
  return (
    <div>
      <main>
        <div>
          <div>
            <div>
              <h1 className=" px-5 mt-[69px] font-bold text-2xl">🍟Gazaklar</h1>
              <div className=" gap-10 px-5 grid grid-cols-2 md:grid-cols-4">
                <div className=" w-[304px] h-[379px]">
                  <img className=" pt-3 px-3" src="" alt="" />
                  <h2 className=" px-4 pt-3 font-semibold">Fri kartoshkasi</h2>

                  <div className="px-4  mt-3 flex gap-12 items-center">
                    <span className=" gap-1 flex">
                      <h2 className=" font-bold ">9 000 </h2>
                      <h3>so'm</h3>
                    </span>
                    <button className=" bg-[#51267D] rounded-3xl  w-[106px] h-10 text-white">
                      Qo'shish
                    </button>
                  </div>
                </div>
                <div className=" w-[304px] h-[379px]">
                  <img className=" pt-3 px-3" src={img18} alt="" />
                  <h2 className=" px-4 pt-3 font-semibold">Kraft packet</h2>

                  <div className="px-4  mt-3 flex gap-12 items-center">
                    <span className=" gap-1 flex">
                      <h2 className=" font-bold ">2 000 </h2>
                      <h3>so'm</h3>
                    </span>
                    <button className=" bg-[#51267D] rounded-3xl  w-[106px] h-10 text-white">
                      Qo'shish
                    </button>
                  </div>
                </div>
                <div className=" w-[304px] h-[379px]">
                  <img className=" pt-3 px-3" src={img19} alt="" />
                  <h2 className=" px-4 pt-3 font-semibold">BOX</h2>
                  <p className=" px-4 w-[342px] mt-[7px]">
                    Strips (2 dona), kartoshka fri (80 gr),
                  </p>
                  <p className=" px-4 w-[]">naggetslar 4 d...</p>
                  <div className="px-4  mt-3 flex gap-12 items-center">
                    <span className=" gap-1 flex">
                      <h2 className=" font-bold ">22 000 </h2>
                      <h3>so'm</h3>
                    </span>
                    <button className=" bg-[#51267D] rounded-3xl  w-[106px] h-10 text-white">
                      Qo'shish
                    </button>
                  </div>
                </div>
                <div className=" w-[304px] h-[379px]">
                  <img className=" pt-3 px-3" src={img20} alt="" />
                  <h2 className=" px-4 pt-3 font-semibold">Strips</h2>
                 
                  <div className="px-4  mt-3 flex gap-12 items-center">
                    <span className=" gap-1 flex">
                      <h2 className=" font-bold ">1 000 </h2>
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

export default Gazak