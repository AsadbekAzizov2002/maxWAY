import React, { useEffect, useState } from "react";

const MaxiBox = () => {

 const [fasfood, setFasfood] = useState([]);

 console.log(fasfood);
 useEffect(() => {
   fetch("https://663746e8288fedf6937fe785.mockapi.io/adminka/v1/products")
     .then((res) => res.json())
     .then((data) => setFasfood(data.slice(1, 7)));
 }, []);

// 
const [count, setCount] = useState(1);
const [showCounter, setShowCounter] = useState(false);

const increment = () => {
  setCount(count + 1);
};

const decrement = () => {
  if (count > 1) {
    setCount(count - 1);
  } else {
    setShowCounter(false); // Hide the counter if count is 1
  }
};

const toggleCounter = () => {
  setShowCounter(!showCounter);
};

// 


  return (
    <div>
      <main className=" px-5">
        <div>
          <div className=" mt-[53px]">
            <h1 className=" font-bold text-2xl">🍟🍔🥤Maxi BOX</h1>
            <div className="">
              <div className="grid grid-cols-2 md:grid-cols-4 my-5 space-y-4 ">
                {fasfood.map((food) => (
                  <div className=" shadow-md" key={food.id}>
                    <div className=" w-[304px] h-[420px] gap-3">
                      <img
                        className=" w-[358px] h-[220px]  pt-4 px-4"
                        src={food.productImage}
                        alt=""
                        />
                      <h2 className=" px-4 pt-3 font-semibold">
                        {food.productName}
                      </h2>
                      <p className=" transform px-4 w-[342px] h-[80px] mt-[7px]">
                        {food.productDesc}
                      </p>
                      <div className="px-4  mt-3 flex gap-12 items-center h-[70px]">
                        <span className=" gap-1 flex">
                          <h2 className="  font-bold ">{food.productPrice}</h2>
                          <h3>so'm</h3>
                        </span>
                        <div className="relative mt-11 mb-10 items-center flex justify-items-center h-10">
                          {!showCounter ? (
                            <button
                              className="bg-[#51267D] rounded-3xl w-[106px] h-10 text-white"
                              onClick={toggleCounter}
                            >
                              Add
                            </button>
                          ) : (
                            <div className="absolute bg-white border rounded-md p-2 flex items-center">
                              <button
                                className="bg-[#51267D] rounded-l-3xl w-8 h-8 text-white"
                                onClick={decrement}
                              >
                                -
                              </button>
                              <span className="px-2">{count}</span>
                              <button
                                className="bg-[#51267D] rounded-r-3xl w-8 h-8 text-white"
                                onClick={increment}
                              >
                                +
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MaxiBox;










































// import img2 from "./../assets/img2.png";
// import img3 from "./../assets/img3.png";
// import img4 from "./../assets/img4.png";
// import img5 from "./../assets/img5.png";
// import img6 from "./../assets/img6.png";
// import img7 from "./../assets/img7.png";




              {/* <button className=" bg-[#51267D] rounded-3xl  w-[106px] h-10 text-white">
              Add
            </button> */}
              {/* <img className=" pt-3 px-3" src={img2} alt="" />
                <h2 className=" px-4 pt-3 font-semibold">Maxi BOX An'anaviy</h2>
                <p className=" px-4 w-[342px] mt-[7px]">
                  Original sendvich, kartoshka fri, 0,4 l
                </p>
                <p className=" px-4 w-[]">coca cola, tanl...</p>
                <div className="px-4 mt-3 flex gap-12 items-center">
                  <span className=" gap-1 flex">
                    <h2 className=" font-bold ">42 000 </h2>
                    <h3>so'm</h3>
                  </span>
                  <button className=" bg-[#51267D] rounded-3xl  w-[106px] h-10 text-white">
                    Qo'shish
                  </button>
                </div> */}

              {/* <div className=" w-[304px] h-[379px]"> */}
              {/* <img className=" pt-3 px-3" src={img3} alt="" />
                <h2 className=" px-4 pt-3 font-semibold">Maxi BOX Taniqli</h2>
                <p className=" px-4 w-[342px] mt-[7px]">
                  Original sendvich, kartoshka fri, 0,4 l
                </p>
                <p className=" px-4 w-[]">coca cola, tanlas...</p>
                <div className="px-4  mt-3 flex gap-12 items-center">
                  <span className=" gap-1 flex">
                    <h2 className=" font-bold ">42 000 </h2>
                    <h3>so'm</h3>
                  </span>
                  <button className=" bg-[#51267D] rounded-3xl  w-[106px] h-10 text-white">
                    Qo'shish
                  </button>
                </div> */}
              {/* </div>{" "} */}
              {/* <div className=" w-[304px] h-[379px]"> */}
              {/* <img className=" pt-3 px-3" src={img4} alt="" />
                <h2 className=" px-4 pt-3 font-semibold">Maxi BOX Retro</h2>
                <p className=" px-4 w-[342px] mt-[7px]">
                  Shaurma Original, kartoshka fri, 0,4 l{" "}
                </p>
                <p className=" px-4 w-[]">coca cola , tanl...</p>
                <div className="px-4  mt-3 flex gap-12 items-center">
                  <span className=" gap-1 flex">
                    <h2 className=" font-bold ">42 000 </h2>
                    <h3>so'm</h3>
                  </span>
                  <button className=" bg-[#51267D] rounded-3xl  w-[106px] h-10 text-white">
                    Qo'shish
                  </button>
                </div> */}
              {/* </div>{" "} */}
              {/* <div className=" w-[304px] h-[379px]"> */}
              {/* <img className=" pt-3 px-3" src={img5} alt="" />
                <h2 className=" px-4 pt-3 font-semibold">Max BOX German</h2>
                <p className=" px-4 w-[342px] mt-[7px]">
                  Herman Donar , kartoshka fri, 0,4 l
                </p>
                <p className=" px-4 w-[]">coca cola, tanlash ...</p>
                <div className="px-4  mt-3 flex gap-12 items-center">
                  <span className=" gap-1 flex">
                    <h2 className=" font-bold ">42 000 </h2>
                    <h3>so'm</h3>
                  </span>
                  <button className=" bg-[#51267D] rounded-3xl  w-[106px] h-10 text-white">
                    Qo'shish
                  </button>
                </div> */}
              {/* </div>{" "} */}
              {/* <div className=" w-[304px] h-[379px]"> */}
              {/* <img className=" pt-3 px-3" src={img6} alt="" />
                <h2 className=" px-4 pt-3 font-semibold">Maxi BOX Trend</h2>
                <p className=" px-4 w-[342px] mt-[7px]">
                  Gamburger, kartoshka fri, 0,4 l coca{" "}
                </p>
                <p className=" px-4 w-[]">cola, tanlash uch...</p>
                <div className="px-4  mt-3 flex gap-12 items-center">
                  <span className=" gap-1 flex">
                    <h2 className=" font-bold ">42 000 </h2>
                    <h3>so'm</h3>
                  </span>
                  <button className=" bg-[#51267D] rounded-3xl  w-[106px] h-10 text-white">
                    Qo'shish
                  </button>
                </div> */}
              {/* </div>{" "} */}
              {/* <div className=" w-[304px] h-[379px]">
                {/* <img className=" pt-3 px-3" src={img7} alt="" />
                <h2 className=" px-4 pt-3 font-semibold">Mini BOX</h2>
                <p className=" px-4 w-[342px] mt-[7px]">
                  Longer, kartoshka fri, coca-cola 0,3,{" "}
                </p>
                <p className=" px-4 w-[]">tanlovga ko'ra so...</p>
                <div className="px-4  mt-3 flex gap-12 items-center">
                  <span className=" gap-1 flex">
                    <h2 className=" font-bold ">42 000 </h2>
                    <h3>so'm</h3>
                  </span>
                  <button className=" bg-[#51267D] rounded-3xl  w-[106px] h-10 text-white">
                    Qo'shish
                  </button>
                </div> */}
              {/* </div> */}