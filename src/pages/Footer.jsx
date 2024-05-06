import React from "react";
import { Link, NavLink } from "react-router-dom";

import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <div>
      <main>
        <div className=" px-10 pt-10">
          <hr className=" mt-10 mb-10" />
          <div className=" flex items-center">
            <ul className=" px-10 ">
              <li>
                <NavLink to="/">
                  <img
                    className=" w-14 h-14"
                    src="https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2Fcfff938f-a7f6-4694-972e-c7fa9c0f68ba&w=64&q=75"
                    alt=""
                  />
                </NavLink>
              </li>
            </ul>
            <ul className=" md:flex gap-5 md:pl-[400px] text-base font-semibold">
              <li>
                <NavLink to="/filial">Filiallar</NavLink>
              </li>
              <li>
                <NavLink to="/bizhaqimizda">Biz haqimizda</NavLink>
              </li>
              <li>
                <NavLink to="/boglanish">Bog'lanish</NavLink>
              </li>
            </ul>
          </div>
          <hr className=" mt-5 mb-5" />
          <div className=" flex justify-between w-full pb-10">
            <h2>© Delever 2020 - 2024 Barcha huquqlar himoyalangan</h2>
            <div className=" gap-5 flex">
              <Link
                underline="hover"
                color="text.white"
                href="https://www.instagram.com/maxwayuz/"
                aria-current="page"
              >
                <InstagramIcon />
              </Link>
              <span>
                <Link
                  underline="hover"
                  color="text.white"
                  href="https://www.facebook.com/maxway.uzb/"
                  aria-current="page"
                >
                  <FacebookIcon />
                </Link>{" "}
              </span>
              <span>
                <Link
                  underline="hover"
                  color="text.white"
                  href="https://www.youtube.com/@maxway2010"
                  aria-current="page"
                >
                  <YouTubeIcon />
                </Link>
              </span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Footer;
