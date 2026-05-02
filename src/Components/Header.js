import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const { pathname } = useLocation();

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link to="/" aria-label="Go to home">
          <img
            src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdTdndmxsZzh6ZnB5OTI1aWtoa2pteHA0NzM1NGI1aDJ5d3hhYmpqNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/F8JPm4ZlbE4UNjxT9Y/200.webp"
            alt="HaidarCodes logo"
            className="site-logo"
          />
        </Link>

        <nav aria-label="Main navigation">
          <ul className="nav-list">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  className={`nav-link${pathname === to ? " nav-link--active" : ""}`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
