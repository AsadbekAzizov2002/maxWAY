import React from "react";
import img1 from "./../assets/img1.png";

const Aksiya = () => {
  return (
    <div>
      <main>
        <div className=" mt-[46px] pl-5">
          <h2 className=" font-bold text-2xl mb-1">🎉 Aksiya 2+1</h2>
          <div>
            <img src={img1} alt="" />
            <h2 className=" font-semibold mt-3 mb-[7px]">Sendvich 2+1</h2>
            <p className=" w-[351px]">Narx 2ta maxsulot uchun ko'rsatilgan-</p>
            <p>uchinchi mahsulot ...</p>
            <div className=" mt-3 flex gap-12 items-center">
              <span className=" gap-1 flex">
                <h2 className=" font-bold ">60 000 </h2>
                <h3>so'm</h3>
              </span>
              <button className=" bg-[#51267D] rounded-3xl  w-[106px] h-10 text-white"> Qo'shish</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Aksiya;
