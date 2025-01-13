"use client"; // Mark this file as a Client Component

import React, { useState } from "react";

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "https://html.themewant.com/moonlit/assets/images/pages/gallery/1.webp",
    "https://html.themewant.com/moonlit/assets/images/pages/gallery/2.webp",
    "https://html.themewant.com/moonlit/assets/images/pages/gallery/1.webp",
    "https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWx8ZW58MHx8MHx8fDA%3D",
    "https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWx8ZW58MHx8MHx8fDA%3D",
  ];

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <div className="relative w-full h-64 sm:h-80 lg:h-[500px]">
        <img
          src="https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWx8ZW58MHx8MHx8fDA%3D"
          alt="Room"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-2xl sm:text-4xl font-bold uppercase">Gallery</h1>
          <p className="mt-2 text-sm sm:text-lg">
            Where every image tells a story of luxury, comfort, and
            unparalleled hospitality
          </p>
        </div>
      </div>

      {/* Gallery Intro */}
      <div className="text-center font-serif py-8 px-4">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Our Gallery</h2>
        <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto">
          Inner Circle, a centrally air-conditioned and centrally located
          hotel, provides smart hospitality solutions for corporate and
          business executives.
        </p>
      </div>

      {/* Categories */}
      <div className="py-6">
        <ul className="portfolio-cats flex justify-center flex-wrap space-x-4 text-sm sm:text-base font-medium text-gray-600">
          <li className="cursor-pointer hover:text-gray-900 transition duration-200">
            All
          </li>
          <li className="cursor-pointer hover:text-gray-900 transition duration-200">
            Events
          </li>
          <li className="cursor-pointer hover:text-gray-900 transition duration-200">
            Rooms
          </li>
          <li className="cursor-pointer hover:text-gray-900 transition duration-200">
            Banquet Hall
          </li>
          <li className="cursor-pointer hover:text-gray-900 transition duration-200">
            Guests
          </li>
        </ul>
      </div>

      {/* Gallery Images */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 m-4">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Gallery Image ${index + 1}`}
            className="cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => openModal(index)}
          />
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50"
          onClick={closeModal}
        >
          <div
            className="relative bg-white p-6 rounded-lg max-w-xs sm:max-w-md lg:max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[currentImageIndex]}
              alt="Modal Image"
              className="w-full max-h-[80vh] object-contain"
            />
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
            >
              &lt;
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
            >
              &gt;
            </button>
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-red-600 text-white p-2 rounded-full"
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
