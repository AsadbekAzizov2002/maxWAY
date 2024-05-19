import React, { useEffect, useState } from "react";

const Klapsenvich = () => {
  const [fasfood, setFasfood] = useState([]);
  const [selectedFood, setSelectedFood] = useState(null);

  useEffect(() => {
    fetch("https://663746e8288fedf6937fe785.mockapi.io/adminka/v1/products")
      .then((res) => res.json())
      .then((data) =>
        setFasfood(
          data.slice(7, 10).map((item) => ({
            ...item,
            count: 1, // Add count state for each item
            showCounter: false, // Add showCounter state for each item
          }))
        )
      );
  }, []);

  const increment = (id) => {
    setFasfood((prevFasfood) =>
      prevFasfood.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
    if (selectedFood && selectedFood.id === id) {
      setSelectedFood((prevSelectedFood) => ({
        ...prevSelectedFood,
        count: prevSelectedFood.count + 1,
      }));
    }
  };

  const decrement = (id) => {
    setFasfood((prevFasfood) =>
      prevFasfood.map((item) =>
        item.id === id ? { ...item, count: Math.max(item.count - 1, 1) } : item
      )
    );
    if (selectedFood && selectedFood.id === id) {
      setSelectedFood((prevSelectedFood) => ({
        ...prevSelectedFood,
        count: Math.max(prevSelectedFood.count - 1, 1),
      }));
    }
  };

  const toggleCounter = (id) => {
    setFasfood((prevFasfood) =>
      prevFasfood.map((item) =>
        item.id === id ? { ...item, showCounter: !item.showCounter } : item
      )
    );
  };

  const openModal = (food) => {
    setSelectedFood(food);
  };

  const closeModal = () => {
    setSelectedFood(null);
  };

  return (
    <div>
      <main className="px-5 mb-10">
        <div>
          <div className="mt-12">
            <h1 className="font-bold text-3xl  ">🥪 Klab-Sendvich</h1>
            <div className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {fasfood.map((food) => (
                  <div
                    className="shadow-md hover:shadow-2xl transition-shadow duration-300 rounded-lg overflow-hidden cursor-pointer"
                    key={food.id}
                    onClick={() => openModal(food)}
                  >
                    <div className="gap-3">
                      <img
                        className="w-full h-56 object-cover"
                        src={food.productImage}
                        alt={food.productName}
                      />
                      <div className="p-4">
                        <h2 className="text-lg font-semibold text-gray-800">
                          {food.productName}
                        </h2>
                        <p className="text-sm text-gray-600 mt-2">
                          {food.productDesc}
                        </p>
                        <div className="flex justify-between items-center mt-4">
                          <span className="text-xl font-bold text-purple-700">
                            {food.productPrice} so'm
                          </span>
                          <div className="relative">
                            {!food.showCounter ? (
                              <button
                                className="bg-purple-700 text-white rounded-full px-4 py-2 hover:bg-purple-800 transition-colors duration-300"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  toggleCounter(food.id);
                                }}
                              >
                                Add
                              </button>
                            ) : (
                              <div className="flex items-center">
                                <button
                                  className="bg-purple-700 text-white rounded-l-full w-8 h-8 flex items-center justify-center hover:bg-purple-800 transition-colors duration-300"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    decrement(food.id);
                                  }}
                                >
                                  -
                                </button>
                                <span className="px-3 text-lg font-semibold">
                                  {food.count}
                                </span>
                                <button
                                  className="bg-[#51267D] text-white rounded-r-full w-8 h-8 flex items-center justify-center hover:bg-purple-800 transition-colors duration-300"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    increment(food.id);
                                  }}
                                >
                                  +
                                </button>
                              </div>
                            )}
                          </div>
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

      {selectedFood && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[80%] max-w-[600px] relative">
            <button
              className="absolute top-2 right-2 text-gray-700 hover:text-gray-900 transition-colors duration-300"
              onClick={closeModal}
            >
              &times;
            </button>
            <div className="flex">
              <img
                className="w-1/2 h-auto object-cover rounded-lg"
                src={selectedFood.productImage}
                alt={selectedFood.productName}
              />
              <div className="w-1/2 pl-5">
                <h2 className="text-2xl font-bold text-gray-800 mb-3">
                  {selectedFood.productName}
                </h2>
                <p className="text-gray-600 mb-3">{selectedFood.productDesc}</p>
                <div className="flex items-center mb-3">
                  <button
                    className="bg-[#51267D] text-white rounded-l-full w-8 h-8 flex items-center justify-center hover:bg-purple-800 transition-colors duration-300"
                    onClick={() => decrement(selectedFood.id)}
                  >
                    -
                  </button>
                  <span className="px-4 text-lg font-semibold">
                    {selectedFood.count}
                  </span>
                  <button
                    className="bg-[#51267D] text-white rounded-r-full w-8 h-8 flex items-center justify-center hover:bg-purple-800 transition-colors duration-300"
                    onClick={() => increment(selectedFood.id)}
                  >
                    +
                  </button>
                </div>
                <div className="text-lg font-bold text-gray-800">
                  Total Price: {selectedFood.productPrice * selectedFood.count}
                  so'm
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Klapsenvich;

// import React, { useEffect, useState } from "react";

// const Klapsenvich = () => {
//   const [fasfood, setFasfood] = useState([]);
//   const [selectedFood, setSelectedFood] = useState(null);

//   useEffect(() => {
//     fetch("https://663746e8288fedf6937fe785.mockapi.io/adminka/v1/products")
//       .then((res) => res.json())
//       .then((data) =>
//         setFasfood(
//           data.slice(7, 10).map((item) => ({
//             ...item,
//             count: 1,
//             showCounter: false,
//           }))
//         )
//       );
//   }, []);

//   const increment = (id) => {
//     setFasfood((prevFasfood) =>
//       prevFasfood.map((item) =>
//         item.id === id ? { ...item, count: item.count + 1 } : item
//       )
//     );
//     if (selectedFood && selectedFood.id === id) {
//       setSelectedFood({ ...selectedFood, count: selectedFood.count + 1 });
//     }
//   };

//   const decrement = (id) => {
//     setFasfood((prevFasfood) =>
//       prevFasfood.map((item) =>
//         item.id === id ? { ...item, count: Math.max(item.count - 1, 1) } : item
//       )
//     );
//     if (selectedFood && selectedFood.id === id) {
//       setSelectedFood({
//         ...selectedFood,
//         count: Math.max(selectedFood.count - 1, 1),
//       });
//     }
//   };

//   const toggleCounter = (id) => {
//     setFasfood((prevFasfood) =>
//       prevFasfood.map((item) =>
//         item.id === id ? { ...item, showCounter: !item.showCounter } : item
//       )
//     );
//   };

//   const openModal = (food) => {
//     setSelectedFood(food);
//   };

//   const closeModal = () => {
//     setSelectedFood(null);
//   };

//   return (
//     <div>
//       <main>
//         <div>
//           <div>
//             <h1 className="px-5 mt-12 font-bold text-2xl">🥪 Klab-Sendvich</h1>
//             <div className="gap-10 px-5">
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-5 space-y-4">
//                 {fasfood.map((food) => (
//                   <div
//                     className="hover:shadow-blue-600 hover:shadow-2xl shadow-md cursor-pointer"
//                     key={food.id}
//                     onClick={() => openModal(food)}
//                   >
//                     <div className="w-[324px] h-[420px] gap-3">
//                       <img
//                         className="w-[308px] h-[220px] pt-4 pl-4 rounded-lg"
//                         src={food.productImage}
//                         alt={food.productName}
//                       />
//                       <h2 className="px-4 pt-3 font-semibold text-lg">
//                         {food.productName}
//                       </h2>
//                       <p className="transform px-4 w-[342px] h-[80px] mt-[7px]">
//                         {food.productDesc}
//                       </p>
//                       <div className="px-4 mt-3 flex gap-12 items-center h-[70px]">
//                         <span className="gap-1 flex">
//                           <h2 className="font-bold">{food.productPrice}</h2>
//                           <h3>so'm</h3>
//                         </span>
//                         <div className="relative mt-11 mb-10 items-center flex justify-items-center h-10">
//                           {!food.showCounter ? (
//                             <button
//                               className="bg-[#51267D] rounded-3xl w-[106px] h-10 text-white"
//                               onClick={() => toggleCounter(food.id)}
//                             >
//                               Add
//                             </button>
//                           ) : (
//                             <div className="absolute bg-white border rounded-md p-2 flex items-center">
//                               <button
//                                 className="bg-[#51267D] rounded-l-3xl w-8 h-8 text-white"
//                                 onClick={() => decrement(food.id)}
//                               >
//                                 -
//                               </button>
//                               <span className="px-2">{food.count}</span>
//                               <button
//                                 className="bg-[#51267D] rounded-r-3xl w-8 h-8 text-white"
//                                 onClick={() => increment(food.id)}
//                               >
//                                 +
//                               </button>
//                             </div>
//                           )}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>

//       {selectedFood && (
//         <div
//           className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
//           onClick={closeModal}
//         >
//           <div
//             className="bg-white p-5 rounded-lg shadow-lg w-[600px] relative"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <button
//               className="absolute top-2 right-2 text-black"
//               onClick={closeModal}
//             >
//               X
//             </button>
//             <div className="flex">
//               <img
//                 className="w-1/2 rounded-lg"
//                 src={selectedFood.productImage}
//                 alt={selectedFood.productName}
//               />
//               <div className="w-1/2 p-5">
//                 <h2 className="text-xl font-bold mb-3">
//                   {selectedFood.productName}
//                 </h2>
//                 <div className="flex items-center mb-3">
//                   <button
//                     className="bg-[#51267D] rounded-l-3xl w-8 h-8 text-white"
//                     onClick={() => decrement(selectedFood.id)}
//                   >
//                     -
//                   </button>
//                   <span className="px-2">{selectedFood.count}</span>
//                   <button
//                     className="bg-[#51267D] rounded-r-3xl w-8 h-8 text-white"
//                     onClick={() => increment(selectedFood.id)}
//                   >
//                     +
//                   </button>
//                 </div>
//                 <div>
//                   <span>
//                     Total Price:{" "}
//                     {selectedFood.productPrice * selectedFood.count} so'm
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Klapsenvich;
