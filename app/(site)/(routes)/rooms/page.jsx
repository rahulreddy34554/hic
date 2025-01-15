import React from "react";
import { FaBed } from "react-icons/fa";
import { MdOutlineAcUnit } from "react-icons/md";
import { IoWifi } from "react-icons/io5";
import { BsFillCupHotFill } from "react-icons/bs";
import { PiWineFill } from "react-icons/pi";
import { FaLock } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import { FaPeopleRoof } from "react-icons/fa6";

export const rooms = [
  {
    name: "Standard Room | Single",
    bed: "1 King Bed",
    ac: "Yes",
    wifi: "Yes",
    tea: "Yes",
    minibar: "Yes",
    locker: "Yes",
    checkin: "Yes (Contactless)",
    occupancy: "2 Adults, 1 Child",
    description:
      "24 hours check out time Tariff includes complimentary buffet breakfast at the coffee shop",
    price: "3899.00",
    image:
      "https://html.themewant.com/moonlit/assets/images/pages/gallery/2.webp",
  },
  {
    name: "Standard Room | Double",
    bed: "1 King Bed",
    ac: "Yes",
    wifi: "Yes",
    tea: "Yes",
    minibar: "Yes",
    locker: "Yes",
    checkin: "Yes (Contactless)",
    occupancy: "2 Adults, 1 Child",
    description:
      "24 hours check out time Tariff includes complimentary buffet breakfast at the coffee shop.",
    price: "4299.00",
    image:
      "https://www.hotelinnercircle.in/admin/Roomimages/Standard%20Room/17.Inner%20Circle%20Standard%20Room.jpg",
  },
  {
    name: "Executive Room | Single",
    bed: "1 King Bed",
    ac: "Yes",
    wifi: "Yes",
    tea: "Yes",
    minibar: "Yes",
    locker: "Yes",
    checkin: "Yes (Contactless)",
    occupancy: "2 Adults, 1 Child",
    description:
      "24 hours check out time Tariff includes complimentary buffet breakfast at the coffee shop",
    price: "4499.00",
    image:
      "https://www.hotelinnercircle.in/admin/Roomimages/Standard%20Room/19.Inner%20Circle%20Exe%20Room.jpg",
  },
  {
    name: "Executive Room | Double",
    bed: "1 King Bed",
    ac: "Yes",
    wifi: "Yes",
    tea: "Yes",
    minibar: "Yes",
    locker: "Yes",
    checkin: "Yes (Contactless)",
    occupancy: "2 Adults, 1 Child",
    description:
      "24 hours check out time Tariff includes complimentary buffet breakfast at the coffee shop",
    price: "3899.00",
    image:
      "https://www.hotelinnercircle.in/admin/Roomimages/Standard%20Room/19.Inner%20Circle%20Exe%20Room.jpg",
  },
  // Add more rooms as needed
];

export default function Page() {
  return (
    <div className="mb-14">
      <div className="relative w-full h-80">
        {/* Background Image */}
        <img
          src="https://html.themewant.com/moonlit/assets/images/index-3/apartment/2.webp"
          alt="Room"
          className="w-full h-full object-cover"
        />

        {/* Title and Description */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white p-4">
          <h1 className="text-3xl font-bold">ROOM LIST</h1>
          <p className="mt-2 text-xs">HOME ROOM LIST</p>
        </div>
      </div>

      <div className="2xl:max-w-screen-lg max-w-screen-lg mx-auto mt-10 border p-4 rounded-lg shadow-lg bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 font-serif">
        {/* Check In */}
        <div className="flex flex-col items-start">
          <label
            htmlFor="check-in"
            className="text-gray-700 font-semibold mb-2"
          >
            Check In
          </label>
          <input
            type="date"
            id="check-in"
            className="w-full p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#AB8A62]"
            required
          />
        </div>

        {/* Check Out */}
        <div className="flex flex-col items-start">
          <label
            htmlFor="check-out"
            className="text-gray-700 font-semibold mb-2"
          >
            Check Out
          </label>
          <input
            type="date"
            id="check-out"
            className="w-full p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#AB8A62]"
            required
          />
        </div>

        {/* Adult */}
        <div className="flex flex-col items-start">
          <label htmlFor="adult" className="text-gray-700 font-semibold mb-2">
            Adult
          </label>
          <select
            id="adult"
            className="w-full p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#AB8A62]"
            required
          >
            {[...Array(10).keys()].map((i) => (
              <option key={i} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </div>

        {/* Child */}
        <div className="flex flex-col items-start">
          <label htmlFor="child" className="text-gray-700 font-semibold mb-2">
            Child
          </label>
          <select
            id="child"
            className="w-full p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#AB8A62]"
            required
          >
            {[...Array(10).keys()].map((i) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </select>
        </div>

        {/* Check Now */}
        <div className="flex items-center justify-center ">
          <button
            className="w-full py-2 px-4 bg-[#AB8A62] text-white font-semibold rounded-lg hover:bg-[#9C7A56] transition duration-300"
            type="submit"
          >
            Check Now
          </button>
        </div>
      </div>

      <div className="text-center my-8 font-serif">
        <h1 className="font-semibold text-4xl">Our Favourite Rooms</h1>
        <p className="mt-4 text-lg max-w-4xl mx-auto">
          Inner Circle, a centrally air-conditioned & centrally located hotel,
          provides smart <br /> hospitality solutions for corporate and business
          executives.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {rooms.map((room, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col transform transition duration-300 hover:scale-105 border-2 border-gray-300"
          >
            {/* Room Image */}
            <div className="w-full">
              <img
                src={room.image}
                alt={room.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
            </div>

            {/* Room Details */}
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="font-semibold text-xl text-gray-800">
                {room.name}
              </h2>
              <p className="text-sm mt-2 text-gray-600">{room.description}</p>

              <div className="mt-4 text-sm text-gray-600 grid grid-cols-2 gap-4">
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <FaBed className="mr-2 text-[#AB8A62]" /> {room.bed}
                  </li>
                  <li className="flex items-center">
                    <MdOutlineAcUnit className="mr-2 text-[#AB8A62]" />
                    AC:&nbsp;
                    {room.ac}
                  </li>
                  <li className="flex items-center">
                    <IoWifi className="mr-2 text-[#AB8A62]" /> Wifi: {room.wifi}
                  </li>
                  <li className="flex items-center">
                    <BsFillCupHotFill className="mr-2 text-[#AB8A62]" />
                    Tea/Coffee: {room.tea}
                  </li>
                </ul>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <PiWineFill className="mr-2 text-[#AB8A62]" />
                    MiniBar:&nbsp;
                    {room.minibar}
                  </li>
                  <li className="flex items-center">
                    <FaLock className="mr-2 text-[#AB8A62]" /> Locker:&nbsp;
                    {room.locker}
                  </li>
                  <li className="flex items-center">
                    <TiTick className="mr-2 text-[#AB8A62]" /> Check-in:&nbsp;
                    {room.checkin}
                  </li>
                  <li className="flex items-center">
                    <FaPeopleRoof className="mr-2 text-[#AB8A62]" />
                    Occupancy:&nbsp;
                    {room.occupancy}
                  </li>
                </ul>
              </div>
            </div>

            {/* Price and Book Now Button */}
            <div className="p-4 flex justify-between items-center bg-[#f8f8f8]">
              <p className="text-lg font-bold text-gray-800">
                <span className="text-xs">Starting From </span>
                {room.price}* /<span className="text-xs">Day</span>
              </p>
              <a href="/Form">
                <button className="bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-blue-600 transition duration-300">
                  Book Now
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
