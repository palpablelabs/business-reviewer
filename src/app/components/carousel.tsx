"use client";

import React, { ReactNode } from "react";
import { Carousel } from "@material-tailwind/react";

interface CarouselCustomNavigationComponentProps {
  children: ReactNode;
}

const CarouselComponent: React.FC<CarouselCustomNavigationComponentProps> = ({
  children,
}) => {
  return (
    <Carousel loop={true} autoplay={true}>
      {children}
    </Carousel>
  );
};

export default CarouselComponent;