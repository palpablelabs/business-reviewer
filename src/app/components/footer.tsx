"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";

export function SimpleFooter() {
  return (
    <footer className="bg-gray-200 px-4 py-2 lg:px-8 lg:py-4 text-center mt-auto flex items-center justify-between">
      <Typography color="blue-gray" className="font-normal">
        &copy; 2024 CredibleCraft
      </Typography>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            About Us
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Contact Us
          </Typography>
        </li>
      </ul>
    </footer>
  );
}
