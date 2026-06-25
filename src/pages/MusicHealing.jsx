import musicHealingVideo from "./asset/music-healing-prototype.mp4";
import ff1 from "./asset/ff1.png";
import ff2 from "./asset/ff2.png";
import ff3 from "./asset/ff3.png";
import ff12 from "./asset/ff12.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  FaDownload,
  FaArrowLeft,
  FaLinkedin,
  FaBehance,
} from "react-icons/fa";

import { HiOutlineMail } from "react-icons/hi";


export default function MusicHealing() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  const screenNames = [
    "Home",
    "Wellness Category",
    "Upload Music",
    "Personalized Playback",
  ];

  return (
    <div className="bg-gradient-to-b from-blue-50 via-white to-gray-50 text-black min-h-screen font-sans">

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

            {["Work", "Case Study", "Screens", "Contact"].map((item) => (
              <li
                key={item}
                onClick={() => {
                  if (item === "Work") {
                    window.location.href = "/";
                  }

                  if (item === "Case Study") {
                    scrollToSection("case-study");
                  }

                  if (item === "Screens") {
                    scrollToSection("screens");
                  }

                  if (item === "Contact") {
                    navigate("/");

                    setTimeout(() => {
                      const section = document.getElementById("contact");
                      if (section) {
                        section.scrollIntoView({
                          behavior: "smooth",
                        });
                      }
                    }, 300);
                  }
                }}
                className="relative cursor-pointer px-4 py-2 rounded-full transition hover:text-blue-600"
              >
                <span className="absolute inset-0 bg-blue-50 rounded-full opacity-0 hover:opacity-100 transition"></span>

                <span className="relative z-10">
                  {item}
                </span>
              </li>
            ))}

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

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 pt-12 pb-24">

        {/* BACK */}
        <Link
          to="/"
          className="flex items-center gap-2 text-gray-500 hover:text-blue-600 transition"
        >
          <FaArrowLeft size={12} />

          Back to work
        </Link>

        {/* PROJECT INFO */}
        <div className="mt-10">

          <p className="text-gray-500">
            Personal Concept Project
          </p>

          <h1 className="text-6xl font-bold mt-3">
            Music Healing
          </h1>

          <p className="text-xl text-gray-600 mt-4 max-w-2xl">
            Transform your music into a personalized healing experience.
          </p>

        </div>

        {/* PROJECT META */}
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


      {/* SHOWCASE IMAGE */}
      <section className="border-t border-b py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="bg-[#F5EFE6] rounded-[36px] h-[650px] flex items-center justify-center overflow-hidden">

            <img
              src={ff1}
              alt="Music Healing Hero"
              className="h-[550px] object-contain transition duration-300 hover:scale-105"
            />

          </div>

        </div>

      </section>
      {/* OVERVIEW / PROBLEM / SOLUTION */}
      {/* OVERVIEW / PROBLEM / SOLUTION */}
      <section
        id="case-study"
        className="max-w-7xl mx-auto px-6 py-24 scroll-mt-24"
      >

        <div className="grid lg:grid-cols-3 gap-12">

          {/* Overview */}
          <div>

            <p className="text-blue-600 text-sm font-medium">
              01
            </p>

            <h3 className="text-2xl font-bold mt-2">
              Project Overview
            </h3>

            <p className="text-gray-600 leading-relaxed mt-4">
              Music Healing is a frequency-based wellness application
              that allows users to upload their preferred music and
              transform it into personalized listening experiences.
              By selecting wellness goals such as stress relief,
              relaxation, focus, or headache support, users can apply
              tailored frequency adjustments to create a more
              intentional and calming audio experience.
            </p>

          </div>

          {/* Problem */}
          <div>

            <p className="text-blue-600 text-sm font-medium">
              02
            </p>

            <h3 className="text-2xl font-bold mt-2">
              Problem Statement
            </h3>

            <p className="text-gray-600 leading-relaxed mt-4">
              People often rely on music to improve their mood and
              well-being, yet existing music platforms lack tools that
              adapt listening experiences to individual wellness needs.
              Users need a simple way to transform their preferred music
              into personalized, frequency-adjusted audio experiences
              that support relaxation, focus, and emotional wellness.
            </p>

          </div>

          {/* Solution */}
          <div>

            <p className="text-blue-600 text-sm font-medium">
              03
            </p>

            <h3 className="text-2xl font-bold mt-2">
              Solution
            </h3>

            <p className="text-gray-600 leading-relaxed mt-4">
              Music Healing addresses this challenge by allowing users
              to upload their preferred music and apply frequency-based
              adjustments tailored to specific wellness goals such as
              relaxation, stress relief, focus, and sleep support.
              Through a guided experience, users can create meaningful
              listening sessions aligned with their personal wellness
              needs.
            </p>

          </div>

        </div>

      </section>

      {/* DESIGN PROCESS */}
      <section className="border-t">

        <div className="max-w-7xl mx-auto px-6 py-24">

          <p className="text-gray-500">
            Design Process
          </p>

          <h2 className="text-5xl font-bold mt-3">
            How the project came together.
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">

            <div className="border rounded-3xl p-8 hover:shadow-xl hover:-translate-y-2 transition duration-300">
              <h3 className="font-bold text-xl">
                Problem Identification
              </h3>

              <p className="mt-4 text-gray-500">
                Most music platforms focus on entertainment.
                Music Healing explores a personalized wellness
                experience by allowing users to apply frequency
                adjustments to preferred music.
              </p>
            </div>

            <div className="border rounded-3xl p-8 hover:shadow-xl hover:-translate-y-2 transition duration-300">
              <h3 className="font-bold text-xl">
                User Flow Planning
              </h3>

              <p className="mt-4 text-gray-500">
                Users start by selecting a wellness category,
                learn about frequency benefits, upload music,
                and access a personalized playback experience.
              </p>
            </div>

            <div className="border rounded-3xl p-8 hover:shadow-xl hover:-translate-y-2 transition duration-300">
              <h3 className="font-bold text-xl">
                High-Fidelity Design
              </h3>

              <p className="mt-4 text-gray-500">
                Clean layouts and minimal interactions were
                designed to keep users focused on wellness
                rather than overwhelming interface elements.
              </p>
            </div>

            <div className="border rounded-3xl p-8 hover:shadow-xl hover:-translate-y-2 transition duration-300">
              <h3 className="font-bold text-xl">
                Visual Design System
              </h3>

              <p className="mt-4 text-gray-500">
                A calming visual style using warm colors,
                rounded cards, and accessible typography
                creates an inviting experience.
              </p>
            </div>

            <div className="border rounded-3xl p-8 hover:shadow-xl hover:-translate-y-2 transition duration-300">
              <h3 className="font-bold text-xl">
                Final Prototype
              </h3>

              <p className="mt-4 text-gray-500">
                Users can explore wellness categories,
                upload music, experience frequency-based
                playback, and access educational content.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* USER FLOW */}
      <section className="border-t">

        <div className="max-w-7xl mx-auto px-6 py-24">

          <p className="text-gray-500">
            User Flow
          </p>

          <h2 className="text-5xl font-bold mt-3">
            The path through the product.
          </h2>

          <div className="flex flex-wrap items-center gap-3 mt-12">

            {[
              "01 Home",
              "02 Select Wellness Category",
              "03 Learn About Frequency",
              "04 Upload Music",
              "05 Personalized Playback",
            ].map((step, index, array) => (
              <div key={step} className="flex items-center gap-3">

                <div className="px-5 py-3 border rounded-full text-sm hover:bg-gray-100 transition">
                  {step}
                </div>

                {index !== array.length - 1 && (
                  <span className="text-gray-400 text-lg">
                    →
                  </span>
                )}

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* PROTOTYPE VIDEO */}
      <section>

        <div className="max-w-7xl mx-auto px-6 pb-24">

          <div className="bg-black rounded-[32px] p-8 lg:p-10">

            <div className="mb-6">

              <p className="text-gray-400 text-sm">
                Prototype
              </p>

              <h3 className="text-white text-3xl font-bold mt-2">
                See the flow in motion
              </h3>

            </div>

            <div className="flex justify-center">
              <video
                src={musicHealingVideo}
                controls
                autoPlay
                muted
                loop
                className="w-full max-w-[400px] rounded-2xl"
              />
            </div>
            <p className="text-gray-400 mt-4">
              Walkthrough of the core flow — selecting a wellness
              goal, learning about frequencies, uploading music,
              and entering the personalized playback experience.
            </p>

          </div>

        </div>

      </section>
      {/* FINAL SCREENS */}
      {/* FINAL SCREENS */}
      {/* FINAL SCREENS */}
      <section
        id="screens"
        className="scroll-mt-24"
      >

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
              ff1,
              ff2,
              ff3,
              ff12,
            ].map((screen, index) => (
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

                <div className="flex justify-between mt-5 text-sm text-gray-500">

                  <span>
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
            to="/music-healing-gallery"
            className="mt-10 inline-block text-blue-700 font-medium hover:underline"
          >
            View more...
          </Link>

        </div>

      </section>

      <section>

        <div className="max-w-7xl mx-auto px-6 py-10 flex justify-between items-center">

          <div>

            <p className="text-gray-500 text-sm">
              Previous Project
            </p>

            <span className="font-bold text-xl text-gray-400">
              Start of Projects
            </span>

          </div>

          <div className="text-right">

            <p className="text-gray-500 text-sm">
              Next Project
            </p>

            <Link
              to="/shareseat"
              className="font-bold text-xl hover:translate-x-1 inline-block transition"
            >
              ShareSeat →
            </Link>

          </div>

        </div>

      </section>
      {selectedImage && (
        <div className="fixed inset-0 z-[999] bg-black/80 flex items-center justify-center p-6">

          <div className="relative max-w-4xl w-full flex justify-center">

            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 w-12 h-12 bg-white text-black rounded-full flex items-center justify-center text-xl font-bold hover:bg-gray-200 transition shadow-lg"
            >
              ✕
            </button>
            <img
              src={selectedImage}
              alt="Enlarged Screen"
              className="max-h-[90vh] rounded-3xl shadow-2xl"
            />

          </div>

        </div>
      )}


      {/* FOOTER */}
      <footer className="border-t">

        <div className="max-w-7xl mx-auto px-6 py-12">

          <div className="flex flex-col md:flex-row justify-between items-center gap-8">

            <div>

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

        </div>

      </footer>

    </div>
  );
}