"use client";
import React from "react";
import Image from "next/image";
import profile from "/public/imgprofile.png";
import { Link } from "react-scroll/modules";
import { HiArrowDown } from "react-icons/hi";

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col items-center text-center justify-center my-10 py-10 sm:py-32 md:flex-row md:space-x-4 md:text-left md:pt-30 md:">
        <div className="w-1/2 md:mt-2 lg:bg-gradient-to-r lg:from-indigo-500 lg:via-purple-500 rounded-tr-lg rounded-bl-lg">
          <Image
            className="max-lg:rounded-lg lg:rounded-tr-[calc(70%)] lg:rounded-bl-[calc(50%)] lg:w-full "
            src={profile}
            height={300}
            width={200}
            sizes="50vw"
            alt=""
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="font-bold text-4xl mt-6 md:text-7xl md:mt-0">
            {" "}
            Hi im Sharorn Phin
          </h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            I&#39;m a{" "}
            <span className=" font-semibold px-6 py-3 text-teal-600">
              Nurse
            </span>
          </p>
          <Link
            to="projects"
            className="text-natural-100 font-semibold px-6 py-3 bg-teal-600 hover:bg-teal-700 shadow rounded"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Project
          </Link>
        </div>
      </div>
      <div className="flex flex-row justify-center animate-bounce">
        <Link
          to="bout"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
