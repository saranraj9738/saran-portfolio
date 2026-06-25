import frame1 from "./asset/frame1.png";
import frame2 from "./asset/frame2.png";
import frame3 from "./asset/frame3.png";
import frame4 from "./asset/frame4.png";
import frame5 from "./asset/frame5.png";
import frame6 from "./asset/frame6.png";
import frame7 from "./asset/frame7.png";
import frame8 from "./asset/frame8.png";
import frame11 from "./asset/frame11.png";
import frame17 from "./asset/frame17.png";
import frame13 from "./asset/frame13.png";
import frame16 from "./asset/frame16.png";
import frame21 from "./asset/frame21.png";
import frame15 from "./asset/framer15.png";
import frame18 from "./asset/frame18.png";
import frame14 from "./asset/frame14.png";
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
export default function ShareSeatGallery() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const screens = [
    frame1,
    frame2,
    frame3,
    frame5,
    frame6,
    frame7,
    frame4,
    frame8,
    frame17,
    frame13,
    frame18,
    frame11,
    frame14,
    frame16,
    frame21,
    frame15

  ];
  const screenNames = [
    "Welcome",
    "Get OTP",
    "OTP Verification",
    "Complete Profile",
    "Gender Selection",

    "Create Profile",
    "Location Access",
    "Offer/Find Ride",

    "Offer Ride Setup",
    "Location Selection",

    "Loading",
    "Find Ride Setup",

    "Date Selection",
    "Available Rides",

    "Ride Details",
    "Profile",
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (index) => {
    setSelectedImage(index);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    setSelectedImage((prev) =>
      prev === screens.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setSelectedImage((prev) =>
      prev === 0 ? screens.length - 1 : prev - 1
    );
  };

  const goToHomeSection = (id) => {
    navigate("/");

    setTimeout(() => {
      const section = document.getElementById(id);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
        });
      }
    }, 300);
  };

  return (
    <div className="bg-gradient-to-b from-blue-50 via-white to-gray-50 text-black min-h-screen font-sans">

      {/* IMAGE MODAL */}

      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-6">

          <button
            onClick={closeImage}
            className="absolute top-6 right-6 text-white text-2xl hover:scale-110 transition"
          >
            <FaTimes />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-6 text-white text-3xl hover:scale-110 transition"
          >
            <FaChevronLeft />
          </button>

          <img
            src={screens[selectedImage]}
            alt="Preview"
            className="max-h-[90vh] max-w-[90vw] rounded-3xl shadow-2xl"
          />

          <button
            onClick={nextImage}
            className="absolute right-6 text-white text-3xl hover:scale-110 transition"
          >
            <FaChevronRight />
          </button>



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

          <ul className="hidden md:flex gap-6 text-gray-700">

            <li
              onClick={() => goToHomeSection("work")}
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
              onClick={() => goToHomeSection("contact")}
              className="relative cursor-pointer px-4 py-2 rounded-full transition hover:text-blue-600"
            >
              <span className="absolute inset-0 bg-blue-50 rounded-full opacity-0 hover:opacity-100 transition"></span>

              <span className="relative z-10">
                Contact
              </span>
            </li>

          </ul>

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

      {/* HEADER */}

      <section className="max-w-7xl mx-auto px-6 pt-10">

        <Link
          to="/shareseat"
          className="text-gray-500 hover:text-blue-600 transition"
        >
          ← Back to work
        </Link>

        <p className="mt-8 text-gray-500">
          Personal Concept Project
        </p>

        <h1 className="text-6xl font-bold mt-3">
          ShareSeat
        </h1>

        <p className="text-xl text-gray-600 mt-4">
          Share the ride. Split the cost. Travel further, together.
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

      <section
        id="screens"
        className="max-w-7xl mx-auto px-6 mt-20"
      >

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

      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-2 gap-x-28 gap-y-20">

          {screens.map((screen, index) => (

            <div
              key={index}
              onClick={() => openImage(index)}
              className="group cursor-pointer flex justify-center"
            >

              <div className="w-[320px] rounded-[28px] overflow-hidden border bg-white hover:shadow-xl hover:-translate-y-2 transition duration-300">

                <div className="bg-[#0EA5E9] p-8 flex justify-center">

                  <img
                    src={screen}
                    alt={`Screen ${index + 1}`}
                    className="w-[170px] h-auto object-contain group-hover:scale-105 transition duration-300"
                  />

                </div>

                <div className="flex justify-between items-center px-5 py-4">

                  <span className="text-sm text-gray-700">
                    {screenNames[index]}
                  </span>

                  <span className="text-sm text-blue-600 font-medium group-hover:translate-x-1 transition">
                    Enlarge →
                  </span>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* NEXT PROJECT */}

      <section className="max-w-7xl mx-auto px-6 pb-24">

        <div className="border-t pt-12">

          <p className="text-gray-500 text-sm">
            ShareSeat
          </p>

          <Link
            to="/shareseat"
            className="font-bold text-xl hover:text-blue-600 transition inline-flex items-center gap-2"
          >
            ← Case Study
          </Link>

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