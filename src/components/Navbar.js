import { useRef } from "react";
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

function Navbar() {
  const [scrolling, setScrolling] = useState(false);
  const [scrollDisabled, setScrollDisabled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 160) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navRef = useRef();

  const toggleResponsiveNav = () => {
    navRef.current.classList.toggle("responsive_nav");
    setScrollDisabled(!scrollDisabled);
  };

  useEffect(() => {
    if (scrollDisabled) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [scrollDisabled]);

  return (
    <header className={`navbar ${scrolling ? "solid-background" : ""}`}>
      <div className="logo-container">
        <a href="#">
          <h1 className="logo-text">Logo</h1>
        </a>
      </div>
      <nav ref={navRef}>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Gallery</a>
        <a href="#">Contact</a>
        <button className="nav-close-btn" onClick={toggleResponsiveNav}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={toggleResponsiveNav}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
