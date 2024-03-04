"use client";

import React from "react";
import Image from "next/image";

type ImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
};
interface ImageComponentProps {
  mobile: ImageProps;
  tablet: ImageProps;
  desktop: ImageProps;
  wideScreen: ImageProps;
  extraWideScreen: ImageProps;
}

const ImageComponent: React.FC<ImageComponentProps> = ({
  mobile,
  desktop,
  tablet,
  wideScreen,
  extraWideScreen,
}) => {
  return (
    <section className="w-full items-end max-h-96 overflow-hidden rounded-none">
      <Image
        className="block md:hidden max-w-full h-auto"
        src={mobile.src}
        alt={mobile.alt}
        layout="responsive"
        width={mobile.width}
        height={mobile.height}
      />
      <Image
        className="hidden md:block lg:hidden max-w-full h-auto"
        src={tablet.src}
        alt={tablet.alt}
        layout="responsive"
        width={tablet.width}
        height={tablet.height}
      />
      <Image
        className="hidden lg:block xl:hidden max-w-full h-auto"
        src={desktop.src}
        alt={desktop.alt}
        layout="responsive"
        width={desktop.width}
        height={desktop.height}
      />
      <Image
        className="hidden xl:block 2xl:hidden max-w-full h-auto"
        src={wideScreen.src}
        alt={wideScreen.alt}
        layout="responsive"
        width={wideScreen.width}
        height={wideScreen.height}
      />
      <Image
        className="hidden 2xl:block max-w-full h-auto"
        src={extraWideScreen.src}
        alt={extraWideScreen.alt}
        layout="responsive"
        width={extraWideScreen.width}
        height={extraWideScreen.height}
      />
    </section>
  );
};

export default ImageComponent;
