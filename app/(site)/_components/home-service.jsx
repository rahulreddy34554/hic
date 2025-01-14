"use client";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode } from "swiper/modules";
import Image from "next/image";

const serviceImages = [
  "/1.webp",
  "/2.webp",
  "/4.webp",
  "/1.webp",
  "/2.webp",
  "/4.webp",
];

export const HomeService = () => {
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
        // 768: {
        //   slidesPerView: 3,
        //   spaceBetween: 30,
        // },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1280: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      }}
      modules={[FreeMode]}
    >
      {serviceImages.map((item) => (
        <SwiperSlide key={item} className="!h-[400px] relative">
          <Image
            src={item}
            alt={item}
            fill
            objectFit="cover"
            className="rounded"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
