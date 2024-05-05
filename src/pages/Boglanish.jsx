import React from "react";


import png from "./../assets/png.png"
import { Link } from "@mui/material";

const Boglanish = () => {
  return (
    <div>
      <main>
        <div className=" pt-10 px-[65px]">
          <div>
            <h1 className=" text-4xl font-bold">Bog'lanish</h1>

            <div className=" w-[400px] h-[300px] mt-5 bg-[#96B1C2] border rounded-2xl">
              <img className=" pt-5 px-10" src={png} alt="" />

              <h2 className=" pt-4 px-10 w-[350px] text-xl font-semibold text-white">
                Telegramda sharh qoldiring yoki savol bering
              </h2>
              <span className=" px-10 pt-5 text-white text-lg">
                <Link
                  underline="hover"
                  color="text.white"
                  href="https://t.me/maxwaymasterfood_bot"
                  aria-current="page"
                >
                  @maxwaymasterfood_bot
                </Link>
              </span>
            </div>
            <h2 className=" text-xl font-semibold pt-10 px-10">
              Yagona aloqa markazi
            </h2>
            <h2 className=" text-sm px-10">+998712005400</h2>
          </div>
          <hr className=" mt-10" />
        </div>
      </main>
    </div>
  );
};

export default Boglanish;
