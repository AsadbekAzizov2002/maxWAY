import React, { useEffect, useState } from "react";

const Donarkabob = () => {
  // State to store the list of food items
  const [fasfood, setFasfood] = useState([]);

  // Fetch data from the API endpoint
  useEffect(() => {
    fetch("https://663746e8288fedf6937fe785.mockapi.io/adminka/v1/products")
      .then((res) => res.json())
      .then((data) =>
        // Initialize each food item with count and showCounter properties
        setFasfood(
          data.slice(20, 23).map((item) => ({
            ...item,
            count: 1,
            showCounter: false,
          }))
        )
      );
  }, []);

  // Increment function to increase the count of a specific item
  const increment = (id) => {
    setFasfood((prevFasfood) =>
      prevFasfood.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  // Decrement function to decrease the count of a specific item
  const decrement = (id) => {
    setFasfood((prevFasfood) =>
      prevFasfood.map((item) =>
        item.id === id ? { ...item, count: Math.max(item.count - 1, 1) } : item
      )
    );
  };

  // ToggleCounter function to toggle the display of counter for a specific item
  const toggleCounter = (id) => {
    setFasfood((prevFasfood) =>
      prevFasfood.map((item) =>
        item.id === id ? { ...item, showCounter: !item.showCounter } : item
      )
    );
  };

  return (
    <div>
      <main>
        <div>
          <div>
            <div>
              <h1 className="px-5 mt-[69px] font-bold text-2xl">
                🍱Donar kebab
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-5 space-y-4 ">
                {fasfood.map((food) => (
                  <div
                    className="hover:shadow-blue-600 hover:shadow-2xl shadow-md w-[320px] h-[420px]"
                    key={food.id}
                  >
                    <div className=" gap-3">
                      <img
                        className="w-[358px] h-[220px] pt-4"
                        src={food.productImage}
                        alt=""
                      />
                      <h2 className="px-4 pt-3 font-semibold">
                        {food.productName}
                      </h2>
                      <p className="transform px-4 w-[342px] h-[80px] mt-[7px]">
                        {food.productDesc}
                      </p>
                      <div className="px-4 mt-3 flex gap-12 items-center h-[70px]">
                        <span className="gap-1 flex">
                          <h2 className="font-bold">{food.productPrice}</h2>
                          <h3>so'm</h3>
                        </span>
                        <div className="relative mt-11 mb-10 items-center flex justify-items-center h-10">
                          {!food.showCounter ? (
                            <button
                              className="bg-[#51267D] rounded-3xl w-[106px] h-10 text-white"
                              onClick={() => toggleCounter(food.id)}
                            >
                              Add
                            </button>
                          ) : (
                            <div className="absolute bg-white border rounded-md p-2 flex items-center">
                              <button
                                className="bg-[#51267D] rounded-l-3xl w-8 h-8 text-white"
                                onClick={() => decrement(food.id)}
                              >
                                -
                              </button>
                              <span className="px-2">{food.count}</span>
                              <button
                                className="bg-[#51267D] rounded-r-3xl w-8 h-8 text-white"
                                onClick={() => increment(food.id)}
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

export default Donarkabob;
