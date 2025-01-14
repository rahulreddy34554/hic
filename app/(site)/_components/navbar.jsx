"use client";

import { useState, useEffect } from "react";
import { ImFacebook } from "react-icons/im";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import { IoMdMail, IoIosCall } from "react-icons/io";
import { BiLogoGmail } from "react-icons/bi";
import { CgMenuRight } from "react-icons/cg";
import Image from "next/image";

export function Navbar() {
  const [showSignUp, setShowSignUp] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false); // Track mobile menu state

  // Check if the user is logged in on page load
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Handle input change for form data
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Show the sign-up form
  const handleSignUp = () => {
    setShowSignUp(true);
    setShowSignIn(false);
  };

  // Show the sign-in form
  const handleSignIn = () => {
    setShowSignIn(true);
    setShowSignUp(false);
  };

  // Close the forms and reset form data
  const closeForms = () => {
    setShowSignUp(false);
    setShowSignIn(false);
    setFormData({ name: "", email: "", password: "" });
  };

  // Handle form submission (sign up or sign in)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (showSignUp) {
      if (!formData.name || !formData.email || !formData.password) {
        alert("Please fill out all fields.");
        return;
      }

      // Simulate account creation
      const newUser = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      };
      localStorage.setItem("user", JSON.stringify(newUser));
      setUser(newUser);
      alert("Account created and logged in successfully!");
      closeForms(); // Close the modal
    } else if (showSignIn) {
      if (!formData.email || !formData.password) {
        alert("Please fill out all fields.");
        return;
      }

      // Simulate sign-in
      const storedUser = JSON.parse(localStorage.getItem("user"));
      if (
        storedUser &&
        storedUser.email === formData.email &&
        storedUser.password === formData.password
      ) {
        setUser(storedUser);
        alert("Logged in successfully!");
        closeForms(); // Close the modal
      } else {
        alert("Invalid credentials.");
      }
    }
  };

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  // Toggle menu open/close
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Simulate social login (for now)
  const handleSocialLogin = (platform) => {
    alert(`Signed up with ${platform}`);
    closeForms(); // Close the modal after successful "social" login
  };

  return (
    <div className="z-[9999999]">
      {/* Upper Navbar */}
      <div className="border-b shadow-sm text-xs sm:text-sm">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-between items-center px-3 md:px-5 lg:px-0 py-2">
            <div className="flex items-center space-x-3 md:space-x-4">
              <a href="tel:+9951699516" className="flex items-center">
                <span className="p-1">
                  <IoIosCall />
                </span>
                <span className="hidden sm:block">9951699516</span>
              </a>
              <div className="hidden sm:block h-4 w-px bg-gray-400"></div>
              <a
                href="mailto:info@hotelinnercircle.in"
                className="flex items-center"
              >
                <span className="p-1">
                  <BiLogoGmail />
                </span>
                <span className="hidden sm:block">
                  info@hotelinnercircle.in
                </span>
              </a>
            </div>
            <div className="flex items-center space-x-4 sm:space-x-6">
              <a
                href="https://www.facebook.com/hotelinnercirclehyderabad"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ImFacebook />
              </a>
              <a
                href="https://x.com/i/flow/login?redirect_after_login=%2Finnercirclehyd1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter />
              </a>
              <a
                href="https://www.instagram.com/hotelinnercircle/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="mailto:info@hotelinnercircle.in"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoMdMail />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Lower Navbar with Logo, Links, and Button */}
      <div className="container mx-auto px-3 md:px-3 lg:px-0 py-4 md:py-1">
        <div className="flex flex-wrap items-center justify-between">
          <div className="hidden md:flex items-center space-x-3 lg:space-x-5 font-medium uppercase text-xs sm:text-sm md:text-base">
            <a href="/">Home</a>
            <a href="/rooms">Rooms</a>
            <a href="/ice-n-spice">Ice N'Spice</a>
            <a href="/gallery">Gallery</a>
            <a href="/contact">Contact</a>
          </div>
          <a href="/" className="flex-shrink-0 my-2 md:my-0">
            <Image
              src="/logo.png"
              alt="logo"
              height={80}
              width={80}
              className="md:h-[70px] md:w-[100px]"
            />
          </a>
          <div className="flex items-center space-x-2 sm:space-x-3">
            {!user ? (
              <>
                <button
                  onClick={handleSignUp}
                  className="hidden lg:block border border-gray-300 rounded-lg px-4 md:px-5 py-1.5 md:py-2 text-sm"
                >
                  Sign Up
                </button>
                <button
                  onClick={handleSignIn}
                  className="hidden lg:block border border-gray-300 rounded-lg px-4 md:px-5 py-1.5 md:py-2 text-sm"
                >
                  Sign In
                </button>
              </>
            ) : (
              <button
                onClick={handleLogout}
                className="border border-red-500 text-red-500 rounded-lg px-4 md:px-5 py-1.5 md:py-2 text-sm"
              >
                Logout
              </button>
            )}
            <button className="border border-secondary bg-secondary text-white rounded-lg px-4 md:px-5 py-1.5 md:py-2 text-sm">
              Book Now
            </button>
            <button
              className="md:hidden border border-secondary bg-secondary text-white rounded-lg px-4 py-2"
              onClick={toggleMenu}
            >
              <CgMenuRight className="text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Slide-in from Left) */}
      <div
        className={`fixed inset-0 z-[9999] bg-gray-900 bg-opacity-50 transition-all duration-300 transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="bg-white w-64 h-full p-5 flex flex-col space-y-6 font-serif font-semibold">
          <div className="logo flex justify-between">
            <img src="/logo.png" className="h-12" />
            <button
              onClick={toggleMenu}
              className="self-end text-xl text-gray-500 hover:text-gray-700 mb-3"
            >
              &times;
            </button>
          </div>
          <a href="/" className="text-lg border-b-2 border-black border-dashed">
            Home
          </a>
          <a
            href="/rooms"
            className="text-lg border-b-2 border-black border-dashed"
          >
            Rooms
          </a>
          <a
            href="/ice-n-spice"
            className="text-lg border-b-2 border-black border-dashed"
          >
            Ice N'Spice
          </a>
          <a
            href="/gallery"
            className="text-lg border-b-2 border-black border-dashed"
          >
            Gallery
          </a>
          <a
            href="/contact"
            className="text-lg border-b-2 border-black border-dashed"
          >
            Contact
          </a>
          <a
            href="/contact"
            className="text-lg border-b-2 border-black border-dashed"
          >
            About Us
          </a>
        </div>
      </div>

      {/* SignUp / SignIn Modal */}
      {(showSignUp || showSignIn) && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
            <button
              onClick={closeForms}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl"
            >
              &times;
            </button>
            {showSignUp && (
              <div>
                <h2 className="text-xl font-semibold mb-4 text-center">
                  Sign Up
                </h2>
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="block w-full mb-4 p-3 border border-gray-300 rounded-lg"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="block w-full mb-4 p-3 border border-gray-300 rounded-lg"
                  />
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                    className="block w-full mb-4 p-3 border border-gray-300 rounded-lg"
                  />
                  <button
                    type="submit"
                    className="w-full bg-secondary text-white py-3 rounded-lg"
                  >
                    Create Account
                  </button>
                </form>
                <div className="my-4 text-center">or</div>
                <button
                  onClick={() => handleSocialLogin("Google")}
                  className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg mb-3 flex items-center justify-center"
                >
                  <BiLogoGmail className="mr-2" />
                  Sign Up with Google
                </button>
                <button
                  onClick={() => handleSocialLogin("Facebook")}
                  className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg flex items-center justify-center"
                >
                  <ImFacebook className="mr-2" />
                  Sign Up with Facebook
                </button>
              </div>
            )}
            {showSignIn && (
              <div>
                <h2 className="text-xl font-semibold mb-4 text-center">
                  Sign In
                </h2>
                <form onSubmit={handleSubmit}>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="block w-full mb-4 p-3 border border-gray-300 rounded-lg"
                  />
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                    className="block w-full mb-4 p-3 border border-gray-300 rounded-lg"
                  />
                  <button
                    type="submit"
                    className="w-full bg-secondary text-white py-3 rounded-lg"
                  >
                    Login
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
