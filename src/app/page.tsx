"use client";

import ImageComponent from "./components/ImageComponent";

export default function Home() {
  const mobileObj = {
    src: "/mobile_home.png",
    alt: "Mobile Image",
    width: 1216,
    height: 1404,
  };
  const tabletObj = {
    src: "/tablet_home.jpeg",
    alt: "Tablet Image",
    width: 1125,
    height: 750,
  };
  const desktopObj = {
    src: "/desktop_home.png",
    alt: "Desktop Image",
    width: 1108,
    height: 383,
  };
  const wideScreenObj = {
    src: "/widescreen_home.png",
    alt: "Widescreen Image",
    width: 2135,
    height: 671,
  };
  const extraWideScreenObj = {
    src: "/extra_widescreen_home.png",
    alt: "ExtraWideScreen Image",
    width: 3075,
    height: 730,
  };

  return (
    <ImageComponent
      mobile={mobileObj}
      tablet={tabletObj}
      desktop={desktopObj}
      wideScreen={wideScreenObj}
      extraWideScreen={extraWideScreenObj}
    />
  );
}
