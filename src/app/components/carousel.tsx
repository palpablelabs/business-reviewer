"use client";

import React, { ReactNode } from "react";
import { Carousel } from "@material-tailwind/react";

interface CarouselCustomNavigationComponentProps {
  children: ReactNode;
  loop: boolean;
  autoplay: boolean;
  autoplayDelay: number;
}

const CarouselComponent: React.FC<CarouselCustomNavigationComponentProps> = ({
  children,
  loop,
  autoplay,
  autoplayDelay,
}) => {
  return (
    <Carousel
      className="h-full bg-black"
      loop={loop}
      autoplay={autoplay}
      autoplayDelay={autoplayDelay}
    >
      {children}
    </Carousel>
  );
};

export default CarouselComponent;
