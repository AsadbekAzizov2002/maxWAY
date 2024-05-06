import React, { useEffect, useState } from "react";

const Ichimliklar = () => {
  const [drinks, setDrinks] = useState([]);

  console.log(drinks);

  useEffect(() => {
    fetch("https://663746e8288fedf6937fe785.mockapi.io/adminka/v1/products")
      .then((res) => res.json())
      .then((data) =>
        setDrinks(
          data.slice(42, 53).map((drink) => ({
            ...drink,
            count: 1,
            showCounter: false,
          }))
        )
      );
  }, []);

  const increment = (id) => {
    setDrinks((prevDrinks) =>
      prevDrinks.map((drink) =>
        drink.id === id ? { ...drink, count: drink.count + 1 } : drink
      )
    );
  };

  const decrement = (id) => {
    setDrinks((prevDrinks) =>
      prevDrinks.map((drink) =>
        drink.id === id
          ? { ...drink, count: Math.max(drink.count - 1, 1) } // Ensure count doesn't go below 1
          : drink
      )
    );
  };

  const toggleCounter = (id) => {
    setDrinks((prevDrinks) =>
      prevDrinks.map((drink) =>
        drink.id === id ? { ...drink, showCounter: !drink.showCounter } : drink
      )
    );
  };

  return (
    <div>
      <div>
        <h1 className="px-5 mt-[69px] font-bold text-2xl">🥤Ichimliklar</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-5 space-y-4">
          {drinks.map((drink) => (
            <div key={drink.id}>
              <div className="hover:shadow-blue-600 hover:shadow-2xl shadow-md w-[320px] h-[420px]">
                <img
                  className="w-[358px] h-[220px] pt-4 px-4"
                  src={drink.productImage}
                  alt=""
                />
                <h2 className="px-4 pt-3 font-semibold">{drink.productName}</h2>
                <p className="px-4 w-[342px] h-[80px] mt-[7px]">
                  {drink.productDesc}
                </p>
                <div className="px-4 mt-3 flex gap-12 items-center h-[70px]">
                  <span className="gap-1 flex">
                    <h2 className="font-bold">{drink.productPrice}</h2>
                    <h3>so'm</h3>
                  </span>
                  <div className="relative mb-10 items-center">
                    {!drink.showCounter ? (
                      <button
                        className="bg-[#51267D] rounded-3xl w-[106px] h-10 text-white"
                        onClick={() => toggleCounter(drink.id)}
                      >
                        Add
                      </button>
                    ) : (
                      <div className="absolute bg-white border rounded-md p-2 flex items-center">
                        <button
                          className="bg-[#51267D] rounded-l-3xl w-8 h-8 text-white"
                          onClick={() => decrement(drink.id)}
                        >
                          -
                        </button>
                        <span className="px-2">{drink.count}</span>
                        <button
                          className="bg-[#51267D] rounded-r-3xl w-8 h-8 text-white"
                          onClick={() => increment(drink.id)}
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
  );
};

export default Ichimliklar;
