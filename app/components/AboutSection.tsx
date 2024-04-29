import React from "react";
import Image from "next/image";
import about from "/public/experience1.png";

const skill = [
  { skill: "HTML" },
  { skill: "C#" },
  { skill: "Javascript" },
  { skill: "Python" },
  { skill: "Nextjs" },
  { skill: "Angular" },
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">About Me</h1>
        <div className="flex flex-col md:flex-row space-y-10 items-stretch justify-center align-top md:text-left md:p-4 md:space-x-10 px-10">
          <div className="md:w-1/2">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me
            </h1>
            <p>
              {" "}
              Hi my name is Sharorn Phin and i am a{" "}
              <span className="font-bold">{"hightly ambitious"}</span>,
              <span className="font-bold">{"self motivated"}</span> and,
              <span className="font-bold">{"driven"}</span> Nurse,
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              voluptatibus a expedita error vero voluptates odio cupiditate
              itaque non voluptatem magni harum et, asperiores fuga omnis id sed
              provident vel.
            </p>
          </div>
          <div className="md:w-1/2">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              My skill
            </h1>
            <div className="flex flex-wrap flex-row md:justify-start px-10">
              {skill.map((item, index) => {
                return (
                  <p
                    key={index}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
            <div className="px-10 mt-5 relative">
              <Image
                src={about}
                alt=""
                height={100}
                width={100}
                className="absolute md:left-[50%] md:top-0 -rotate-90"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
