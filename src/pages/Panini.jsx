import React from "react";

import img13 from "./../assets/img12.png";




const Panini = () => {
  return (
    <div>
      <main>
        <div>
          <div>
            <div>
              <h1 className=" px-5 mt-[69px] font-bold text-2xl">🫔Panini</h1>
              <div className=" gap-10 px-5 flex  ">
                <div className=" w-[304px] h-[379px]">
                  <img className=" pt-3 px-3" src={img13} alt="" />
                  <h2 className=" px-4 pt-3 font-semibold">Panini</h2>
                  <p className=" px-4 w-[342px] mt-[7px]">
                    Bulochka, mol go'shti-donar, pomidor,
                  </p>
                  <p className=" px-4 w-[]">tuzlangan bodring...</p>
                  <div className="px-4  mt-3 flex gap-12 items-center">
                    <span className=" gap-1 flex">
                      <h2 className=" font-bold ">30 000 </h2>
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

export default Panini