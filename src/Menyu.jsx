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
import Desert from "./pages/Desert";
import Corusel from "./Corusel";
import Tamaddi from "./pages/Tamaddi";
import Ichimliklar from "./pages/Ichimliklar";

const Menyu = () => {
  return (
    <div className=" px-10">
      <Corusel />
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
      <Tamaddi />
      <Desert />
      <Ichimliklar />
    </div>
  );
};

export default Menyu;
