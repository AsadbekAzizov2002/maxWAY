import React from "react";

const Korzinka = () => {
  return (
    <div>
      <main>
        <div className=" flex gap-10 mt-20">
          <div className=" flex w-[750px] h-[150px]  shadow-lg mt-10 ml-10 ">
            <img
              className=" w-[90px] h-[90px] pt-5 pl-5 items-center"
              src=""
              alt=""
            />
            <span className=" flex items-center gap-5 pr-5 pl-[250px]">
              <button className=" active:bg-red-300 hover:bg-red-200 w-20 h-10 bg-slate-300 font-bold text-2xl">
                -
              </button>
              <h2>1</h2>

              <button className=" active:bg-green-400 hover:bg-green-200 w-20 h-10 bg-slate-300 font-bold text-2xl">
                {" "}
                +
              </button>
            </span>
            <span className="flex items-center font-medium ">
              <h2>2000</h2>
              <p>so'm</p>
            </span>
          </div>
          <div className=" w-[350px] h-[230px] shadow-2xl">
            <h2 className=" font-medium pt-5 pl-5">Umumiy</h2>
            <span className=" flex justify-between px-5">
              <p>Mahsulotlar</p>
              <span className=" flex">
                <h2>2 000</h2>
                <p>so'm</p>
              </span>
            </span>
            <span className=" flex px-5 justify-between">
              <p>Yetkazib berish</p>
              <span className=" flex gap-5">
                <h2>0</h2>
                <p>so'm</p>
              </span>
            </span>
            <hr className=" mt-5" />
            <div>
              <span className=" flex justify-between px-5 pt-3">
                <h2>To'lash uchun</h2>
                <span className=" flex">
                  <h2>2 000</h2>
                  <p>so'm</p>
                </span>
              </span>
                <button className=" w-full h-10 pl-5 pr-5 text-xl active:bg-green-400 hover:bg-green-200 active:font-medium rounded-3xl px-5 mt-5 bg-slate-100">
                  To'lov sahifasiga otish
                </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Korzinka;
