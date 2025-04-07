"use client";
import React from "react";
import Link from "next/link";
// import { Home, Layers, Info, Settings } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="w-1/6 border-[#E9EBED] border-r-2 h-screen bg-white flex flex-col pt-36 py-2 pl-2">
      <nav className="flex flex-col space-y-4">
        <SidebarItem label="Dashboard" path="/" />

        <SidebarItem label="Skill Test" path="/" />

        <SidebarItem label="Internship" path="/" />
      </nav>
    </div>
  );
};

const SidebarItem = ({ label, path }) => {
  return (
    <Link
      href={path}
      className="flex items-center font-bold text-lg text-[#] focus:text-[#3F4CCA] focus:bg-gray-50 w-56 py-4 rounded-r-full transition"
    >
      {/* {icon} */}
      <span>{label}</span>
    </Link>
  );
};

export default Sidebar;
