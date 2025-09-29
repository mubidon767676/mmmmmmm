"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaSearch, FaUser, FaShoppingBag, FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`mubidon-navbar fixed-top py-3 ${
        scrolled ? "navbar-scrolled" : ""
      }`}
    >
      <div className="container d-flex justify-content-between align-items-center">
        {/* Logo */}
        <Link href="/" className="navbar-brand mubidon-logo">
          MUBIDON <span>STORE</span>
        </Link>

        {/* Toggler for mobile */}
        <button
          className="navbar-toggler border-0"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          {isOpen ? <FaTimes className="toggle-icon" /> : <FaBars className="toggle-icon" />}
        </button>

        {/* Menu */}
        <div className={`mubidon-menu ${isOpen ? "show" : ""}`}>
          <ul className="navbar-nav d-flex flex-row gap-4 align-items-center">
            {[
              { name: "Home", path: "/" },
              { name: "New Arrivals", path: "/new" },
              { name: "Men", path: "/men" },
              { name: "Women", path: "/women" },
              { name: "About us", path: "/about" },
              { name: "Contact us", path: "/contact" },
            ].map((link) => (
              <li key={link.name} className="nav-item">
                <Link 
                  href={link.path} 
                  className="nav-link mubidon-link"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            {/* Icons */}
            <li className="nav-item nav-icons d-flex gap-3">
              <FaSearch className="nav-icon" />
              <FaUser className="nav-icon" />
              <div className="cart-icon-wrapper">
                <FaShoppingBag className="nav-icon" />
                <span className="cart-badge">3</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}