import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const Project = [
  {
    name: "Asp Ecommerce",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat itaque, labore esse laudantium sit totam nihil ad veniam fugiat quam consectetur molestias, dolor autem maxime rem, quas debitis deleniti ex?",
    image: "https://avatars.githubusercontent.com/u/26129002?v=4",
    github: "https://github.com/veasnakouen/nextjs",
    link: "https://github.com/veasnakouen/nextjs",
  },
  {
    name: "Asp ",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat itaque, labore esse laudantium sit totam nihil ad veniam fugiat quam consectetur molestias, dolor autem maxime rem, quas debitis deleniti ex?",
    image: "https://avatars.githubusercontent.com/u/26129002?v=4",
    github: "https://github.com/veasnakouen/nextjs",
    link: "https://github.com/veasnakouen/nextjs",
  },
  {
    name: "Nextjs",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat itaque, labore esse laudantium sit totam nihil ad veniam fugiat quam consectetur molestias, dolor autem maxime rem, quas debitis deleniti ex?",
    image: "https://avatars.githubusercontent.com/u/26129002?v=4",
    github: "https://github.com/veasnakouen/nextjs",
    link: "https://github.com/veasnakouen/nextjs",
  },
  {
    name: "Asp Ecommerce",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat itaque, labore esse laudantium sit totam nihil ad veniam fugiat quam consectetur molestias, dolor autem maxime rem, quas debitis deleniti ex?",
    image: "https://avatars.githubusercontent.com/u/26129002?v=4",
    github: "https://github.com/veasnakouen/nextjs",
    link: "https://github.com/veasnakouen/nextjs",
  },
  {
    name: "Nextjs fullstack",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat itaque, labore esse laudantium sit totam nihil ad veniam fugiat quam consectetur molestias, dolor autem maxime rem, quas debitis deleniti ex?",
    image: "https://avatars.githubusercontent.com/u/26129002?v=4",
    github: "https://github.com/veasnakouen/nextjs",
    link: "https://github.com/veasnakouen/nextjs",
  },
  {
    name: "Asp dotnet core",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat itaque, labore esse laudantium sit totam nihil ad veniam fugiat quam consectetur molestias, dolor autem maxime rem, quas debitis deleniti ex?",
    image: "https://avatars.githubusercontent.com/u/26129002?v=4",
    github: "https://github.com/veasnakouen/nextjs",
    link: "https://github.com/veasnakouen/nextjs",
  },
];

const ProjectSection = () => {
  return (
    <section id="project">
      <div className="my-12 py-12 md:pt-16 md:pb-20">
        <h1 className="text-center mb-10 font-bold text-4xl">
          project
          {/* <hr className="w-6 h-1 mz-auto my-4 bg-teal-500 rounded border-0" /> */}
        </h1>
        <div className="flex flex-col space-y-28">
          {Project.map((project, index) => {
            return (
              <div key={index}>
                <div className="flex flex-col items-stretch justify-center align-top  md:flex-row md:space-x-12">
                  <div className="md:w-1/2 mx-10">
                    <Image
                      src={project.image}
                      height={1000}
                      width={1000}
                      alt=""
                      className="rounded-xl shadow-xl hover:opacity-60"
                    />
                  </div>
                  <div className="md:w-1/2 mx-10">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p>{project.description} </p>
                    <div className="flex flex-row align-top space-x-4">
                      <Link
                        href={project.github}
                        target="_blank"
                        className="hover:-translate-y-1 transition-transform cursor-pointer"
                      >
                        <BsGithub size={30} />
                      </Link>
                      <Link
                        href={project.link}
                        target="_blank"
                        className="hover:-translate-y-1 transition-transform cursor-pointer"
                      >
                        <BsArrowUpRightSquare size={30} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
