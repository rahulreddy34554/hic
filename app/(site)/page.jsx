"use client"; // Marks this file as a Client Component

import Image from "next/image";
import { HomeBanner } from "./_components/home-banner";
import { HomeAbout } from "./_components/home-about";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Apartment Facilities Array
export const apartmentFacilites = [
  {
    icon: "/bed.svg",
    name: "Rooms and Suites",
    desc: "Varied types of rooms, from standard to luxury suites, equipped with essentials like beds.",
  },
  {
    icon: "/security.svg",
    name: "24-Hour Security",
    desc: "On-site security personnel and best surveillance. Secure storage for valuables.",
  },
  {
    icon: "/gym.svg",
    name: "Fitness Center",
    desc: "Equipped with exercise machines and weights. Offering massages, facials, and other treatments.",
  },
  {
    icon: "/swimming-pool.svg",
    name: "Swimming Pool",
    desc: "Indoor or outdoor pools for leisure or exercise. Offering massages, facials, and other treatments.",
  },
];

// Room Data Array
const rooms = [
  {
    id: 1,
    image: "/4.webp",
    price: 350,
    adults: 4,
    children: 2,
    roomSpace: 45,
  },
  {
    id: 2,
    image: "/4.webp",
    price: 350,
    adults: 4,
    children: 2,
    roomSpace: 45,
  },
  {
    id: 3,
    image: "/4.webp",
    price: 350,
    adults: 4,
    children: 2,
    roomSpace: 45,
  },
  {
    id: 4,
    image: "/4.webp",
    price: 350,
    adults: 4,
    children: 2,
    roomSpace: 45,
  },
];

const Home = () => {
  const [activeRoom, setActiveRoom] = useState(null); // Tracks the hovered room

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: (
      <button className="slick-prev">
        <FaArrowLeft />
      </button>
    ),
    nextArrow: (
      <button className="slick-next">
        <FaArrowRight />
      </button>
    ),
  };
  return (
    <>
      <HomeBanner />

      {/* Apartment Facilities */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 container mx-auto px-5 mt-80 lg:mt-1 md:mt-1">
        <div className="col-span-1 p-10">
          <div className="grid grid-cols-2 gap-5">
            {apartmentFacilites.map((item, index) => (
              <div className="space-y-5" key={index}>
                <Image src={item.icon} alt={item.name} height={50} width={50} />
                <h1 className="font-serif md:text-2xl sm:text-xl text-lg">
                  {item.name}
                </h1>
                <p className="text-sm text-black/60 tracking-[0.010em]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Facility */}
        <div className="col-span-1 p-10">
          <p className="text-secondary text-lg font-serif">Facility</p>
          <h1 className="text-6xl font-serif my-5">Apartment Facilities</h1>
          <div className="relative aspect-video">
            <Image src={"/wallpaper.jpg"} alt="img-1" fill objectFit="center" />
          </div>
        </div>
      </div>

      <HomeAbout />

      <div className="p-5 md:p-10 container mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <h6 className="text-secondary font-serif flex items-center">
              <span className="mr-2">
                <FaArrowRightLong />
              </span>
              Room
            </h6>
            <h1 className="text-6xl font-serif">Our Rooms</h1>
          </div>
          <p className="max-w-lg md:mt-7 md:p-5">
            Our rooms offer a harmonious blend of comfort and elegance, designed
            to provide an exceptional stay for every guest.
          </p>
        </div>

        {/* Room Cards Scrollable Container */}
        <div className="relative overflow-hidden mt-10">
          <div className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory">
            {rooms.map((room) => (
              <div
                key={room.id}
                className="w-96 flex-shrink-0 snap-start p-5 bg-white shadow-lg rounded-lg"
              >
                <Image
                  src={room.image}
                  alt={`Room ${room.id}`}
                  height={300}
                  width={400}
                  className="rounded-lg"
                />
                <div className="mt-4">
                  <h2 className="text-xl font-medium">Price: ${room.price}</h2>
                  <p>Adults: {room.adults}</p>
                  <p>Children: {room.children}</p>
                  <p>Room Space: {room.roomSpace} m²</p>
                  <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-all">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ====== Our Rooms Section Ends ====== */}

      {/* Servie Sections */}
      <div className="bg-gray-200 mb-12 p-4">
        <div className="p-5 md:p-10 flex items-center justify-center container mx-auto">
          <div className="">
            <h6 className="text-secondary font-serif flex items-center justify-center text-2xl">
              <span className="mr-2">
                <FaArrowRightLong />
              </span>
              Service{" "}
              <span className="ml-2">
                <FaArrowLeftLong />
              </span>
            </h6>
            <h1 className="text-6xl font-serif">Our Service</h1>
          </div>
        </div>
        <div className="flex gap-5 overflow-x-scroll mb-10">
          <Image src={"/1.webp"} alt="1" height={550} width={550} />
          <Image src={"/2.webp"} alt="1" height={550} width={550} />
          <Image src={"/4.webp"} alt="1" height={550} width={550} />
          <Image src={"/2.webp"} alt="1" height={550} width={550} />
          <Image src={"/4.webp"} alt="1" height={550} width={550} />
        </div>
      </div>

      {/* Testiomonial Sections */}
      <div className="mb-12 p-4">
        <div className="p-5 md:p-10 flex items-center justify-center container mx-auto">
          <div className="">
            <h6 className="text-secondary font-serif flex items-center justify-center text-2xl">
              <span className="mr-2">
                <FaArrowRightLong />
              </span>
              Testimonial{" "}
              <span className="ml-2">
                <FaArrowLeftLong />
              </span>
            </h6>
            <h1 className="text-6xl font-serif">What Our Client Say</h1>
          </div>
        </div>
        <div className="  ">
          <div className="mt-20">
            <Slider {...settings}>
              {data.map((d) => (
                <div className="bg-black text-white h-[550px] rounded-xl">
                  <div className="h-56 rounded-t-xl bg-indigo-500 flex justify-center items-center">
                    <img
                      src={d.img}
                      alt=""
                      className="h-44 w-44 rounded-full"
                    />
                  </div>
                  <div className="flex flex-col justify-center items-center gap-4 p-1">
                    <p className="text-xl font-semibold">{d.name}</p>
                    <p>{d.role}</p>
                    <p className="p-2">{d.review}</p>
                    <button className="bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl">
                      Read more
                    </button>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

const data = [
  {
    name: "Anusha S Pal",
    img: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=800",
    review:
      "This business hotel provides excellent service... The rooms are very well maintained and clean...The staff here are very prompt in their work...The restaurant provides a variety of vegetarian delicacies...My experience here was very warm and welcoming... And I am definitely looking forward to staying here again.",
    role: "Travel group : Family",
  },
  {
    name: "Probal Chatterjee",
    role: "Local Guide",
    img: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=800",
    review:
      "My trip is connected with AIG hospital. This hotel is walking distance from it. Staff is courteous, room is good. In house food can be a dampener for some because the place is strictly vegetarian. I got disappointed hearing that but vegetarian fare was quite enjoyable. Overall good experience.",
  },
  {
    name: "Hasan Habyb",
    role: "Local Guide",
    img: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=800",
    review:
      "I have been in this hotel for 2 times. It was an excellent experience staying there most importantly the hygiene and the service was excellent. Friendly staff and great environment makes me feel better. If I would recommend a hotel in Hyd definitely it would be Hotel Inner Circle. Thank you for the great hospitality. Cheers!",
  },
];

export default Home;
