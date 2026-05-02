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
        <Link to="/" className="site-logo" aria-label="Go to home">
          <span className="logo-bracket">&lt;</span>
          <span>haidar</span>
          <span className="logo-bracket">/&gt;</span>
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
