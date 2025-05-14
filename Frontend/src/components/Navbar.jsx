import React, { useState, useEffect, useRef } from "react";
import { assets } from "../assets/assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCaretDown, faTimes } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false); // Track scroll state
  const [lastScrollY, setLastScrollY] = useState(0); // To track last scroll position
  const navbarRef = useRef(null); // Reference for the navbar element

  const toggleMenu = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Detect scrolling down or up
      if (currentScrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Hide the navbar when scrolling down and show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scrolling down
        navbarRef.current.style.transform = "translateY(-100%)"; // Move up
      } else {
        // Scrolling up
        navbarRef.current.style.transform = "translateY(0)"; // Move back down
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    
    // Cleanup the event listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]); // Depend on lastScrollY to detect direction change

  return (
    <div className="overflow-x-hidden-hidden">
      <div
        className={`flex flex-row navbar transition-all duration-200 ${
          scrolled ? "bg-[#262626]" : "bg-transparent"
        }`} // Change background to #262626 when scrolling
        ref={navbarRef} // Reference for navbar
        style={{ transition: "transform 0.5s ease-in-out" }} // Smooth transition for hiding/showing
      >
        <div className="w-20 nav-title">
          <img src={assets.logo} alt="" />
        </div>
        <span className="nav-title text-white pt-6 font-bold">FITNESS GURU</span>

        <div className="nav-links-container">
          <ul
            className={`${
              isOpen ? "is-open" : ""
            } flex-row gap-8 text-white pt-6 ml-30 nav-menu`}
            style={{ fontSize: 17 }}
          >
            <li className="nav-links">
              <a onClick={toggleMenu} href="#Home">
                Home
              </a>
            </li>
            <li className="nav-links">
              <a onClick={toggleMenu} href="#About">
                About
              </a>
            </li>
            <li className="nav-links relative">
              <a onClick={toggleMenu} href="#Classes">
                Classes{" "}
                <FontAwesomeIcon icon={faCaretDown} className="ml-1 text-white nav-links" />
              </a>
              <div className="dropdown-menu">
                <ul>
                  <li className="sub-links">
                    <a onClick={toggleMenu} href="#Classes">
                      Classes
                    </a>
                  </li>
                  <li className="sub-links">
                    <a onClick={toggleMenu} href="#Schedule">
                      Class Schedule
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-links">
              <a onClick={toggleMenu} href="#Trainers">
                Trainers
              </a>
            </li>
            <li className="nav-links">
              <a onClick={toggleMenu} href="#Events">
                Events
              </a>
            </li>
            <li className="nav-links">
              <a onClick={toggleMenu} href="#Pricing">
                Pricing
              </a>
            </li>
            <li className="nav-links">
              <a onClick={toggleMenu} href="#Blog">
                Blog
              </a>
            </li>
            <li className="nav-links">
              <a onClick={toggleMenu} href="#Contact">
                Contact
              </a>
            </li>
          </ul>

          <button id="menu-open-button" onClick={toggleMenu} className="menu-toggle">
            <FontAwesomeIcon
              icon={isOpen ? faTimes : faBars}
              className="ml-55 mt-5 text-white nav-links"
              color="white"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
