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

const testimonialPropsList = [
  {
    avatar: {
      src: "/home/testimonial/charlie.png",
      alt: "Charlie",
    },
    header: { name: "Charlie", designation: "Mobile Repair", starCount: 5 },
    body: {
      description:
        "Outstanding service for my mobile repair business! The tailored solutions provided a boost to our online presence. Positive reviews have poured in, elevating our brand. Highly recommend for any small business!",
    },
  },
  {
    avatar: {
      src: "/home/testimonial/bob.png",
      alt: "Bob",
    },
    header: { name: "Bob", designation: "Barber", starCount: 4 },
    body: {
      description:
        "Digital transformation for our barber shop has been impressive. The online presence is buzzing, and clients love the ease of appointments. Still exploring features, but overall, a positive experience!",
    },
  },
  {
    avatar: {
      src: "/home/testimonial/alice.png",
      alt: "Alice",
    },
    header: {
      name: "Alice",
      designation: "Green Grocer",
      starCount: 5,
    },
    body: {
      description:
        "Elevating our green grocer business with digital excellence was a game-changer. The impact on our online reputation has been phenomenal. Highly recommend for any local business looking to thrive digitally!",
    },
  },
  {
    avatar: {
      src: "/home/testimonial/ethan.png",
      alt: "Ethan",
    },
    header: {
      name: "Ethan",
      designation: "Takeaway Owner",
      starCount: 4,
    },
    body: {
      description:
        "Enhancing our fast food business and igniting growth has been a fantastic journey. The personalized approach to digital success is clear in the positive reviews we've received. A valuable partner for small businesses!",
    },
  },
];

const heroComponentPropsList = [
  {
    header: "Elevate Your Business to Digital Excellence",
    body: "Boost your online presence, gather authentic reviews, and thrive in the digital era. Join us in elevating your small business to new heights.",
    mobile: {
      ...{
        src: "/home/hero/mobile_home_1.png",
      },
      ...mobileProps,
    },
    tablet: {
      ...{
        src: "/home/hero/tablet_home_1.jpeg",
      },
      ...tabletProps,
    },
    desktop: {
      ...{
        src: "/home/hero/desktop_home_1.png",
      },
      ...desktopProps,
    },
    widescreen: {
      ...{
        src: "/home/hero/widescreen_home_1.png",
      },
      ...wideScreenProps,
    },
    extra_widescreen: {
      ...{
        src: "/home/hero/extra_widescreen_home_1.png",
      },
      ...extraWideScreenProps,
    },
  },
  {
    header: "Revolutionize Your Small Business Digitally",
    body: "Revolutionize your digital journey. Amplify your presence, collect genuine reviews, and embrace the future with our tailored solutions.",
    mobile: {
      ...{
        src: "/home/hero/mobile_home_2.png",
      },
      ...mobileProps,
    },
    tablet: {
      ...{
        src: "/home/hero/tablet_home_2.png",
      },
      ...tabletProps,
    },
    desktop: {
      ...{
        src: "/home/hero/desktop_home_2.png",
      },
      ...desktopProps,
    },
    widescreen: {
      ...{
        src: "/home/hero/widescreen_home_2.png",
      },
      ...wideScreenProps,
    },
    extra_widescreen: {
      ...{
        src: "/home/hero/extra_widescreen_home_2.png",
      },
      ...extraWideScreenProps,
    },
  },
  {
    header: "Enhance Your Business, Ignite Digital Growth",
    body: "Ignite your online reputation. Unleash the power of reviews and digital success. Join us in revolutionizing the way small businesses grow.",
    mobile: {
      ...{
        src: "/home/hero/mobile_home_3.png",
      },
      ...mobileProps,
    },
    tablet: {
      ...{
        src: "/home/hero/tablet_home_3.png",
      },
      ...tabletProps,
    },
    desktop: {
      ...{
        src: "/home/hero/desktop_home_3.png",
      },
      ...desktopProps,
    },
    widescreen: {
      ...{
        src: "/home/hero/widescreen_home_3.png",
      },
      ...wideScreenProps,
    },
    extra_widescreen: {
      ...{
        src: "/home/hero/extra_widescreen_home_3.png",
      },
      ...extraWideScreenProps,
    },
  },
];
const pageProps = {
  heros: heroComponentPropsList,
  testimonials: testimonialPropsList,
};

export default pageProps;
