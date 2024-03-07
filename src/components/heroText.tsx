"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";

interface HeroComponentProps {
  header: string;
  body: string;
}

const HeroTextComponent: React.FC<HeroComponentProps> = ({ header, body }) => {
  return (
    <>
      <div className="hidden md:block">
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              {header}
            </Typography>
            <Typography variant="lead" color="white" className="mb-12">
              {body}
            </Typography>
          </div>
        </div>
      </div>
      <div className="block md:hidden">
        <div className="grid h-full w-full place-items-center bg-black/85 p-5">
          <div className="w-full text-center">
            <Typography variant="h4" color="white" className="mb-5">
              {header}
            </Typography>
            <Typography variant="small" color="white" className="mb-5">
              {body}
            </Typography>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroTextComponent;
