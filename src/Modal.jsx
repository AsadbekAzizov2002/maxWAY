import React, { useState } from "react";
import RoomIcon from "@mui/icons-material/Room";

export default function OrderModal() {
  const [showModal, setShowModal] = useState(false);
  const [deliveryType, setDeliveryType] = useState("");
  const [address, setAddress] = useState("");
  const [showAddressInput, setShowAddressInput] = useState(false);
  const [addressList, setAddressList] = useState([]);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleDeliveryType = (type) => {
    setDeliveryType(type);
    if (type === "delivery") {
      setShowAddressInput(true);
    } else if (type === "takeaway") {
      setShowAddressInput(false);
      setAddressList([
        {
          name: "MAX WAY OUTSIDE",
          address: "ulitsa Beruni, 47, Tashkent",
          hours: "Mon-Sun: 10:00-22:00",
          phone: "+998712005400",
          openUntil: "open until 22:00",
        },
      ]);
    }
  };

  const handleConfirmAddress = () => {
    // Do something with the address
  };

  return (
    <>
      <div className="hidden md:flex items-center gap-5">
        <button className="flex items-center" onClick={openModal}>
          <span>
            <RoomIcon />
          </span>
          <h2 className="w-[250px]">Delivery or Pickup Pickup type choose</h2>
        </button>
      </div>
      {showModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg w-[800px] flex">
            <div className="w-2/3 pr-8">
              <div className="flex justify-end">
                <button
                  onClick={closeModal}
                  className="text-gray-500 hover:text-black"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <h1 className="text-xl font-semibold mb-4">
                Choose the reception type
              </h1>
              <div className="flex mb-4">
                <button
                  className="bg-[#51267D] text-white rounded-md px-4 py-2 mr-4"
                  onClick={() => handleDeliveryType("delivery")}
                >
                  Delivery
                </button>
                <button
                  className="bg-[#51267D] text-white rounded-md px-4 py-2"
                  onClick={() => handleDeliveryType("takeaway")}
                >
                  Take Away
                </button>
              </div>
              {showAddressInput ? (
                <>
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Enter your address"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4"
                  />
                  <button
                    className="bg-[#51267D] text-white rounded-md px-4 py-2 mb-4"
                    onClick={handleConfirmAddress}
                  >
                    Set Address
                  </button>
                </>
              ) : (
                <>
                  {addressList.map((place, index) => (
                    <div
                      key={index}
                      className="my-10 w-[500px] border h-[180px] bg-white shadow-md"
                    >
                      <div className="pt-3 px-3 flex w-[490px] justify-between">
                        <div>
                          <h2 className="font-bold">{place.name}</h2>
                          <h3>{place.address}</h3>
                        </div>
                        <h3 className="pr-10 text-green-400">
                          {place.openUntil}
                        </h3>
                      </div>
                      <hr className="mt-4 w-[480px] pl-3 mr-3 text-2xl" />
                      <div className="flex justify-between mt-5 px-5">
                        <div>
                          <h2 className="font-light">Working hours:</h2>
                          <h2>{place.hours}</h2>
                        </div>
                        <div>
                          <h2 className="font-light">Phone:</h2>
                          <h2>{place.phone}</h2>
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              )}
              <div className="mt-4">
                <button onClick={closeModal} className="text-[#51267D]">
                  Close
                </button>
              </div>
            </div>
            <div className="w-1/3">
              {/* Placeholder for the map component */}
              <div className="h-[400px] bg-gray-300">
                {/* Map component goes here */}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
