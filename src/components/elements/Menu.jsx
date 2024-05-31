import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Menu({ routeList }) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="menu-wrapper">
      <button
        onClick={toggleDropdown}
        className="menu-button"
      >
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      {isOpen && (
        <ul className="dropdown">
          {routeList.map(
            ({ path, label }, index) =>
              path && (
                <Link key={index} to={path}>
                  <li
                    onClick={toggleDropdown}
                    className={`menu hover:bg-gray-100 px-4 py-2 ${
                      currentPath === path && "active"
                    }`}
                  >
                    {label}
                  </li>
                </Link>
              )
          )}
        </ul>
      )}
    </div>
  );
}

export default Menu;
