"use client";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { FreeMode } from "swiper/modules";
import { TestimonialCard } from "./testimonial-card";

const data = [
  {
    name: "Anusha S Pal",
    img: "/user.jpg",
    review:
      "This business hotel provides excellent service... The rooms are very well maintained and clean...The staff here are very prompt in their work...The restaurant provides a variety of vegetarian delicacies...My experience here was very warm and welcoming... And I am definitely looking forward to staying here again.",
    role: "Travel group : Family",
  },
  {
    name: "Probal Chatterjee",
    role: "Local Guide",
    img: "/user.jpg",
    review:
      "My trip is connected with AIG hospital. This hotel is walking distance from it. Staff is courteous, room is good. In house food can be a dampener for some because the place is strictly vegetarian. I got disappointed hearing that but vegetarian fare was quite enjoyable. Overall good experience.",
  },
  {
    name: "Hasan Habyb",
    role: "Local Guide",
    img: "/user.jpg",
    review:
      "I have been in this hotel for 2 times. It was an excellent experience staying there most importantly the hygiene and the service was excellent. Friendly staff and great environment makes me feel better. If I would recommend a hotel in Hyd definitely it would be Hotel Inner Circle. Thank you for the great hospitality. Cheers!",
  },
];

export const Testimonial = () => {
  return (
    <div className="mb-10 container mx-auto px-5 lg:px-0">
      <div className="p-5 md:p-10 flex items-center justify-center container mx-auto">
        <div className="">
          <h6 className="text-secondary font-serif flex items-center justify-center text-2xl">
            <span className="mr-2">
              <FaArrowRightLong />
            </span>
            Testimonial
            <span className="ml-2">
              <FaArrowLeftLong />
            </span>
          </h6>
          <h1 className="text-6xl font-serif">What Our Client Say</h1>
        </div>
      </div>
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
            spaceBetween: 30,
          },
        }}
        modules={[FreeMode]}
      >
        {data.map((d) => (
          <SwiperSlide key={d.name} className=" relative">
            <TestimonialCard d={d} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
