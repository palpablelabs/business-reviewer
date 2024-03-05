const heroProps = { alt: "Business Image", priority: true };
const mobileProps = {
  ...{
    width: 1216,
    height: 1404,
  },
  ...heroProps,
};
const tabletProps = {
  ...{
    width: 1125,
    height: 750,
  },
  ...heroProps,
};
const desktopProps = {
  ...{
    width: 1108,
    height: 383,
  },
  ...heroProps,
};
const wideScreenProps = {
  ...{
    width: 2135,
    height: 671,
  },
  ...heroProps,
};
const extraWideScreenProps = {
  ...{
    width: 3075,
    height: 730,
  },
  ...heroProps,
};

const HeroComponentProps = [
  {
    header: "Elevate Your Business to Digital Excellence",
    body: "Boost your online presence, gather authentic reviews, and thrive in the digital era. Join us in elevating your small business to new heights.",
    mobile: {
      ...{
        src: "/home/mobile_home_1.png",
      },
      ...mobileProps,
    },
    tablet: {
      ...{
        src: "/home/tablet_home_1.jpeg",
      },
      ...tabletProps,
    },
    desktop: {
      ...{
        src: "/home/desktop_home_1.png",
      },
      ...desktopProps,
    },
    widescreen: {
      ...{
        src: "/home/widescreen_home_1.png",
      },
      ...wideScreenProps,
    },
    extra_widescreen: {
      ...{
        src: "/home/extra_widescreen_home_1.png",
      },
      ...extraWideScreenProps,
    },
  },
  {
    header: "Revolutionize Your Small Business Digitally",
    body: "Revolutionize your digital journey. Amplify your presence, collect genuine reviews, and embrace the future with our tailored solutions.",
    mobile: {
      ...{
        src: "/home/mobile_home_2.png",
      },
      ...mobileProps,
    },
    tablet: {
      ...{
        src: "/home/tablet_home_2.png",
      },
      ...tabletProps,
    },
    desktop: {
      ...{
        src: "/home/desktop_home_2.png",
      },
      ...desktopProps,
    },
    widescreen: {
      ...{
        src: "/home/widescreen_home_2.png",
      },
      ...wideScreenProps,
    },
    extra_widescreen: {
      ...{
        src: "/home/extra_widescreen_home_2.png",
      },
      ...extraWideScreenProps,
    },
  },
  {
    header: "Enhance Your Business, Ignite Digital Growth",
    body: "Ignite your online reputation. Unleash the power of reviews and digital success. Join us in revolutionizing the way small businesses grow.",
    mobile: {
      ...{
        src: "/home/mobile_home_3.png",
      },
      ...mobileProps,
    },
    tablet: {
      ...{
        src: "/home/tablet_home_3.png",
      },
      ...tabletProps,
    },
    desktop: {
      ...{
        src: "/home/desktop_home_3.png",
      },
      ...desktopProps,
    },
    widescreen: {
      ...{
        src: "/home/widescreen_home_3.png",
      },
      ...wideScreenProps,
    },
    extra_widescreen: {
      ...{
        src: "/home/extra_widescreen_home_3.png",
      },
      ...extraWideScreenProps,
    },
  },
];

export default HeroComponentProps;
