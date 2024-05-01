import React from "react";
import Aksiya from "./pages/Aksiya";
import Header from "./Header";
import MaxiBox from "./pages/MaxiBox";
import Klapsenvich from "./pages/Klapsenvich";
import Lavash from "./pages/Lavash";
import Shaurma from "./pages/Shaurma";
import Panini from "./pages/Panini";
import Burger from "./pages/Burger";
import Donarkabob from "./pages/Donarkabob";
import Hotdoc from "./pages/Hotdoc";
import Gazak from "./pages/Gazak";

const Menyu = () => {
  return (
    <div>
      <Header />
      <Aksiya />
      <MaxiBox />
      <Klapsenvich />
      <Lavash />
      <Shaurma />
      <Panini />
      <Burger />
      <Donarkabob />
      <Hotdoc />
      <Gazak />
    </div>
  );
};

export default Menyu;
