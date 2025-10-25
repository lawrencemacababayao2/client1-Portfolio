import React, { useRef, useEffect, useState } from "react";
import logo from "../assets/gfhfghfgh.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import profilepic from '../assets/profile-removebg-preview.png'
import project1 from '../assets/project1.jpg'
import project2 from '../assets/project2.jpg'
import project3 from '../assets/project3.jpg'
import project4 from '../assets/project4.jpg'

const Portfolio = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const achievementsRef = useRef(null);
  const contactRef = useRef(null);

  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
      
    }
  };
  document.addEventListener("mousedown", handleClickOutside);
  return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


  const [active, setActive] = useState("home");
  const [scrolling, setScrolling] = useState(false);

  const sections = [
    { id: "home", ref: homeRef },
    { id: "about", ref: aboutRef },
    { id: "projects", ref: projectsRef },
    { id: "skills", ref: skillsRef },
    { id: "achievements", ref: achievementsRef },
    { id: "contact", ref: contactRef },
  ];

  const scrollTo = (ref, id) => {
    setScrolling(true);
    setActive(id);
    ref.current?.scrollIntoView({ behavior: "smooth" });
    window.history.replaceState(null, "", `#${id}`);
    setTimeout(() => setScrolling(false), 900);
  };


  const handleScroll = () => {
    if (scrolling) return;
    sections.forEach((section) => {
      const top = section.ref.current.getBoundingClientRect().top;
      const height = section.ref.current.offsetHeight;
      if (top <= window.innerHeight / 2 && top + height > window.innerHeight / 2) {
        setActive(section.id);
      }
    });
  };


  

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = (id) =>
    `relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-[#D4AF37] after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full ${
      active === id ? "after:left-0 after:w-full" : ""
    }`;

    useEffect(() => {
  const hash = window.location.hash.replace("#", "");
  if (hash) {
    setActive(hash);
    const section = sections.find((sec) => sec.id === hash);
    if (section?.ref.current) {
      section.ref.current.scrollIntoView({ behavior: "instant" });
    }
  } else {
    // fallback: detect section in view after small delay
    handleScroll();
  }
}, []);


  return (
    <div className="w-full min-h-screen bg-[#0F0F0F] overflow-x-hidden">
      <nav className="w-full h-14 md:h-16 bg-black flex fixed z-50">
        <div className="w-fit flex items-center gap-2 pl-10 md:pl-20">
          <img onClick={() => scrollTo(homeRef)} src={logo} alt="logo" className="w-10 cursor-pointer" />
        </div>
        <div className="w-fit flex-1 ">
          
        </div>
        <div className="w-fit flex justify-start">
            <div className="relative md:hidden" ref={menuRef}>

  {/* Burger Icon */}
  <FontAwesomeIcon
    icon={faBars}
    onClick={() => setMenuOpen(!menuOpen)} // toggle open/close
    className="text-white/80 text-3xl cursor-pointer absolute right-10 top-3 z-50 "
  />

  {/* Dropdown Menu */}
  {menuOpen && (
    <div className="flex flex-col overflow-hidden w-60 rounded-bl-2xl bg-black text-white mt-14 absolute right-0 top-0 transition-all duration-300 shadow-lg shadow-[#D4AF37]/40">
      <a
        href="#home"
        onClick={() => {
          scrollTo(homeRef);
          setMenuOpen(false);
        }}
        className={`pl-5 pt-3 pb-3 text-xl transition-colors duration-200 ${
          active === "home" ? "bg-yellow-500 text-black" : "hover:bg-yellow-500/30"
        }`}
      >
        Home
      </a>

      <a
        href="#about"
        onClick={() => {
          scrollTo(aboutRef);
          setMenuOpen(false);
        }}
        className={`pl-5 pt-3 pb-3 text-xl transition-colors duration-200 ${
          active === "about" ? "bg-yellow-500 text-black" : "hover:bg-yellow-500/30"
        }`}
      >
        About
      </a>

      <a
        href="#projects"
        onClick={() => {
          scrollTo(projectsRef);
          setMenuOpen(false);
        }}
        className={`pl-5 pt-3 pb-3 text-xl transition-colors duration-200 ${
          active === "projects" ? "bg-yellow-500 text-black" : "hover:bg-yellow-500/30"
        }`}
      >
        Projects
      </a>

      <a
        href="#skills"
        onClick={() => {
          scrollTo(skillsRef);
          setMenuOpen(false);
        }}
        className={`pl-5 pt-3 pb-3 text-xl transition-colors duration-200 ${
          active === "skills" ? "bg-yellow-500 text-black" : "hover:bg-yellow-500/30"
        }`}
      >
        Skills
      </a>

      <a
        href="#achievements"
        onClick={() => {
          scrollTo(achievementsRef);
          setMenuOpen(false);
        }}
        className={`pl-5 pt-3 pb-3 text-xl transition-colors duration-200 ${
          active === "achievements" ? "bg-yellow-500 text-black" : "hover:bg-yellow-500/30"
        }`}
      >
        Achievements
      </a>

      <a
        href="#contact"
        onClick={() => {
          scrollTo(contactRef);
          setMenuOpen(false);
        }}
        className={`pl-5 pt-3 pb-3 text-xl transition-colors duration-200 ${
          active === "contact" ? "bg-yellow-500 text-black" : "hover:bg-yellow-500/30"
        }`}
      >
        Contact
      </a>
    </div>
  )}
</div>
            
          <ul className="text-white/80 hidden md:flex md:gap-5 lg:gap-10 items-center text-sm md:text-md w-full md:mr-10 justify-center lg:mr-20 font-medium">
            <li>
              <a href="#home" onClick={() => scrollTo(homeRef)} className={linkClass("home")}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={() => scrollTo(aboutRef)} className={linkClass("about")}>
                About
              </a>
            </li>
            <li>
              <a href="#projects" onClick={() => scrollTo(projectsRef)} className={linkClass("projects")}>
                Projects
              </a>
            </li>
            <li>
              <a href="#skills" onClick={() => scrollTo(skillsRef)} className={linkClass("skills")}>
                Skills
              </a>
            </li>
            <li>
              <a href="#achievements" onClick={() => scrollTo(achievementsRef)} className={linkClass("achievements")}>
                Achievements
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => scrollTo(contactRef)} className={linkClass("contact")}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <section ref={homeRef} className="bg-[#0F0F0F] w-full h-screen  flex md:flex-row justify-center items-center lg:p-30 md:p-20">
        <div className="w-full md:100 lg:h-120 mt-15 flex flex-col md:flex-row text-center md:text-start">
            <div className="leftside order-2 md:order-1 flex-1 p-10 pt-0 lg:p-20 md:pt-15 flex flex-col items-center md:items-start">
                <p className="text-2xl md:text-5xl lg:text-6xl text-white/80 w-120 font-bold">Hi, I'm <span className="text-[#D4AF37]">Jhon Pet Varquez</span></p>
                <p className="text-white/80 mt-5 text-xl font-normal">Agribusiness graduate dedicated to sustainable and innovative approaches in agriculture.</p>
                <button onClick={() => scrollTo(aboutRef)} className="p-2 w-40 mt-5 md:mt-15 bg-[#D4AF37] hover:bg-[#a2862b] cursor-pointer rounded-sm">Learn More.</button>
            </div>

            <div className="rightside flex-1 order-1 md:order-2 justify-center flex p-5 md:p-5">
                <div className="w-80 md:w-80 lg:w-105 border-3 border-[#D4AF37] rounded-full overflow-hidden bg-black">
                    <img src={profilepic} alt="" className="h-full w-full object-cover"/>
                </div>
            </div>
        </div>
      </section>

      <section ref={aboutRef} className="w-full h-fit text-center text-white/80 bg-[#0F0F0F] p-10 pt-30 md:p-40">
        <h1 className="text-4xl font-bold text-[#D4AF37]">About Me</h1>
        <p className="pt-10 md:pt-20 md:p-10 text-xl md:text-xl lg:text-2xl">I’m Jhon Pet Varquez, a 22-year-old Bachelor of Science in Agribusiness graduate from Gingoog City United Colleges. I’m passionate about agribusiness, sustainability, and community development. During my studies, I gained valuable experience through my On-the-Job Training at the Medina Agriculture Office, where I assisted in agricultural programs and farmer-related activities. I also volunteered in livestock vaccination drives, which strengthened my leadership and teamwork skills. I am a fast learner with strong communication, adaptability, and management abilities. As a new agribusiness professional, I aspire to apply my knowledge to help improve farm productivity, support local agripreneurs, and promote sustainable agricultural growth.</p>
      </section>

      <section ref={projectsRef} className="bg-[#0F0F0F] w-full h-fit flex flex-col items-center pt-30 md:pt-30 pb-30 md:grid-cols-2">
        <h1 className="text-4xl font-bold text-[#D4AF37]">My projects</h1>
        <p className="text-white/90 mt-10 p-10 pt-0 pb-0 text-center">A collection of my agribusiness projects that highlight my experience, innovation, and dedication to promoting sustainable practices.</p>
        
        <div className="w-full h-full lg:pt-5 lg:p-20 gap-10 md:gap-10 lg:gap-10 md:p-10 md:pt-0 mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-10 pt-0 pb-0 ">

          <div className="h-full flex-1 rounded-2xl bg-[#0F0F0F] hover:shadow-[0_0_20px_#D4AF37] transition-shadow duration-300 cursor-pointer">
            <div className="w-full h-full flex-1 rounded-2xl bg-[#0F0F0F] ">
              <img src={project1} alt="" className="w-full h-60 object-cover rounded-2xl " />
              <h1 className="ml-5 mt-3 text-xl font-bold text-white/90">Final Thesis</h1>
              <p className="m-5 mt-2 text-justify text-white/90">A study on the population and morphometric characteristics of sea urchins in Gingoog City’s coastal areas to assess environmental impacts.</p>
            </div>
          </div>

          <div className="h-full flex-1 rounded-2xl bg-[#0F0F0F] hover:shadow-[0_0_20px_#D4AF37] transition-shadow duration-300 cursor-pointer">
            <div className="w-full h-full flex-1 rounded-2xl bg-[#0F0F0F]">
              <img src={project2} alt="" className="w-full h-60 object-cover rounded-2xl " />
              <h1 className="m-5 mt-3 mb-0 text-md font-bold text-white/90">Soil Preparation and Mulching</h1>
              <p className="m-5 mt-2 text-justify text-white/90">During the OJT, We Performed soil preparation and mulching as part of sustainable farming practice.</p>
            </div>
          </div>

          <div className="h-full flex-1 rounded-2xl bg-[#0F0F0F] hover:shadow-[0_0_20px_#D4AF37] transition-shadow duration-300 cursor-pointer">
            <div className="w-full h-full flex-1 rounded-2xl bg-[#0F0F0F]">
              <img src={project3} alt="" className="w-full h-60 object-cover rounded-2xl " />
              <h1 className="ml-5 mt-3 text-xl font-bold text-white/90">Giving Vitamins to Cattle</h1>
              <p className="m-5 mt-2 text-justify text-white/90">Gave vitamin supplements to cattle as part of livestock care training.</p>
            </div>
          </div>

          <div className="h-full flex-1 rounded-2xl bg-[#0F0F0F] hover:shadow-[0_0_20px_#D4AF37] transition-shadow duration-300 cursor-pointer">
            <div className="w-full h-full flex-1 rounded-2xl bg-[#0F0F0F]">
              <img src={project4} alt="" className="w-full h-60 object-cover rounded-2xl " />
              <h1 className="ml-5 mt-3 text-md font-bold text-white/90">Coconut Farmer Registration</h1>
              <p className="m-5 mt-2 text-justify text-white/90">Helped facilitate the registration of coconut tree owners in the community.</p>
            </div>
          </div>
        </div>
      </section>

      <section ref={skillsRef} className="bg-[#0F0F0F] w-full h-fit flex flex-col items-center pt-30 text-center">
        <h1 className="text-4xl font-bold text-[#D4AF37]">My Skills</h1>
        <p className="pt-10 text-white/90">A showcase of my technical and agricultural competencies, developed through academic training and hands-on field experience.</p>

        <div className="w-full h-fit grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10 p-10 pt-20 lg:p-10 mb-40">


          <div className="w-full h-full bg-[#1d1d1d] text-center p-10 pt-0 rounded-xl">
            <h1 className="text-2xl p-5 text-[#D4AF37] font-semibold">Communication</h1>
            <p className="text-white/90">Effective in conveying thoughts clearly and listening to others.</p>
            <div className="w-full bg-gray-700 rounded-full h-2 mt-10">
              <div className="bg-[#D4AF37] h-2 rounded-full w-[95%]"></div>
            </div>
          </div>
          
          <div className="w-full h-full bg-[#1d1d1d] text-center p-10 pt-0 rounded-xl">
            <h1 className="text-2xl p-5 text-[#D4AF37] font-semibold">Fast Learner</h1>
            <p className="text-white/90">Quickly grasp new concepts and skills with enthusiasm.</p>
            <div className="w-full bg-gray-700 rounded-full h-2 mt-10">
              <div className="bg-[#D4AF37] h-2 rounded-full w-[90%]"></div>
            </div>
          </div>

          <div className="w-full h-full bg-[#1d1d1d] text-center p-10 pt-0 rounded-xl">
            <h1 className="text-2xl p-5 text-[#D4AF37] font-semibold">Flexible</h1>
            <p className="text-white/90">Ability to lead and inspire teams toward achieving goals.</p>
            <div className="w-full bg-gray-700 rounded-full h-2 mt-10">
              <div className="bg-[#D4AF37] h-2 rounded-full w-[85%]"></div>
            </div>
          </div>

        </div>
      </section>
      <section ref={achievementsRef} className="bg-[#1d1d1d] w-full h-screen flex flex-col items-center pt-30">
        <h1 className="text-4xl font-bold text-[#D4AF37]">My Achievements</h1>
      </section>

      <section ref={contactRef} className="bg-[#0F0F0F] w-full h-fit flex-col items-center pt-30 grid grid-cols-1 md:grid-cols-2 p-5 md:p-40 gap-30 text-white/90 pb-10 ">
        <div className="w-full h-120 mr-5 md:mr-0">
          <h1 className="text-4xl md:text-5xl font-bold text-[#D4AF37] mt-10">Let's Connect</h1>
          <p className="pt-10">Feel free to reach out for collaborations, projects, or inquiries.</p>
          
          <div className="w-full h-fit flex mt-10 gap-5 items-center">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-white/90 text-3xl"
            />
            <p className="text-xl">varquezjhonpet69@gmail.com</p>
          </div>

          <div className="w-full h-fit flex mt-10 gap-5 items-center">
            <FontAwesomeIcon
              icon={faPhone}
              className="text-white/90 text-3xl "
            />
            <p className="text-xl">0926-456-5832</p>
          </div>

          <div className="w-full h-fit flex mt-10 gap-5 items-center">
            <FontAwesomeIcon
              icon={faLocationDot}
              className="text-white/90 text-3xl"
            />
            <p className="text-xl">Purok 1, Bay Bay Lunao, Gingoog City</p>
          </div>
          
          <div className="w-full h-fit flex mt-10 items-center text-3xl gap-5">
            <a href="https://www.facebook.com/jhonpet.varquez.29" target="blank"><i class="fa-brands fa-facebook"></i></a>
            <a href="https://www.facebook.com/jhonpet.varquez.29" target="blank"><i class="fa-brands fa-square-instagram"></i></a>
            <a href="https://www.facebook.com/jhonpet.varquez.29" target="blank"><i class="fa-brands fa-tiktok"></i></a>
          </div>

        </div>
        <form className="w-full h-120 ">
          <h1 className="text-4xl font-bold text-white/90">Contact Me</h1>
          <input 
          type="text" 
          className="w-full h-12 border-1 border-white/20 bg-[#1d1d1d] mt-10 outline-none text-xl pl-5 rounded-md"
          placeholder="Name" 
          required/>

          <input 
          type="email" 
          className="w-full h-12 border-1 border-white/20 bg-[#1d1d1d] mt-5 outline-none text-xl pl-5 rounded-md"
          placeholder="Email" 
          required/>

          <textarea placeholder="Message..." className="w-full h-45 border-1 border-white/20 bg-[#1d1d1d] mt-5 outline-none text-lg p-5 rounded-md resize-none">
          </textarea>

          <button className="w-full h-12 bg-[#D4AF37] text-black font-semibold text-md cursor-pointer mt-5 rounded-md">Send Message</button>
        </form>
      </section>
      <footer className="w-full h-20 bg-[#0F0F0F] text-center flex items-center justify-center text-white/60">
        <p>
          &copy; {new Date().getFullYear()} Jhon Pet Varquez. All rights reserved.
        </p>
  </footer>
    </div>
  );
};

export default Portfolio;
