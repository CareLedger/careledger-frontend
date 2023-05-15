import React, { useState } from "react";
import { FaBell, FaUserCircle } from "react-icons/fa";
import { RiSearchLine } from "react-icons/ri";
import { Link } from "react-router-dom";

function TopBar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Toggle the dropdown menu
  function handleDropdownToggle() {
    setIsDropdownOpen((prev) => !prev);
  }

  return (
    <div className="bg-gray-800 text-white flex justify-between items-center px-[4%] py-[15px]">
      {/* Logo */}

      <h1>Logo</h1>
      {/* Search bar */}
      <div className="relative flex items-center bg-gray-700 w-[40%] rounded-[9px] ">
        <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
          <RiSearchLine className="h-6 w-6 " />
        </span>
        <input
          type="text"
          placeholder="Search anything here"
          className="pl-10 pr-4 py-2 rounded-lg bg-transparent  flex-1 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
        />
      </div>
      {/* User info and dropdown */}
      <div className="flex items-center">
        <div className="relative">
          {/* Notification bell */}
          <div className="absolute right-0 top-0 -mr-2 -mt-2">
            <div className="bg-[#e20707] rounded-full w-4 h-4 animate-ping"></div>
            <div className="bg-[#e20707] rounded-full w-4 h-4 absolute"></div>
          </div>
          <FaBell size={20} />
        </div>
        {/* User info and dropdown */}
        <div className="flex items-center ml-4 relative">
          {/* Admin image */}
          <FaUserCircle
            size={32}
            className="cursor-pointer"
            onClick={handleDropdownToggle}
          />
          {/* Dropdown menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 top-0 mt-[40px] w-48 bg-white rounded-lg shadow-lg z-10">
              <div className="py-2">
                <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Profile
                </button>
                <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Settings
                </button>
                <Link to="/login">
                  <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Logout
                  </button>
                </Link>
                
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TopBar;
