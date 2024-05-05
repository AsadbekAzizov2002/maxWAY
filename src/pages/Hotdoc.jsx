import React from "react";



import img17 from "./../assets/img17.png";


const Hotdoc = () => {
  return (
    <div>
      <main>
        <div>
          <div>
            <div>
              <h1 className=" px-5 mt-[69px] font-bold text-2xl">🌭Hot-Dog</h1>
              <div className=" gap-10 px-5 grid grid-cols-2 md:grid-cols-4 ">
                <div className=" w-[304px] h-[379px]">
                  <img className=" pt-3 px-3" src={img17} alt="" />
                  <h2 className=" px-4 pt-3 font-semibold">Hot Dog</h2>
                  <p className=" px-4 w-[342px] mt-[7px]">
                    Hot-dog bulochkasi, Kanada sosiskasi,
                  </p>
                  <p className=" px-4 w-[]">tuzlangan bodring...</p>
                  <div className="px-4  mt-3 flex gap-12 items-center">
                    <span className=" gap-1 flex">
                      <h2 className=" font-bold ">12 000 </h2>
                      <h3>so'm</h3>
                    </span>
                    <button className=" bg-[#51267D] rounded-3xl  w-[106px] h-10 text-white">
                      Qo'shish
                    </button>
                  </div>
                </div>
                <div className=" w-[304px] h-[379px]">
                  <img className=" pt-3 px-3" src={img17} alt="" />
                  <h2 className=" px-4 pt-3 font-semibold">King Dog</h2>
                  <p className=" px-4 w-[342px] mt-[7px]">
                    Hot-dog bulochkasi, 2 ta kanada
                  </p>
                  <p className=" px-4 w-[]">sosiskasi, tuzlangan bo...</p>
                  <div className="px-4  mt-3 flex gap-12 items-center">
                    <span className=" gap-1 flex">
                      <h2 className=" font-bold ">20 000 </h2>
                      <h3>so'm</h3>
                    </span>
                    <button className=" bg-[#51267D] rounded-3xl  w-[106px] h-10 text-white">
                      Qo'shish
                    </button>
                  </div>
                </div>
                <div className=" w-[304px] h-[379px]">
                  <img className=" pt-3 px-3" src={img17} alt="" />
                  <h2 className=" px-4 pt-3 font-semibold">Chiz dog</h2>
                  <p className=" px-4 w-[342px] mt-[7px]">
                    Hot-dog bulochkasi, kanada sosiskasi,
                  </p>
                  <p className=" px-4 w-[]"> tuzlangan bo...</p>
                  <div className="px-4  mt-3 flex gap-12 items-center">
                    <span className=" gap-1 flex">
                      <h2 className=" font-bold ">18 000 </h2>
                      <h3>so'm</h3>
                    </span>
                    <button className=" bg-[#51267D] rounded-3xl  w-[106px] h-10 text-white">
                      Qo'shish
                    </button>
                  </div>
                </div>
                <div className=" w-[304px] h-[379px]">
                  <img className=" pt-3 px-3" src={img17} alt="" />
                  <h2 className=" px-4 pt-3 font-semibold">Longer</h2>
                  <p className=" px-4 w-[342px] mt-[7px]">
                    Hot-dog bulochka,ketchup, mayonez,
                  </p>
                  <p className=" px-4 w-[]">strips 1 dona, tuzl...</p>
                  <div className="px-4  mt-3 flex gap-12 items-center">
                    <span className=" gap-1 flex">
                      <h2 className=" font-bold ">15 000 </h2>
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
};

export default Hotdoc;
