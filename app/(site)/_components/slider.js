'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Page() {
  const rooms = [
    {
      image: 'https://html.themewant.com/moonlit/assets/images/index-3/apartment/4.webp',
      price: '$3700/night',
      persons: 2,
    },
    {
      image: 'https://html.themewant.com/moonlit/assets/images/index-3/apartment/1.webp',
      price: '$150/night',
      persons: 3,
    },
    {
      image: 'https://html.themewant.com/moonlit/assets/images/index-3/apartment/2.webp',
      price: '$180/night',
      persons: 4,
    },
    {
      image: 'https://html.themewant.com/moonlit/assets/images/index-3/apartment/4.webp',
      price: '$200/night',
      persons: 2,
    },
  ];

  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={3}
      navigation={true}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      className="w-full h-full"
      loop={true}
      modules={[Pagination, Navigation, Scrollbar]}
      style={{
        '--swiper-navigation-color': 'black',
        '--swiper-pagination-color': '#fff',
        '--swiper-pagination-border': '20px',
      }}
    >
      {rooms.map((room, index) => (
        <SwiperSlide key={index}>
          <div className="relative bg-white shadow-lg rounded-lg overflow-hidden group">
            <img
              src={room.image}
              alt={`Room ${index + 1}`}
              className="w-full h-[470px] object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <div className="text-center">
                <p className="text-lg font-semibold">{room.price}</p>
                <p className="text-sm">{room.persons} Person{room.persons > 1 ? 's' : ''}</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
