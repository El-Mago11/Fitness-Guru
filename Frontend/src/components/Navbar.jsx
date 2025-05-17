import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom"; // import Link for routing
import { assets } from "../assets/assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCaretDown, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navbarRef = useRef(null);
  const menuRef = useRef(null);
  const containerRef = useRef(null);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 50);

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        navbarRef.current.style.transform = "translateY(-100%)";
      } else {
        navbarRef.current.style.transform = "translateY(0)";
      }

      setLastScrollY(currentScrollY);
    };

    const handleClickOutside = (event) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !navbarRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, lastScrollY]);

  return (
    <div ref={containerRef} className="overflow-x-hidden">
      {/* Navbar Container */}
      <div
        ref={navbarRef}
        className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-10 py- transition-all duration-300 navbar ${
          scrolled ? "bg-[#262626]" : "bg-transparent"
        }`}
        style={{ transition: "transform 0.5s ease-in-out" }}
      >
        {/* Logo and Title */}
        <div className="flex items-center gap-3 nav-title">
          <div className="w-20">
            <img src={assets.logo} alt="Logo" />
          </div>
          <span className="text-white nav-title font-bold text-lg">
            FITNESS GURU
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="nav-links-container hidden md:flex">
          <ul className="nav-menu flex gap-8 text-white text-sm font-medium">
            <li className="nav-links"><Link to="/#Home">Home</Link></li>
            <li className="nav-links"><Link to="/#About">About</Link></li>
            <li className="nav-links relative">
              <Link to="/#Classes" className="flex items-center gap-1">
                Classes <FontAwesomeIcon icon={faCaretDown} />
              </Link>
              <div className="dropdown-menu">
                <ul>
                  <li className="sub-links"><Link to="/#Classes">Classes</Link></li>
                  <li className="sub-links"><Link to="/#Schedule">Class Schedule</Link></li>
                </ul>
              </div>
            </li>
            <li className="nav-links"><Link to="/#Trainers">Trainers</Link></li>
            <li className="nav-links"><Link to="/#Events">Events</Link></li>
            <li className="nav-links"><Link to="/#Pricing">Pricing</Link></li>
            <li className="nav-links"><Link to="/#Blog">Blog</Link></li>
            <li className="nav-links"><Link to="/#Contact">Contact</Link></li>
          </ul>
        </div>

        {/* Hamburger / Close icon (Mobile) */}
        <div className="md:hidden z-50">
          <button
            onClick={toggleMenu}
            className="text-white text-2xl focus:outline-none cursor-pointer"
          >
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
          </button>
        </div>
      </div>

      {/* Mobile Slide-in Menu */}
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 h-full w-2/3 max-w-xs bg-[#262626]/80 backdrop-blur-md text-white p-6 flex flex-col gap-6 transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden z-40 pt-35`}
      >
        <Link onClick={toggleMenu} to="/#Home" className="nav-links !text-[20px]">Home</Link>
        <Link onClick={toggleMenu} to="/#About" className="nav-links !text-[20px]">About</Link>
        <Link onClick={toggleMenu} to="/#Classes" className="nav-links !text-[20px]">Classes</Link>
        <Link onClick={toggleMenu} to="/#Schedule" className="nav-links !text-[20px]">Class Schedule</Link>
        <Link onClick={toggleMenu} to="/#Trainers" className="nav-links !text-[20px]">Trainers</Link>
        <Link onClick={toggleMenu} to="/#Events" className="nav-links !text-[20px]">Events</Link>
        <Link onClick={toggleMenu} to="/#Pricing" className="nav-links !text-[20px]">Pricing</Link>
        <Link onClick={toggleMenu} to="/#Blog" className="nav-links !text-[20px]">Blog</Link>
        <Link onClick={toggleMenu} to="/#Contact" className="nav-links !text-[20px]">Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
