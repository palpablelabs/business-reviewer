"use client";

import React from "react";

import ImageComponent from "./components/imageComponent";
import CarouselComponent from "./components/carousel";
import pageProps from "./page.const";
import HeroTextComponent from "./components/heroText";
import TestimonialCard from "./components/testimonial";
import HorizontalCard from "./components/horizontalCard";

export default function Home() {
  const { heros, testimonials, cards } = pageProps;
  return (
    <>
      <CarouselComponent loop={true} autoplay={true} autoplayDelay={5000}>
        {heros.map((item, index) => (
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

      {cards.map((item, index) => (
        <div key={index} className="h-full w-full">
          <HorizontalCard image={item.image} content={item.content} />
        </div>
      ))}

      <CarouselComponent loop={true} autoplay={true} autoplayDelay={5000}>
        {testimonials.map((item, index) => (
          <div key={index} className="h-full w-full">
            <TestimonialCard
              avatar={item.avatar}
              header={item.header}
              body={item.body}
            />
          </div>
        ))}
      </CarouselComponent>
    </>
  );
}
