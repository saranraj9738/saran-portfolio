import profilePhoto from "./pages/asset/saran.png";
import emailjs from "@emailjs/browser";
import ff1 from "./pages/asset/ff1.png";
import frame1 from "./pages/asset/frame1.png";
import { useState } from "react";
import ShareSeatGallery from "./pages/ShareSeatGallery";
import MusicHealingGallery from "./pages/MusicHealingGallery";
import ShareSeat from "./pages/ShareSeat";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import MusicHealing from "./pages/MusicHealing";
import {
  FaDownload,
  FaPaperPlane,
  FaLinkedin,
  FaBehance,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FiExternalLink } from "react-icons/fi";

export default function App() {
  const [active, setActive] = useState("work");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const services = [
    "User Experience Design",
    "User Interface Design",
    "Wireframing",
    "Interactive Prototyping",
    "User Flow Design",
    "Responsive Design",
    "Mobile App Design",
    "Figma",
  ];


  // ✅ Smooth scroll function
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.send(
      "service_kgte9mm",
      "template_5tua4af",
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        title: "Portfolio Contact",
      },
      "ERRc8Hmk2ZQo3nG5W"
    )
      .then(() => {
        alert("Message sent successfully!");

        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        console.log(error);
        alert("Failed to send message");
      });
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="bg-gradient-to-br from-slate-100 via-blue-50 to-white text-black min-h-screen font-sans">

            {/* Navbar */}
            <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

              {/* Logo */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center font-bold hover:scale-110 transition">
                  S
                </div>

                <h1 className="font-bold text-lg hover:tracking-wider transition">
                  R.SaranRaj - UI/UX Designer
                </h1>
              </div>

              {/* Nav items (UPDATED) */}
              <ul className="hidden md:flex gap-6 text-gray-700">
                {[
                  { name: "Work", id: "work" },
                  { name: "About", id: "about" },
                  { name: "Skills", id: "what-i-bring" },
                  { name: "Contact", id: "contact" },
                ].map((item) => (
                  <li
                    key={item.name}
                    onClick={() => {
                      setActive(item.id);
                      scrollToSection(item.id);
                    }}
                    className="relative cursor-pointer px-4 py-2 rounded-full transition hover:text-blue-600"
                  >
                    {/* hover background */}
                    <span className="absolute inset-0 bg-blue-50 rounded-full opacity-0 hover:opacity-100 transition"></span>

                    <span className="relative z-10">
                      {item.name}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Resume button */}
              <a
                href="resume.pdf"
                download="SaranRaj_Resume1.pdf"
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
              >
                <FaDownload />
                Resume
              </a>
            </nav>

            {/* Hero */}
            <section className="max-w-7xl mx-auto px-6 py-24">
              <div className="grid lg:grid-cols-2 gap-16 items-center">

                <div>
                  <span className="bg-gray-100 px-4 py-2 rounded-full text-sm hover:scale-105 transition inline-block">
                    Available for opportunities
                  </span>

                  <h1 className="text-6xl font-bold mt-6 leading-tight">
                    Designing clean,
                    <br />
                    intentional
                    <br />
                    experiences
                  </h1>

                  <p className="mt-6 text-gray-600 max-w-lg">
                    UI/UX Designer passionate about creating intuitive digital products and meaningful user experiences.
                  </p>

                  <div className="flex gap-4 mt-8">
                    <div className="flex gap-4 mt-8">

                      {/* CONTACT BUTTON */}
                      <button
                        onClick={() => scrollToSection("contact")}
                        className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full hover:scale-105 hover:bg-blue-700 transition"
                      >
                        <HiOutlineMail />
                        Contact Me
                      </button>

                      {/* PROJECT BUTTON */}
                      <button
                        onClick={() => scrollToSection("work")}
                        className="flex items-center gap-2 bg-gray-100 px-6 py-3 rounded-full hover:bg-gray-200 hover:scale-105 transition"
                      >
                        <FiExternalLink />
                        View Projects
                      </button>

                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-center">

                  <img
                    src={profilePhoto}
                    alt="R.SaranRaj"
                    className="w-[350px] h-[350px] rounded-3xl object-cover hover:scale-105 transition duration-300 shadow-lg"
                  />

                  <div className="mt-5 text-center">

                    <h3 className="text-2xl font-bold text-gray-900">
                      R.SaranRaj
                    </h3>

                    <p className="text-blue-600 font-medium mt-1">
                      UI/UX Designer
                    </p>

                  </div>

                </div>
              </div>
            </section>

            {/* Skills Bar START (we continue in Part 2) */}

            {/* ABOUT SECTION (UPDATED) */}
            <section id="about" className="max-w-7xl mx-auto px-6 py-24 border-b">

              <div className="grid md:grid-cols-2 gap-16 items-center">

                {/* Left text */}
                <div>
                  <h2 className="text-5xl font-bold">
                    About Me
                  </h2>

                  <p className="mt-6 text-gray-600 leading-relaxed">
                    I am a passionate UI/UX Designer focused on creating clean,
                    user-friendly, and meaningful digital experiences.
                    I enjoy solving real user problems through research,
                    wireframing, prototyping, and visual design.
                  </p>

                  <p className="mt-4 text-gray-600 leading-relaxed">
                    My goal is to design interfaces that are not only beautiful
                    but also intuitive and accessible for everyone.
                  </p>

                  <div className="flex gap-4 mt-8 flex-wrap">
                    <span className="px-4 py-2 bg-gray-100 rounded-full text-sm hover:scale-105 transition">
                      Problem Solver
                    </span>

                    <span className="px-4 py-2 bg-gray-100 rounded-full text-sm hover:scale-105 transition">
                      Creative Thinker
                    </span>

                    <span className="px-4 py-2 bg-gray-100 rounded-full text-sm hover:scale-105 transition">
                      UI/UX Designer
                    </span>
                  </div>
                </div>

                {/* Right stats */}
                <div className="grid grid-cols-2 gap-6">

                  <div className="p-8 border rounded-3xl hover:shadow-xl hover:-translate-y-2 transition">
                    <h3 className="text-4xl font-bold">Focus</h3>
                    <p className="text-gray-500 mt-2">UI/UX Design</p>
                  </div>

                  <div className="p-8 border rounded-3xl hover:shadow-xl hover:-translate-y-2 transition">
                    <h3 className="text-4xl font-bold">Tool</h3>
                    <p className="text-gray-500 mt-2">Figma</p>
                  </div>

                  <div className="p-8 border rounded-3xl hover:shadow-xl hover:-translate-y-2 transition">
                    <h3 className="text-4xl font-bold">Status</h3>
                    <p className="text-gray-500 mt-2">Open to roles</p>
                  </div>

                  <div className="p-8 border rounded-3xl hover:shadow-xl hover:-translate-y-2 transition">
                    <h3 className="text-4xl font-bold">Location</h3>
                    <p className="text-gray-500 mt-2">India</p>
                  </div>

                </div>
              </div>
            </section>

            {/* WORK / PROJECTS SECTION (UPDATED ID = work) */}
            <section id="work" className="bg-slate-50 py-24">
              <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-5xl font-bold">Featured Projects</h2>

                <div className="grid md:grid-cols-2 gap-10 mt-14">

                  {[
                    {
                      img: ff1,
                      title: "Music Healing",
                      desc: "Relaxation and music therapy app concept.",
                    },
                    {
                      img: frame1,
                      title: "ShareSeat",
                      desc: "Ride-sharing mobile app concept.",
                    },
                  ].map((project) => (
                    <Link
                      key={project.title}
                      to={
                        project.title === "Music Healing"
                          ? "/music-healing"
                          : "/shareseat"
                      }
                    >
                      <div className="group cursor-pointer">

                        <div className="overflow-hidden rounded-3xl">
                          <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-[#0F172A] to-[#1E293B] h-[460px] flex items-center justify-center">
                            <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-[#0F172A] to-[#1E293B] h-[460px] flex items-center justify-center">
                              <img
                                src={project.img}
                                alt={project.title}
                                className="max-w-[85%] max-h-[85%] object-contain group-hover:scale-105 transition duration-300"
                              />
                            </div>
                          </div>
                        </div>
                        <h3 className="text-3xl font-bold mt-5 group-hover:translate-x-1 transition">
                          {project.title}
                        </h3>

                        <p className="text-gray-600 mt-3">
                          {project.desc}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </section>

            {/* SERVICES / SKILLS GRID (UPDATED ID = skills already used above) */}
            <section id="what-i-bring" className="scroll-mt-24">
              <div className="max-w-7xl mx-auto px-6 py-24">
                <h2 className="text-5xl font-bold">What I Bring</h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
                  {services.map((item) => (
                    <div
                      key={item}
                      className="bg-white/70 backdrop-blur-md border border-white/40 rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300"
                    >
                      <h3 className="font-bold text-xl">
                        {item}
                      </h3>

                      <div className="w-12 h-1 bg-blue-600 rounded-full mt-4"></div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
            {/* CONTACT SECTION (UPDATED ID = contact) */}
            <section id="contact" className="border-t">
              <div className="max-w-7xl mx-auto px-6 py-24">

                <div className="grid md:grid-cols-2 gap-16 items-start">

                  {/* LEFT SIDE */}
                  <div>

                    <span className="text-gray-500 font-medium">
                      Contact Me
                    </span>

                    <h2 className="text-5xl font-bold mt-3">
                      Let’s build
                      <br />
                      something thoughtful
                    </h2>

                    <p className="text-gray-600 mt-6 text-lg leading-relaxed">
                      Open to UI/UX Designer opportunities where I can contribute,
                      learn and create impactful user experiences.
                    </p>

                    <p className="text-gray-600 mt-4 text-lg leading-relaxed">
                      Let’s connect and build something great together.
                    </p>

                    <div className="mt-8">
                      <span className="px-4 py-2 bg-gray-100 rounded-full text-sm hover:scale-105 transition inline-block">
                        Available for Freelance / Internships
                      </span>
                    </div>

                  </div>

                  {/* RIGHT SIDE - FORM */}
                  <div>

                    <form onSubmit={sendEmail} className="space-y-5">

                      <input
                        type="text"
                        placeholder="Name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            name: e.target.value,
                          })
                        }
                        className="w-full border rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-black transition"
                      />

                      <input
                        type="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            email: e.target.value,
                          })
                        }
                        className="w-full border rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-black transition"
                      />

                      <textarea
                        rows="6"
                        placeholder="Message"
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            message: e.target.value,
                          })
                        }
                        className="w-full border rounded-3xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-black transition"
                      ></textarea>

                      <button
                        type="submit"
                        className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full hover:scale-105 hover:bg-blue-700 transition"
                      >
                        <FaPaperPlane />
                        Send Message
                      </button>

                    </form>

                  </div>

                </div>
              </div>
            </section>

            {/* FOOTER */}
            <footer className="border-t">
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
        }
      />

      {/* ROUTES (UNCHANGED - IMPORTANT) */}
      <Route path="/music-healing" element={<MusicHealing />} />
      <Route path="/shareseat" element={<ShareSeat />} />
      <Route path="/music-healing-gallery" element={<MusicHealingGallery />} />
      <Route path="/shareseat-gallery" element={<ShareSeatGallery />} />
    </Routes>
  );
}