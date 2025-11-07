import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation in React Router

import "./Header.css";
const Header = () => {
  return (
    <div className="mt-5 flex justify-between items-center ml-5 mr-7">
      <div className="logo mt-5">
        <a href="/" rel="noopener noreferrer">
          <img
            src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdTdndmxsZzh6ZnB5OTI1aWtoa2pteHA0NzM1NGI1aDJ5d3hhYmpqNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/F8JPm4ZlbE4UNjxT9Y/200.webp" // Replace with actual image URL or preview
            alt="Logo"
            width="100"
          />
        </a>
      </div>

      <ul className=" list-none flex gap-4 leading-none font-semibold text-base">
        <li>
          <Link to="/about" className="">
            About
          </Link>
        </li>
        <li>
          <Link to="/marketplace" className="">
            Marketplace
          </Link>
        </li>
        <li>
          <Link to="/contact" className="">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Header;
