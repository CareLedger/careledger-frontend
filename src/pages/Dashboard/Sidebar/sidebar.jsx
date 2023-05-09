import React from "react";
import { Link } from "react-router-dom";

function Sidebar({ links }) {
  return (
    <div className="bg-gray-900 text-white flex-shrink-0 h-screen w-full max-w-[220px]">
      {/* Navigation links */}
      <nav className="mt-[25px] flex flex-col gap-y-[15px] ">
        {links.map((link) => (
          <div className="flex items-center px-[8%] hover:bg-gray-700">
            <>{link.icon}</>

            <Link
              to={link.path}
              key={link.name}
              className="block py-2 px-[10px] text-[15px]"
            >
              {link.name}
            </Link>
          </div>
        ))}
      </nav>
    </div>
  );
}

export default Sidebar;
