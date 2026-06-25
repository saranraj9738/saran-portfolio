import shareSeatVideo from "./asset/shareseat-prototype.mp4";
import frame2 from "./asset/frame2.png";
import frame5 from "./asset/frame5.png";
import frame8 from "./asset/frame8.png";
import frame16 from "./asset/frame16.png";
import frame1 from "./asset/frame1.png";
import { useNavigate } from "react-router-dom";
import { FaDownload, FaTimes } from "react-icons/fa";
import { useEffect, useState } from "react";
import {
  FaArrowLeft,
  FaLinkedin,
  FaBehance,
} from "react-icons/fa";

import { HiOutlineMail } from "react-icons/hi";

import { Link } from "react-router-dom";

export default function ShareSeat() {

  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);

  const screenNames = [
    "Login",
    "Profile Setup",
    "Find/Offer Ride",
    "Ride Details",
  ];

  const scrollToSection = (id) => {
    setTimeout(() => {
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 300);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-white text-black min-h-screen font-sans">

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">

        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* LEFT - LOGO */}
          <Link to="/" className="flex items-center gap-3">

            <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
              S
            </div>

            <h1 className="font-bold text-lg">
              R.SaranRaj - UI/UX Designer
            </h1>

          </Link>

          {/* CENTER NAV */}
          <ul className="hidden md:flex items-center gap-6 text-gray-600">

            <li
              onClick={() => navigate("/")}
              className="relative px-4 py-2 rounded-full cursor-pointer transition group"
            >
              <span className="absolute inset-0 bg-blue-50 rounded-full opacity-0 group-hover:opacity-100 transition"></span>
              <span className="relative z-10 group-hover:text-blue-600 transition">
                Work
              </span>
            </li>

            <li

              onClick={() => scrollToSection("case-study")}
              className="relative px-4 py-2 rounded-full cursor-pointer transition group"
            >
              <span className="absolute inset-0 bg-blue-50 rounded-full opacity-0 group-hover:opacity-100 transition"></span>
              <span className="relative z-10 group-hover:text-blue-600 transition">
                Case Study
              </span>
            </li>

            <li
              onClick={() => scrollToSection("screens")}
              className="relative px-4 py-2 rounded-full cursor-pointer transition group"
            >
              <span className="absolute inset-0 bg-blue-50 rounded-full opacity-0 group-hover:opacity-100 transition"></span>
              <span className="relative z-10 group-hover:text-blue-600 transition">
                Screens
              </span>
            </li>

            <li
              onClick={() => {
                navigate("/");

                setTimeout(() => {
                  const section = document.getElementById("contact");

                  if (section) {
                    section.scrollIntoView({
                      behavior: "smooth",
                    });
                  }
                }, 300);
              }}
              className="relative px-4 py-2 rounded-full cursor-pointer transition group"
            >
              <span className="absolute inset-0 bg-blue-50 rounded-full opacity-0 group-hover:opacity-100 transition"></span>
              <span className="relative z-10 group-hover:text-blue-600 transition">
                Contact
              </span>
            </li>

          </ul>          {/* RIGHT BUTTON */}
          <a
            href="/SaranRaj_Resume1.pdf"
            download="SaranRaj_Resume.pdf"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            <FaDownload />
            Resume
          </a>

        </div>

      </nav>

      {/* HERO */}
      <section id="overview" className="max-w-7xl mx-auto px-6 pt-12 pb-24">

        <Link
          to="/"
          className="text-gray-500 hover:text-black transition"
        >
          ← Back to work
        </Link>

        <p className="mt-8 text-gray-500">
          Personal Concept Project
        </p>

        <h1 className="text-6xl font-bold mt-3">
          ShareSeat
        </h1>

        <p className="text-gray-600 text-xl mt-4">
          Share the ride. Split the cost.
          Travel further, together.
        </p>

        <div className="mt-10 border rounded-2xl overflow-hidden max-w-3xl">
          <div className="grid grid-cols-3">

            <div className="p-5 border-r">
              <p className="text-sm text-gray-400">Role</p>
              <p>UI/UX Design</p>
            </div>

            <div className="p-5 border-r">
              <p className="text-sm text-gray-400">Type</p>
              <p>Personal Concept Project</p>
            </div>

            <div className="p-5">
              <p className="text-sm text-gray-400">Tool</p>
              <p>Figma</p>
            </div>

          </div>
        </div>

      </section>

      {/* COVER IMAGE */}
      <section className="border-t border-b">

        <div className="max-w-7xl mx-auto px-6 py-20">

          <div className="bg-[#F5EFE6] rounded-[36px] h-[650px] flex items-center justify-center overflow-hidden">

            <img
              src={frame1}
              alt="ShareSeat"
              className="h-[550px] object-contain transition duration-300 hover:scale-105"
            />

          </div>

        </div>

      </section>

      {/* OVERVIEW */}
      <section id="case-study" className="max-w-7xl mx-auto px-6 py-24">

        <div className="grid md:grid-cols-3 gap-10">

          <div>
            <p className="text-blue-600 mb-4">01</p>

            <h3 className="text-2xl font-bold mb-4">
              Project Overview
            </h3>

            <p className="text-gray-600 leading-relaxed">
              ShareSeat is a ride-sharing platform
              that connects people traveling along
              similar routes and helps them share
              transportation costs.
            </p>

          </div>

          <div>
            <p className="text-blue-600 mb-4">02</p>

            <h3 className="text-2xl font-bold mb-4">
              Problem Statement
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Many users struggle to find affordable
              and convenient transportation,
              especially during rush hours and
              long-distance travel.
            </p>

          </div>

          <div>
            <p className="text-blue-600 mb-4">03</p>

            <h3 className="text-2xl font-bold mb-4">
              Solution
            </h3>

            <p className="text-gray-600 leading-relaxed">
              ShareSeat matches passengers and
              drivers traveling along similar
              routes to reduce travel costs and
              improve accessibility.
            </p>

          </div>

        </div>

      </section>

      {/* DESIGN PROCESS */}
      <section id="process" className="border-t">

        <div className="max-w-7xl mx-auto px-6 py-24">

          <p className="text-gray-500">
            Design Process
          </p>

          <h2 className="text-5xl font-bold mt-3">
            How the project came together.
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-14">

            <div className="border rounded-3xl p-8">
              <h3 className="font-bold text-xl">
                Problem Identification
              </h3>

              <p className="text-gray-500 mt-4">
                The idea for ShareSeat came from observing
                transportation challenges during busy travel
                periods and noticing the need for a smarter
                ride-sharing solution.
              </p>
            </div>

            <div className="border rounded-3xl p-8">
              <h3 className="font-bold text-xl">
                User Flow Planning
              </h3>

              <p className="text-gray-500 mt-4">
                The user flow was built around how users
                search for rides, create trips, connect
                with drivers and complete journeys
                effortlessly.
              </p>
            </div>

            <div className="border rounded-3xl p-8">
              <h3 className="font-bold text-xl">
                High-Fidelity Design
              </h3>

              <p className="text-gray-500 mt-4">
                Clean interfaces were designed to help
                users quickly understand available rides,
                trip details and booking information.
              </p>
            </div>

            <div className="border rounded-3xl p-8">
              <h3 className="font-bold text-xl">
                Visual Design System
              </h3>

              <p className="text-gray-500 mt-4">
                A minimal design system was created with
                clear typography, spacing and accessible
                interaction patterns.
              </p>
            </div>

            <div className="border rounded-3xl p-8">
              <h3 className="font-bold text-xl">
                Final Prototype
              </h3>

              <p className="text-gray-500 mt-4">
                The final prototype enables users to find
                rides, share costs and communicate with
                fellow travelers through an intuitive flow.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* USER FLOW */}
      <section id="flow" className="border-t">

        <div className="max-w-7xl mx-auto px-6 py-24">

          <p className="text-gray-500">
            User Flow
          </p>

          <h2 className="text-5xl font-bold mt-3">
            The path through the product.
          </h2>

          <div className="flex flex-wrap gap-3 mt-14">

            <span className="px-4 py-2 border rounded-full text-sm">
              01 Splash
            </span>

            <span className="text-gray-400">→</span>

            <span className="px-4 py-2 border rounded-full text-sm">
              02 OTP Login
            </span>

            <span className="text-gray-400">→</span>

            <span className="px-4 py-2 border rounded-full text-sm">
              03 Verification
            </span>

            <span className="text-gray-400">→</span>

            <span className="px-4 py-2 border rounded-full text-sm">
              04 Profile Setup
            </span>

            <span className="text-gray-400">→</span>

            <span className="px-4 py-2 border rounded-full text-sm">
              05 Location Permission
            </span>

            <span className="text-gray-400">→</span>

            <span className="px-4 py-2 border rounded-full text-sm">
              06 Choose Journey
            </span>

            <span className="text-gray-400">→</span>

            <span className="px-4 py-2 border rounded-full text-sm">
              07 Find Ride
            </span>

            <span className="text-gray-400">→</span>

            <span className="px-4 py-2 border rounded-full text-sm">
              08 Trip Details
            </span>

            <span className="text-gray-400">→</span>

            <span className="px-4 py-2 border rounded-full text-sm">
              09 Available Rides
            </span>

            <span className="text-gray-400">→</span>

            <span className="px-4 py-2 border rounded-full text-sm">
              10 Ride Details
            </span>

            <span className="text-gray-400">→</span>

            <span className="px-4 py-2 border rounded-full text-sm">
              11 Success
            </span>

          </div>

          {/* PROTOTYPE VIDEO */}
          <div className="bg-black rounded-[32px] p-10 mt-14">

            <p className="text-gray-400 text-sm">
              Prototype
            </p>

            <h3 className="text-white text-2xl font-bold mt-2">
              See the flow in motion
            </h3>

            <div className="mt-8">

              <div className="flex justify-center">
                <video
                  src={shareSeatVideo}
                  controls
                  autoPlay
                  muted
                  loop
                  className="w-full max-w-[400px] rounded-2xl"
                />
              </div>

            </div>

            <p className="text-gray-400 mt-6">
              A walkthrough of the ShareSeat user journey.
            </p>

          </div>

        </div>

      </section>
      {/* FINAL UI SCREENS */}
      <section id="screens">

        <div className="max-w-7xl mx-auto px-6 py-24">

          <div className="flex justify-between items-center">

            <div>
              <p className="text-gray-500">
                Final UI Screens
              </p>

              <h2 className="text-5xl font-bold mt-3">
                The interface, end to end.
              </h2>
            </div>

            <p className="text-gray-500">
              Click any screen to enlarge
            </p>

          </div>

          <div className="grid md:grid-cols-2 gap-12 mt-16">

            {[
              frame2,
              frame5,
              frame8,
              frame16,
            ].map((screen, index) =>
            (
              <div
                key={index}
                onClick={() => setSelectedImage(screen)}
                className="border rounded-3xl p-6 hover:shadow-xl hover:-translate-y-2 transition duration-300 cursor-pointer"
              >

                <div className="bg-[#F5EFE6] rounded-2xl h-[500px] flex items-center justify-center overflow-hidden">

                  <img
                    src={screen}
                    alt={`Screen ${index + 1}`}
                    className="h-[420px] object-contain transition duration-300 hover:scale-105"
                  />

                </div>

                <div className="flex justify-between mt-5 text-sm">

                  <span className="font-medium text-gray-700">
                    {screenNames[index]}
                  </span>

                  <span className="text-blue-600 font-medium">
                    Enlarge
                  </span>

                </div>

              </div>
            ))}

          </div>

          <Link
            to="/shareseat-gallery"
            className="inline-block mt-10 text-blue-700 font-medium hover:underline"
          >
            View more...
          </Link>

        </div>

      </section>

      {/* PROJECT NAVIGATION */}
      <section>

        <div className="max-w-7xl mx-auto px-6 py-10 flex justify-between items-center">

          <div>

            <p className="text-gray-500 text-sm">
              Previous Project
            </p>

            <Link
              to="/music-healing"
              className="font-bold text-xl hover:translate-x-1 inline-block transition"
            >
              ← Music Healing
            </Link>

          </div>

          <div className="text-right">

            <p className="text-gray-500 text-sm">
              Next Project
            </p>

            <span className="font-bold text-xl text-gray-400">
              End of Projects
            </span>

          </div>

        </div>

      </section>
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[999] flex items-center justify-center p-8">

          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-20 right-10 bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition"
          >
            <FaTimes />
          </button>

          <img
            src={selectedImage}
            alt="Enlarged Screen"
            className="max-h-[85vh] max-w-[90vw] rounded-3xl shadow-2xl"
          />

        </div>
      )}

      {/* FOOTER */}
      <footer id="contact" className="border-t">

        <div className="max-w-7xl mx-auto px-6 py-10 flex justify-between items-center">

          <div className="flex items-center gap-3">

            <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
              S
            </div>

            <div>
              <h3 className="font-bold">
                R.SaranRaj
              </h3>

              <p className="text-gray-500">
                UI/UX Designer
              </p>
            </div>

          </div>

          <div className="flex flex-row gap-8 items-center">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/saran-raj-17a146293"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition"
            >
              <FaLinkedin size={20} />
              <span>LinkedIn</span>
            </a>

            {/* Email */}
            <a
              href="mailto:saranraj9738@gmail.com"
              className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition"
            >
              <HiOutlineMail size={20} />
              <span>Email</span>
            </a>

            
          </div>


        </div>

      </footer>

    </div>
  );
}