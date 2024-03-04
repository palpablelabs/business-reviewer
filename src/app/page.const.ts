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

const mobile_1 = {
  ...{
    src: "/home/mobile_home_1.png",
  },
  ...mobileProps,
};
const mobile_2 = {
  ...{
    src: "/home/mobile_home_2.png",
  },
  ...mobileProps,
};
const mobile_3 = {
  ...{
    src: "/home/mobile_home_3.png",
  },
  ...mobileProps,
};

const tablet_1 = {
  ...{
    src: "/home/tablet_home_1.jpeg",
  },
  ...tabletProps,
};
const tablet_2 = {
  ...{
    src: "/home/tablet_home_2.png",
  },
  ...tabletProps,
};
const tablet_3 = {
  ...{
    src: "/home/tablet_home_3.png",
  },
  ...tabletProps,
};

const desktop_1 = {
  ...{
    src: "/home/desktop_home_1.png",
  },
  ...desktopProps,
};
const desktop_2 = {
  ...{
    src: "/home/desktop_home_2.png",
  },
  ...desktopProps,
};
const desktop_3 = {
  ...{
    src: "/home/desktop_home_3.png",
  },
  ...desktopProps,
};

const widescreen_1 = {
  ...{
    src: "/home/widescreen_home_1.png",
  },
  ...wideScreenProps,
};
const widescreen_2 = {
  ...{
    src: "/home/widescreen_home_2.png",
  },
  ...wideScreenProps,
};
const widescreen_3 = {
  ...{
    src: "/home/widescreen_home_3.png",
  },
  ...wideScreenProps,
};

const extra_widescreen_1 = {
  ...{
    src: "/home/extra_widescreen_home_1.png",
  },
  ...extraWideScreenProps,
};
const extra_widescreen_2 = {
  ...{
    src: "/home/extra_widescreen_home_2.png",
  },
  ...extraWideScreenProps,
};
const extra_widescreen_3 = {
  ...{
    src: "/home/extra_widescreen_home_3.png",
  },
  ...extraWideScreenProps,
};

const PageConst = {
  mobile_1,
  mobile_2,
  mobile_3,
  tablet_1,
  tablet_2,
  tablet_3,
  desktop_1,
  desktop_2,
  desktop_3,
  widescreen_1,
  widescreen_2,
  widescreen_3,
  extra_widescreen_1,
  extra_widescreen_2,
  extra_widescreen_3,
};

export default PageConst;
