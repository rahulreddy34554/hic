import React from "react";

export const BookingForm = ({ title }) => {
  return (
    <div className="">
      <h2 className="text-4xl font-serif text-center capitalize  mb-4">
        {title}
      </h2>
      <form className="space-y-5">
        <div className="flex items-center justify-between h-14 bg-gray-400 px-5 py-2 rounded-lg bg-opacity-20">
          <label htmlFor="checkin" className="block text-sm font-semibold">
            Check In
          </label>
          <input
            type="date"
            id="checkin"
            name="checkin"
            className="w-full p-2 border max-w-40 border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="flex items-center justify-between h-14 bg-gray-400 px-5 py-2 rounded-lg bg-opacity-20">
          <label htmlFor="checkout" className="block text-sm font-semibold">
            Check Out
          </label>
          <input
            type="date"
            id="checkout"
            name="checkout"
            className="w-full p-2 border max-w-40 border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="flex items-center justify-between h-14 bg-gray-400 px-5 py-2 rounded-lg bg-opacity-20">
          <label htmlFor="adult" className="block text-sm font-semibold">
            Adult
          </label>
          <select name="adult" id="adult">
            <option value="1">1 Person</option>
            <option value="2">2 Person</option>
            <option value="3">3 Person</option>
            <option value="4">4 Person</option>
            <option value="5">5 Person</option>
          </select>
        </div>

        <div className="flex items-center justify-between h-14  bg-gray-400 px-5 py-2 rounded-lg bg-opacity-20">
          <label htmlFor="child" className="block text-sm font-semibold">
            Child
          </label>
          <select name="child" id="child">
            <option value="1">1 child</option>
            <option value="2">2 child</option>
            <option value="3">3 child</option>
            <option value="4">4 child</option>
            <option value="5">5 child</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-secondary text-white py-2 rounded-md transition "
        >
          Search
        </button>
      </form>
    </div>
  );
};
