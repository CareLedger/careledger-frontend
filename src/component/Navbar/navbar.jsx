import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="w-full flex justify-center py-5 ">
      <div className="w-[85%]">
        <ul className="flex justify-between cursor-pointer">
          <div>
            <li className="text-[color:var(--text-color)] text-[20px] font-bold">
              Logo
            </li>
          </div>
          <div className="flex gap-x-5 items-center">
            <li className="text-[color:var(--text-color)]">Home</li>
            <li className="text-[color:var(--text-color)]">About</li>
            <li className="text-[color:var(--text-color)]">Features</li>
            <li className="text-[color:var(--text-color)]">Contact Us</li>
          </div>

          <Link to="/signup">
            <li className="bg-[#63C5D2] text-[color:var(--text-color)] px-4 py-[7px] rounded-[50px]">
              <button>Get started</button>
            </li>
          </Link>
          
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
