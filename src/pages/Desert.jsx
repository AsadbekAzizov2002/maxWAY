import React, { useEffect, useState } from "react";

const Desert = () => {
  const [fasfood, setFasfood] = useState([]);

  console.log(fasfood);
  useEffect(() => {
    fetch("https://663746e8288fedf6937fe785.mockapi.io/adminka/v1/products")
      .then((res) => res.json())
      .then((data) => setFasfood(data.slice(1, 10)));
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
      <main>
        <div>
          <div className="  shadow-sm grid grid-cols-2 space-y-5 md:grid-cols-4">
            {fasfood.map((food) => (
              <div key={food.id}>
                <div className=" w-[304px] h-[379px]">
                  <img
                    className=" w-[358px] h-[220px]  pt-4 px-4"
                    src={food.productImage}
                    alt=""
                  />
                  <h2 className=" px-4 pt-3 font-semibold">
                    {food.productName}
                  </h2>
                  <p className=" px-4 w-[342px] h-[80px] mt-[7px]">
                    {food.productDesc}
                  </p>
                  <div className="px-4  mt-3 flex gap-12 items-center h-[70px]">
                    <span className=" gap-1 flex">
                      <h2 className="  font-bold ">{food.productPrice}</h2>
                      <h3>so'm</h3>
                    </span>
                    {/* <button className=" bg-[#51267D] rounded-3xl  w-[106px] h-10 text-white">
                      Add
                    </button> */}
                    <div className="relative mb-10 items-center ">
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
      </main>
    </div>
  );
};

export default Desert;
