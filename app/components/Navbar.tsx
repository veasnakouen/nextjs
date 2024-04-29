"use client";
import Image from "next/image";
import { useTheme } from "next-themes";
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { useState } from "react";
import { Link } from "react-scroll";
// import FlyoutMenu from "./FlyoutMenu";

interface navItem {
  label: string;
  page: string;
}

const nav_Items = [
  { label: "Home", page: "home" },
  { label: "About", page: "about" },
  { label: "Projects", page: "project" },
];

const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [navbar, setNavbar] = useState(false);
  return (
    <header className="w-full mx-auto px-4 bg-white shadow sm:px-20 fixed top-0 z-30 dark:border-stone-600 dark:bg-gray-500 ">
      <div className="justify-between md:items-center md:flex">
        <div className="md:py-5 md:block">
          <div>
            <div className="flex items-center justify-between">
              <div className="md:py-5 md:block">
                <h2 className="text-2xl font-bold "> Phin Sharorn</h2>
              </div>
              <div onClick={() => setNavbar(!navbar)} className="md:hidden">
                <button>
                  {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <div className="md:flex md:space-x-5 space-y-8 md:space-y-0 ">
              {nav_Items.map((item, index) => {
                return (
                  <Link
                    href="#"
                    key={index}
                    to={item.page}
                    className="block lg:inline-block  "
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    duration={500}
                    onClick={() => setNavbar(!navbar)}
                  >
                    {item.label}
                  </Link>
                );
              })}
              {currentTheme === "dark" ? (
                <button
                  onClick={() => setTheme("light")}
                  className="bg-slate-200 p-2 rounded-xl"
                >
                  <RiSunLine />
                </button>
              ) : (
                <button
                  onClick={() => setTheme("dark")}
                  className="bg-slate-200 p-2 rounded-xl"
                >
                  <RiMoonFill />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
