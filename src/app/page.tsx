"use client";

import React from "react";

import ImageComponent from "./components/imageComponent";
import CarouselComponent from "./components/carousel";
import HeroComponentProps from "./page.const";
import HeroTextComponent from "./components/heroText";

export default function Home() {
  return (
    <CarouselComponent>
      {HeroComponentProps.map((item, index) => (
        <div key={index} className="relative h-full w-full">
          <ImageComponent
            mobile={item.mobile}
            tablet={item.tablet}
            desktop={item.desktop}
            wideScreen={item.widescreen}
            extraWideScreen={item.extra_widescreen}
          />
          <HeroTextComponent header={item.header} body={item.body} />
        </div>
      ))}
    </CarouselComponent>
  );
}
