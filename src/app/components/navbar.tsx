"use client";
import React from "react";
import Link from "next/link";
import { useScrollSpy } from "../hooks/useScrollSpy";

const Navbar = () => {
  const activeId = useScrollSpy(
    ["#about", "#projects", "#contact"],
    { rootMargin: "0px 0px -80% 0px" }
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-transparent">
      <div className="flex flex-wrap items-center justify-between mx-auto px-4">
        <Link href={"/"} className="text-2xl md:text-5xl text-white font-semibold">
        </Link>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            <li>
              <Link href={"#about"} className={`block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white ${activeId === "about" ? "text-white" : ""}`}>
                About
              </Link>
            </li>
            <li>
              <Link href={"#projects"} className={`block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white ${activeId === "projects" ? "text-white" : ""}`}>
                Projects
              </Link>
            </li>
            <li>
              <Link href={"#contact"} className={`block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white ${activeId === "contact" ? "text-white" : ""}`}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
