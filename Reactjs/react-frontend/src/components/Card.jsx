"use client";

import { Card } from "flowbite-react";
import image from "../images/a1.jpg";

export function CardComponent() {
  const array = [...Array(3)];
  return (
    <div className="flex flex-wrap gap-5">
      {array.map((_) => (
        <Card
          href="#"
          className="max-w-sm my-10 mx-auto shadow-md md:shadow-lg"
          //   set background-image
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="bg-white backdrop-invert-0 bg-opacity-30 px-5 rounded-bl-3xl rounded-br-3xl">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </div>
        </Card>
      ))}
    </div>
  );
}
