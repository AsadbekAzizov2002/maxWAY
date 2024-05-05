import React from 'react'

import img14 from "./../assets/img14.png";

const Burger = () => {
  return (
    <div>
      <main>
        <div>
          <div>
            <div>
              <h1 className=" px-5 mt-[69px] font-bold text-2xl">🍔Burger</h1>
              <div className=" gap-10 px-5 grid grid-cols-2 md:grid-cols-3  ">
                <div className=" w-[304px] h-[379px]">
                  <img className=" pt-3 px-3" src={img14} alt="" />
                  <h2 className=" px-4 pt-3 font-semibold">Gamburger</h2>
                  <p className=" px-4 w-[342px] mt-[7px]">
                    Burger bulochkasi, tuzlangan bodring,
                  </p>
                  <p className=" px-4 w-[]">pomidor, go'shtli...</p>
                  <div className="px-4  mt-3 flex gap-12 items-center">
                    <span className=" gap-1 flex">
                      <h2 className=" font-bold ">25 000 </h2>
                      <h3>so'm</h3>
                    </span>
                    <button className=" bg-[#51267D] rounded-3xl  w-[106px] h-10 text-white">
                      Qo'shish
                    </button>
                  </div>
                </div>
                <div className=" w-[304px] h-[379px]">
                  <img className=" pt-3 px-3" src={img14} alt="" />
                  <h2 className=" px-4 pt-3 font-semibold">Chizburger</h2>
                  <p className=" px-4 w-[342px] mt-[7px]">
                    Burger bulochkasi, tuzlangan bodring,
                  </p>
                  <p className=" px-4 w-[]">pomidor, go'shtli..</p>
                  <div className="px-4  mt-3 flex gap-12 items-center">
                    <span className=" gap-1 flex">
                      <h2 className=" font-bold ">28 000 </h2>
                      <h3>so'm</h3>
                    </span>
                    <button className=" bg-[#51267D] rounded-3xl  w-[106px] h-10 text-white">
                      Qo'shish
                    </button>
                  </div>
                </div>{" "}
                <div className=" w-[304px] h-[379px]">
                  <img className=" pt-3 px-3" src={img14} alt="" />
                  <h2 className=" px-4 pt-3 font-semibold">Bigburger</h2>
                  <p className=" px-4 w-[342px] mt-[7px]">
                    Burger bulochkasi, tuzlangan bodring,
                  </p>
                  <p className=" px-4 w-[]">pomidor, 2 ta go'...</p>
                  <div className="px-4  mt-3 flex gap-12 items-center">
                    <span className=" gap-1 flex">
                      <h2 className=" font-bold ">40 000 </h2>
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

export default Burger