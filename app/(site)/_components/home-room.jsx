"use client";

import Image from "next/image";

import { FaBed } from "react-icons/fa";
import { MdOutlineAcUnit } from "react-icons/md";
import { IoWifi } from "react-icons/io5";
import { BsFillCupHotFill } from "react-icons/bs";
import { PiWineFill } from "react-icons/pi";
import { FaLock, FaPeopleRoof } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode } from "swiper/modules";
import React from "react";
import { rooms } from "../(routes)/rooms/page";
// const rooms = [
//   {
//     id: 1,
//     image: "/4.webp",
//     price: 350,
//     adults: 4,
//     children: 2,
//     roomSpace: 45,
//   },
//   {
//     id: 2,
//     image: "/4.webp",
//     price: 350,
//     adults: 4,
//     children: 2,
//     roomSpace: 45,
//   },
//   {
//     id: 3,
//     image: "/4.webp",
//     price: 350,
//     adults: 4,
//     children: 2,
//     roomSpace: 45,
//   },
//   {
//     id: 4,
//     image: "/4.webp",
//     price: 350,
//     adults: 4,
//     children: 2,
//     roomSpace: 45,
//   },
//   {
//     id: 5,
//     image: "/1.webp",
//     price: 350,
//     adults: 4,
//     children: 2,
//     roomSpace: 45,
//   },
// ];

export const HomeRooms = () => {
  return (
    <Swiper
      freeMode={true}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1280: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      }}
      modules={[FreeMode]}
    >
      {rooms.map((room) => (
        <SwiperSlide
          key={room.id}
          className="bg-white shadow border rounded-lg relative m-5"
        >
          <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
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
          {/* <Image
            src={room.image}
            alt={`Room ${room.id}`}
            height={300}
            width={400}
            className="aspect-video rounded-t-lg"
          />
          <div className="p-5">
            <h2 className="text-xl font-medium">Price: ${room.price}</h2>
            <p>Adults: {room.adults}</p>
            <p>Children: {room.children}</p>
            <p>Room Space: {room.roomSpace} m²</p>
            <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-all">
              Book Now
            </button>
          </div> */}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
