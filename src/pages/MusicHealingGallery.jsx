import ff1 from "./asset/ff1.png";
import ff2 from "./asset/ff2.png";
import ff3 from "./asset/ff3.png";
import ff4 from "./asset/ff4.png";
import ff5 from "./asset/ff5.png";
import ff6 from "./asset/ff6.png";
import ff7 from "./asset/ff7.png";
import ff8 from "./asset/ff8.png";
import ff9 from "./asset/ff9.png";
import ff10 from "./asset/ff10.png";
import ff11 from "./asset/ff11.png";
import ff12 from "./asset/ff12.png";
import ff13 from "./asset/ff13.png";

import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  FaDownload,
  FaPaperPlane,
  FaLinkedin,
  FaBehance,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function MusicHealingGallery() {
  const navigate = useNavigate();

  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const screens = [
    ff1,
    ff2,
    ff3,
    ff4,
    ff5,
    ff6,
    ff7,
    ff8,
    ff12,
    ff13,
    ff11,
    ff10,
    ff9,
  ];

  const nextImage = () => {
    if (selectedImage === null) return;

    setSelectedImage(
      selectedImage === screens.length - 1
        ? 0
        : selectedImage + 1
    );
  };

  const previousImage = () => {
    if (selectedImage === null) return;

    setSelectedImage(
      selectedImage === 0
        ? screens.length - 1
        : selectedImage - 1
    );
  };
  const screenNames = [
    "Home",
    "Wellness Categories",
    "Headache Relief",
    "Backpain",
    "Anxiety",
    "Motivation",
    "Negativity",
    "Refreshed",
    "Session Ready",
    "Active Session",
    "About Us",
    "Blogs",
    "Stress Relief",
  ];
  return (
    <div className="bg-gradient-to-b from-blue-50 via-white to-gray-50 text-black min-h-screen font-sans">

      {/* IMAGE MODAL */}

      {selectedImage !== null && (
        <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center px-6">

          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-8 right-8 bg-white text-black w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition"
          >
            <FaTimes />
          </button>

          <button
            onClick={previousImage}
            className="absolute left-8 bg-white text-black w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition"
          >
            <FaChevronLeft />
          </button>

          <img
            src={screens[selectedImage]}
            alt="Preview"
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-3xl shadow-2xl"
          />

          <button
            onClick={nextImage}
            className="absolute right-8 bg-white text-black w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition"
          >
            <FaChevronRight />
          </button>

          <div className="absolute bottom-8 text-white text-sm">
            Screen {selectedImage + 1} / {screens.length}
          </div>
          \
        </div>
      )}

      {/* NAVBAR */}

      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">

        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          <div className="flex items-center gap-3">

            <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold hover:scale-110 transition">
              S
            </div>

            <h1 className="font-bold text-lg">
              R.SaranRaj - UI/UX Designer
            </h1>

          </div>

          <ul className="hidden md:flex gap-10 text-gray-700">

            <li
              onClick={() => navigate("/")}
              className="relative cursor-pointer px-4 py-2 rounded-full transition hover:text-blue-600"
            >
              <span className="absolute inset-0 bg-blue-50 rounded-full opacity-0 hover:opacity-100 transition"></span>

              <span className="relative z-10">
                Work
              </span>
            </li>
            <li
              onClick={() => {
                const section = document.getElementById("screens");

                if (section) {
                  section.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
              }}
              className="relative cursor-pointer px-4 py-2 rounded-full transition hover:text-blue-600"
            >
              <span className="absolute inset-0 bg-blue-50 rounded-full opacity-0 hover:opacity-100 transition"></span>

              <span className="relative z-10">
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
              className="relative cursor-pointer px-4 py-2 rounded-full transition hover:text-blue-600"
            >
              <span className="absolute inset-0 bg-blue-50 rounded-full opacity-0 hover:opacity-100 transition"></span>

              <span className="relative z-10">
                Contact
              </span>
            </li>

          </ul>

          <a
            href="/resume.pdf"
            download="SaranRaj_Resume.pdf"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            <FaDownload />
            Resume
          </a>
        </div>

      </nav>

      {/* HEADER */}

      <section className="max-w-7xl mx-auto px-6 pt-12">

        <Link
          to="/music-healing"
          className="text-gray-500 hover:text-blue-600 transition"
        >
          ← Back to work
        </Link>

        <p className="mt-8 text-gray-500">
          Personal Concept Project
        </p>

        <h1 className="text-6xl font-bold mt-3">
          Music Healing
        </h1>

        <p className="text-xl text-gray-600 mt-4 max-w-2xl">
          Transform your music into a personalized healing experience.
        </p>

        <div className="mt-10 border rounded-2xl overflow-hidden max-w-3xl">

          <div className="grid grid-cols-3">

            <div className="p-5 border-r">

              <p className="text-sm text-gray-400">
                Role
              </p>

              <p className="font-medium mt-1">
                UI/UX Design
              </p>

            </div>

            <div className="p-5 border-r">

              <p className="text-sm text-gray-400">
                Type
              </p>

              <p className="font-medium mt-1">
                Personal Concept Project
              </p>

            </div>

            <div className="p-5">

              <p className="text-sm text-gray-400">
                Tool
              </p>

              <p className="font-medium mt-1">
                Figma
              </p>

            </div>

          </div>

        </div>

      </section>
      {/* SCREENS HEADER */}

      <section className="max-w-7xl mx-auto px-6 mt-20">

        <div className="flex justify-between items-center">

          <div>

            <p className="text-gray-500">
              Final UI Screens
            </p>

            <h2 className="text-5xl font-bold mt-4">
              The interface, end to end.
            </h2>

          </div>

          <p className="text-gray-500">
            Click any screen to enlarge
          </p>

        </div>

      </section>

      {/* GALLERY GRID */}

      <section
        id="screens"
        className="max-w-7xl mx-auto px-6 py-20"
      >

        <div className="grid md:grid-cols-2 gap-x-28 gap-y-20">

          {screens.map((screen, index) => (

            <div
              key={index}
              onClick={() => setSelectedImage(index)}
              className="group cursor-pointer flex justify-center"
            >

              <div className="w-[320px] rounded-[28px] overflow-hidden border bg-white hover:shadow-xl hover:-translate-y-2 transition duration-300">

                {/* DEVICE AREA */}

                <div className="bg-[#D89B12] p-8 flex justify-center">

                  <img
                    src={screen}
                    alt={`Screen ${index + 1}`}
                    className="w-[170px] h-auto object-contain group-hover:scale-105 transition duration-300"
                  />

                </div>

                {/* CARD FOOTER */}

                <div className="flex justify-between items-center px-5 py-4">

                  <span className="text-sm text-gray-700">
                    {screenNames[index]}
                  </span>

                  <span className="text-sm text-blue-600 font-medium group-hover:text-blue-700 transition">
                    Enlarge
                  </span>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* PROJECT NAVIGATION */}

      <section className="max-w-7xl mx-auto px-6 pb-24">

        <div className="flex justify-between items-center border-t pt-12">

          <div>

            <p className="text-gray-500 text-sm">
              Music Healing
            </p>

            <Link
              to="/music-healing"
              className="font-bold text-xl hover:text-blue-600 transition"
            >
              ← Back to Case Study
            </Link>

          </div>

          <div className="text-right">

            <p className="text-gray-500 text-sm">
              Next Project
            </p>

            <Link
              to="/shareseat"
              className="font-bold text-xl hover:text-blue-600 transition"
            >
              ShareSeat →
            </Link>

          </div>

        </div>

      </section>
      {/* FOOTER */}

      <footer className="border-t border-gray-200">

        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-10">

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
          <div className="flex flex-col md:flex-row gap-4 text-gray-600">

            <a
              href="https://www.linkedin.com/in/saran-raj-17a146293"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-blue-600 transition"
            >
              <FaLinkedin size={20} />
              <span>LinkedIn</span>
            </a>

            <a
              href="mailto:saranraj9738@gmail.com"
              className="flex items-center gap-2 hover:text-blue-600 transition"
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