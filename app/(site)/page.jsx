import Image from "next/image";
import { HomeBanner } from "./_components/home-banner";
import { HomeAbout } from "./_components/home-about";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { HomeService } from "./_components/home-service";
import { Testimonial } from "./_components/testimonial";
import { HomeRooms } from "./_components/home-room";

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

const Home = () => {
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

      <div className="p-5 container mx-auto">
        <div className="lg:flex justify-between items-center">
          <div>
            <h6 className="text-secondary font-serif flex items-center">
              <span className="mr-2">
                <FaArrowRightLong />
              </span>
              Room
            </h6>
            <h1 className="text-6xl font-serif">Our Rooms</h1>
          </div>
          <p className="max-w-lg ">
            Our rooms offer a harmonious blend of comfort and elegance, designed
            to provide an exceptional stay for every guest.
          </p>
        </div>

        {/* Room Cards Scrollable Container */}
        <HomeRooms />
      </div>

      {/* ====== Our Rooms Section Ends ====== */}

      {/* Servie Sections */}
      <div className="bg-primaryBackground mb-12 p-4">
        <div className="p-5 md:p-10 flex items-center justify-center container mx-auto">
          <h6 className="text-secondary font-serif flex items-center justify-center text-2xl">
            <span className="mr-2">
              <FaArrowRightLong />
            </span>
            Service
            <span className="ml-2">
              <FaArrowLeftLong />
            </span>
          </h6>
          <h1 className="text-6xl font-serif">Our Service</h1>
        </div>
        <div className="pb-10">
          <HomeService />
        </div>
      </div>

      {/* Testiomonial Sections */}
      <Testimonial />
    </>
  );
};

export default Home;
