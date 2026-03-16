import { useState, useEffect } from "react";
import { FaHome, FaUser, FaBriefcase, FaEnvelope } from "react-icons/fa";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [indicatorPos, setIndicatorPos] = useState(0);
  const [indicatorWidth, setIndicatorWidth] = useState(0);

  const navItems = [
    { id: "home", label: "Əsas", icon: <FaHome /> },
    { id: "about", label: "Haqqımda", icon: <FaUser /> },
    { id: "portfolio", label: "Portfolio", icon: <FaBriefcase /> },
    { id: "contact", label: "Əlaqə", icon: <FaEnvelope /> },
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActive(id);
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    const activeLink = document.getElementById(`nav-${active}`);
    if (activeLink) {
      setIndicatorPos(activeLink.offsetLeft);
      setIndicatorWidth(activeLink.offsetWidth);
    }
  }, [active, menuOpen]);

  return (
    <header className="header">
      <div className="container header-inner">

        {/* Logo */}
        <div className="logo" onClick={() => scrollToSection("home")}>
          <img
            src="https://i.pinimg.com/1200x/91/b5/cb/91b5cbdad8e69879f34ef02bc14315bd.jpg"
            alt="Logo"
          />
        </div>

        {/* Nav */}
        <nav className={`nav ${menuOpen ? "active" : ""}`}>
          {navItems.map((item) => (
            <div
              key={item.id}
              id={`nav-${item.id}`}
              className={`nav-item ${active === item.id ? "active" : ""}`}
              onClick={() => scrollToSection(item.id)}
            >
              <span className="icon">{item.icon}</span>
              <span className="label">{item.label}</span>
            </div>
          ))}
          {/* Indicator */}
          <div
            className="indicator"
            style={{
              left: `${indicatorPos}px`,
              width: `${indicatorWidth}px`,
            }}
          />
        </nav>

        {/* Burger */}
        <div
          className={`burger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {menuOpen && (
        <div
          className="menu-overlay"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </header>
  );
}

export default Header;