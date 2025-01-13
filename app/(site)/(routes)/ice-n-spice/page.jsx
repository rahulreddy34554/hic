import React from "react";

export default function Page() {
  return (
    <div className="bg-gradient-to-b bg-white text-black to-indigo-900">
      {/* Hero Section */}
      <div className="relative">
  {/* Hero Image */}
  <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
    <img
      src="https://thumbs.dreamstime.com/b/luxury-hotel-room-master-bedroom-creative-ai-design-background-instagram-facebook-wall-painting-photo-wallpaper-backgrounds-325040660.jpg"
      className="w-full h-64 sm:h-80 md:h-96 lg:h-[450px] xl:h-[500px] object-cover rounded-lg shadow-lg"
      alt="hotel"
    />
    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
  </div>

  {/* Hero Text */}
  <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 text-center text-white w-full px-4 sm:w-2/3 md:w-1/2 lg:w-1/3">
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-extrabold leading-tight ">
      Ice <span className="text-secondary">N'</span> Spice
    </h1>
    <p className="mt-4 text-sm sm:text-lg md:text-xl">
      A delightful fusion of flavors, your perfect dining experience.
    </p>
  </div>
</div>
 

      {/* Restaurant Details Section */}
      <div className="grid grid-cols-1 md:grid-cols-1 gap-10 p-10 sm:p-20 lg:grid-cols-2">
        <div className="space-y-6 mx-auto sm:ml-14 lg:ml-28 md:mr-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-secondary">About Us</h2>
          <p className="text-sm sm:text-lg">
            A vegetarian coffee shop and multicuisine restaurant offering
            Hi-Tea, Lunch, and A la Carte dining at dinner.
          </p>
          <p className="text-sm sm:text-lg">
            Indulge in Indian, Thai, Chinese, and Continental delicacies, all
            served in a chic ambiance with a high atrium, perfect for both
            daylight and nighttime moods.
          </p>
          <form className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:space-x-6 ">
              <input
                type="text"
                id="fname"
                name="fname"
                className="p-2 sm:p-3 border-2 border-gray-300 w-full sm:w-72 bg-slate-100 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Name"
              />
              <input
                type="text"
                id="phone"
                name="phone"
                className="p-2 sm:p-3 border-2 border-gray-300 w-full sm:w-72 bg-slate-100 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Phone"
                required
              />
            </div>
            <textarea
              name="text"
              id="instructions"
              rows="3"
              className="w-full p-2 sm:p-3 border-2 border-gray-300 bg-slate-100 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Special Instructions"
            />
            <button className="w-full py-2 sm:py-3 mt-4 font-bold text-white bg-secondary rounded-full hover:scale-105 transition duration-300 transform">
              BOOK A TABLE
            </button>
          </form>
        </div>
        <div className="flex justify-center">
          <img
            src="https://www.hotelinnercircle.in/images/restaurantsidebanner.webp"
            alt="Restaurant Banner"
            className="w-full md:w-3/4 lg:w-96 border-4 border-secondary rounded-2xl shadow-xl"
          />
        </div>
      </div>

      {/* Menu Section */}
      <div className="text-center py-8 sm:py-16 bg-gradient-to-b bg-gray-100 to-indigo-900">
        <h2 className="text-sm sm:text-lg font-bold text-secondary">
          We Are “HOTEL INNER CIRCLE”
        </h2>
        <h1 className="text-2xl sm:text-4xl font-extrabold mt-4">Our Menu</h1>
      </div>

      {/* Menu Image */}
      <div className="container mx-auto py-5 sm:py-10 bg-gray-200">
        <img
          src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/innercircle/entire-menu.png"
          alt="menu"
          className="w-full rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}
