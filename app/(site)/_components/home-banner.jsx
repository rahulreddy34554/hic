import Image from "next/image";
import { BookingForm } from "@/app/(site)/_components/booking-form";

export const HomeBanner = () => {
  return (
    <div className="relative max-w-full w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px] 2xl:h-[900px] 3xl:h-[1000px]">
      {/* Image component */}
      <Image
        src="/wallpaper.jpg"
        alt="banner"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
      />
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black opacity-70"></div>
      {/* Content on top of the image */}
      <div className="absolute inset-0 flex justify-center items-center px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-screen-3xl">
          {/* Left Column (Text) */}
          <div className="text-white flex flex-col justify-center space-y-4 col-span-1 mt-96 lg:mt-40 md:mt-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl 3xl:text-9xl font-medium font-serif leading-snug text-center md:text-left">
              Discover Luxury in{" "}
              <br className="hidden sm:block" /> the Heart of the City
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl max-w-3xl text-center md:text-left mx-auto md:mx-0">
              Experience unparalleled comfort and elegance at our premium
              location in the heart of the city.
            </p>
          </div>

          {/* Right Column (Form) */}
          <div className="bg-white p-6  sm:p-8 md:p-10 lg:p-12 rounded-lg shadow-lg w-full max-w-md mx-auto md:mx-0 ">
            <BookingForm title={"Book your stay"} />
          </div>
        </div>
      </div>
    </div>
  );
};
