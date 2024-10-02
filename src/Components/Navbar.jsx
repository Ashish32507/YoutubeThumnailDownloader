import React from "react";

function Navbar() {
  return (
    <>
      <nav className="h-16 w-full bg-gray-800 flex items-center justify-between px-10 shadow-lg sticky top-0 left-0">
        <div className="text-white">
          <h1 className="text-2xl font-bold cursor-pointer hover:text-gray-400 transition duration-300">
            Download Youtube Thumbnail
          </h1>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
