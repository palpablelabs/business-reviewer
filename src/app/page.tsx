"use client";

import React from "react";

import ImageComponent from "./components/imageComponent";
import CarouselComponent from "./components/carousel";
import pageProps from "./page.const";
import HeroTextComponent from "./components/heroText";
import TestimonialCard from "./components/testimonial";
import HorizontalCard from "./components/horizontalCard";
import PricingCard from "./components/pricingCard";

export default function Home() {
  const { heros, testimonials, cards } = pageProps;

  const card1 = cards[0];
  const card2 = cards[1];

  return (
    <>
      <div className="h-full w-full">
        <HorizontalCard image={card1.image} content={card1.content} />
      </div>

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

      <div className="h-full w-full">
        <HorizontalCard image={card2.image} content={card2.content} />
      </div>

      <CarouselComponent loop={true} autoplay={true} autoplayDelay={5000}>
        {testimonials.map((item, index) => (
          <div key={index} className="h-full w-full pt-2">
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
