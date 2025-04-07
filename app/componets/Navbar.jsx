"use client";
import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed flex justify-between h-18 w-full p-4 top-0 bg-white border-[#E9EBED] z-40 border-b-2">
      <h1 className="text-3xl text-black font-extrabold">Logo</h1>
      <div className="flex items-center border-2 border-[#E9EBED] p-2 rounded-sm justify-around text-black text-sm">
        <img
          className="rounded-full aspect-square h-8 w-8 "
          width="64"
          height="64"
          src="https://img.icons8.com/pastel-glyph/64/person-male--v3.png"
          alt="person-male--v3"
        />
        <h3>Rahil Siddique</h3>
      </div>
    </nav>
  );
};

export default Navbar;
