"use client"; // Add this at the top of the file

import { useState, useRef } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

export default function Page() {
  // State for form submission success message
  const [submitted, setSubmitted] = useState(false);

  // Refs for form fields
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const subjectRef = useRef(null);
  const messageRef = useRef(null);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Get form values
    const formData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      subject: subjectRef.current.value,
      message: messageRef.current.value,
    };

    // Log form data (You can replace this with an API request)
    console.log("Form Submitted: ", formData);

    // Clear the form
    nameRef.current.value = "";
    emailRef.current.value = "";
    phoneRef.current.value = "";
    subjectRef.current.value = "";
    messageRef.current.value = "";

    // Show success message
    setSubmitted(true);

    // Reset the success message after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="mb-14">
      {/* Background Section */}
      <div className="relative w-full h-80">
        <img
          src="https://images.unsplash.com/photo-1517840901100-8179e982acb7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Room"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white p-4">
          <h1 className="text-3xl font-bold">CONTACT</h1>
          <p className="mt-2 text-xs">
            Whether you have questions, need assistance, or simply want to
            share.
          </p>
        </div>
      </div>

      {/* Contact Form and Image Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-6 md:px-16 lg:px-28 mt-12">
        {/* Contact Form */}
        <div>
          <h1 className="text-3xl font-extrabold font-serif text-center mb-4">
            Get in Touch
          </h1>
          {submitted && (
            <div className="mb-4 p-4 bg-green-200 text-green-800 rounded-lg text-center">
              Your message has been sent successfully!
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <input
                type="text"
                id="name"
                placeholder="Name"
                className="flex-1 p-3 border-2 bg-gray-200 rounded-md"
                ref={nameRef}
                required
              />
              <input
                type="email"
                id="email"
                placeholder="E-Mail"
                className="flex-1 p-3 border-2 bg-gray-200 rounded-md"
                ref={emailRef}
                required
              />
            </div>
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <input
                type="text"
                id="phone"
                placeholder="Phone"
                className="flex-1 p-3 border-2 bg-gray-200 rounded-md"
                ref={phoneRef}
                required
              />
              <input
                type="text"
                id="subject"
                placeholder="Subject"
                className="flex-1 p-3 border-2 bg-gray-200 rounded-md"
                ref={subjectRef}
                required
              />
            </div>
            <textarea
              id="message"
              placeholder="Message"
              className="w-full p-3 border-2 bg-gray-200 rounded-md h-40 md:h-72 mb-4"
              ref={messageRef}
              required
            />
            <button
              type="submit"
              className="w-full md:w-96 bg-[#caa169] text-white p-3 rounded-md hover:bg-white hover:text-black font-bold transition duration-300"
            >
              SUBMIT
            </button>
          </form>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1517840901100-8179e982acb7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-full h-auto object-cover rounded-lg shadow-xl"
            alt="Contact"
          />
        </div>
      </div>

      {/* Location and Info Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 bg-gray-100 mt-12">
        {/* Map */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden h-72 lg:h-auto">
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387142.84001019996!2d78.4515876374036!3d17.41007006321906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb974b6fd460cb%3A0xceb7cc091f916314!2sSaboo%20Heights%2C%206-3-905%2C%20Somajiguda%2C%20Rajbhavan%20Road%2C%20Hyderabad-500082!5e0!3m2!1sen!2sin!4v1692975032183!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Saboo Heights Location"
          ></iframe>
        </div>

        {/* Info Center */}
        <div className="bg-white rounded-lg p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Hotel Info Center
          </h1>
          <ul>
            <li className="border-dashed border-b-2 pb-5">
              <p className="font-bold text-xl flex items-center mb-3">
                Address <FaMapMarkerAlt className="ml-2 text-sm" />
              </p>
              <a href="https://www.google.com/maps/place/Saboo+Heights,+6-3-905,+Somajiguda,+Rajbhavan+Road,+Hyderabad-500082">
                Saboo Heights, 6-3-905, Somajiguda, Rajbhavan Road,
                Hyderabad-500082
              </a>
            </li>
            <li className="border-b-2 pb-5 mb-5">
              <h2 className="font-extrabold text-xl mb-3">Open Hours</h2>
              <p>Monday – Sunday</p>
              <h2 className="font-extrabold text-xl mt-4 mb-3">Phone</h2>
              <div className="hover:text-[#caa169] flex items-center">
                <FaPhone className="text-xs mr-2" />
                +91 9951699516
              </div>
              <p className="hover:text-[#caa169]">040 23302330</p>
            </li>
            <li className="border-b-2 border-dashed border-gray-300 pb-5">
              <h2 className="font-extrabold text-xl mb-3">E-Mail</h2>
              <div className="hover:text-[#caa169] flex items-center">
                <IoMail className="mr-2" />
                info@hotelinnercircle.in
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
