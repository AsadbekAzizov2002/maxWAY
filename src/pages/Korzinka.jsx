import React, { useState } from "react";

import img1 from "./../assets/img11.png"



const Korzinka = () => {
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(40000);
  const [showThankYou, setShowThankYou] = useState(false); // State for thank you message

  const handleIncrement = () => {
    setQuantity(quantity + 1);
    setTotalPrice(totalPrice + 40000);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      setTotalPrice(totalPrice - 40000);
    }
  };

  const handlePayment = () => {
    // Set showThankYou to true when payment button is clicked
    setShowThankYou(true);
  };

  return (
    <div>
      <main>
        <div className="flex gap-10 mt-20">
          <div className="flex w-[750px] h-[150px] shadow-lg mt-10 ml-10 justify-between">
            <img
              className=" w-[150px] h-[130px] pt-5 pl-5 items-center"
              src={img1}
              alt=""
            />
            <span className=" flex items-center gap-5 pr-5">
              <button
                className="active:bg-red-300 hover:bg-red-200 w-20 h-10 bg-slate-300 font-bold text-2xl"
                onClick={handleDecrement}
                disabled={quantity === 0}
              >
                -
              </button>
              <h2>{quantity}</h2>
              <button
                className="active:bg-green-400 hover:bg-green-200 w-20 h-10 bg-slate-300 font-bold text-2xl"
                onClick={handleIncrement}
              >
                +
              </button>
              <span className="flex items-center font-medium">
                <h2>{totalPrice}</h2>
                <p>so'm</p>
              </span>
            </span>

            {/* Total price */}
          </div>
          {/* Payment section */}
          <div className="w-[350px] h-[230px] shadow-2xl">
            <h2 className="font-medium pt-5 pl-5">Umumiy</h2>
            <hr className="mt-5" />
            <div>
              <span className="flex justify-between px-5 pt-3">
                <h2>To'lash uchun</h2>
                <span className="flex">
                  <h2>{totalPrice}</h2>
                  <p>so'm</p>
                </span>
              </span>
              <button
                className="w-full h-10 pl-5 pr-5 text-xl active:bg-green-400 hover:bg-green-200 active:font-medium rounded-3xl px-5 mt-5 bg-slate-100"
                onClick={handlePayment} // Call handlePayment when payment button is clicked
              >
                To'lov sahifasiga otish
              </button>
            </div>
          </div>
        </div>
      </main>
      {/* Thank you message */}
      {showThankYou && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">
              Xaridingiz uchun tashakkur 
            </h2>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={() => setShowThankYou(false)} // Hide thank you message when button is clicked
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Korzinka;

