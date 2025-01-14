import Image from "next/image";

export const TestimonialCard = ({ d }) => {
  return (
    <div className="shadow border border-gray-100 rounded-lg h-full p-5">
      <div className="flex items-center justify-center ">
        <div className="relative w-36 h-36 ">
          <Image
            src={d.img}
            alt={d.name}
            fill
            objectFit="cover"
            className="rounded-full"
          />
        </div>
      </div>
      <div className="space-y-3 mt-5">
        <p className="text-xl text-center font-semibold">{d.name}</p>
        <p className="text-sm text-black/60">{d.review}</p>
      </div>
    </div>
  );
};

{
  /* <div className="rounded-xl">
      <div className="rounded-t-xl bg-indigo-500 flex justify-center items-center">
        <Image
          src={d.img}
          alt={d.name}
          className="rounded-full"
          width={170}
          height={170}
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
    </div> */
}
