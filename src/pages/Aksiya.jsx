import React, { useEffect, useState } from "react";

const Desert = () => {
  const [deserts, setDeserts] = useState([]);

  useEffect(() => {
    fetch("https://663746e8288fedf6937fe785.mockapi.io/adminka/v1/products")
      .then((res) => res.json())
      .then((data) =>
        setDeserts(
          data.slice(0, 1).map((desert) => ({
            ...desert,
            count: 1,
            showCounter: false,
          }))
        )
      );
  }, []);

  const increment = (id) => {
    setDeserts((prevDeserts) =>
      prevDeserts.map((desert) =>
        desert.id === id ? { ...desert, count: desert.count + 1 } : desert
      )
    );
  };

  const decrement = (id) => {
    setDeserts((prevDeserts) =>
      prevDeserts.map((desert) =>
        desert.id === id
          ? {
              ...desert,
              count: Math.max(desert.count - 1, 1), // Ensure count doesn't go below 1
            }
          : desert
      )
    );
  };

  const toggleCounter = (id) => {
    setDeserts((prevDeserts) =>
      prevDeserts.map((desert) =>
        desert.id === id
          ? { ...desert, showCounter: !desert.showCounter }
          : desert
      )
    );
  };

  return (
    <div>
      <main>
        <div>
          <h1 className="px-5 mt-[69px] font-bold text-2xl">
            🎉 Aksiya German Donar + Cola 0,4 L
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-5 space-y-4 ">
            {deserts.map((desert) => (
              <div key={desert.id}>
                <div className="hover:shadow-blue-600 hover:shadow-2xl shadow-md w-[320px] h-[420px]">
                  <img
                    className="w-[358px] h-[220px] pt-4 px-4"
                    src={desert.productImage}
                    alt=""
                  />
                  <h2 className="px-4 pt-3 font-semibold">
                    {desert.productName}
                  </h2>
                  <p className="px-4 w-[342px] h-[80px] mt-[7px]">
                    {desert.productDesc}
                  </p>
                  <div className="px-4 mt-3 flex gap-12 items-center h-[70px]">
                    <span className="gap-1 flex">
                      <h2 className="font-bold">{desert.productPrice}</h2>
                      <h3>so'm</h3>
                    </span>
                    <div className="relative mb-10 items-center">
                      {!desert.showCounter ? (
                        <button
                          className="bg-[#51267D] rounded-3xl w-[106px] h-10 text-white"
                          onClick={() => toggleCounter(desert.id)}
                        >
                          Add
                        </button>
                      ) : (
                        <div className="absolute bg-white border rounded-md p-2 flex items-center">
                          <button
                            className="bg-[#51267D] rounded-l-3xl w-8 h-8 text-white"
                            onClick={() => decrement(desert.id)}
                          >
                            -
                          </button>
                          <span className="px-2">{desert.count}</span>
                          <button
                            className="bg-[#51267D] rounded-r-3xl w-8 h-8 text-white"
                            onClick={() => increment(desert.id)}
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
