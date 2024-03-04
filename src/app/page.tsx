"use client";

import React from "react";

import ImageComponent from "./components/imageComponent";
import CarouselComponent from "./components/carousel";
import PageConst from "./page.const";

export default function Home() {
  return (
    <CarouselComponent>
      <ImageComponent
        mobile={PageConst.mobile_1}
        tablet={PageConst.tablet_1}
        desktop={PageConst.desktop_1}
        wideScreen={PageConst.widescreen_1}
        extraWideScreen={PageConst.extra_widescreen_1}
      />
      <ImageComponent
        mobile={PageConst.mobile_2}
        tablet={PageConst.tablet_2}
        desktop={PageConst.desktop_2}
        wideScreen={PageConst.widescreen_2}
        extraWideScreen={PageConst.extra_widescreen_2}
      />
      <ImageComponent
        mobile={PageConst.mobile_3}
        tablet={PageConst.tablet_3}
        desktop={PageConst.desktop_3}
        wideScreen={PageConst.widescreen_3}
        extraWideScreen={PageConst.extra_widescreen_3}
      />
    </CarouselComponent>
  );
}
