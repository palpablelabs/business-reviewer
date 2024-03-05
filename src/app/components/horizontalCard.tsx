"use client";

import React from "react";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useRouter } from "next/navigation";

interface HorizontalCardProps {
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
    priority: boolean;
  };
  content: {
    header: string;
    subHeading: string;
    body: {
      bulletPoint: string;
      description: string;
    }[];
    button: { text: string; link: string };
  };
}

const HorizontalCard: React.FC<HorizontalCardProps> = ({ image, content }) => {
  const router = useRouter();

  const handleButtonClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    router.push("/signup");
  };
  return (
    <>
      <div className="block 2xl:hidden">
        <Card className="m-0 md:pt-1 w-full flex-column" shadow={false}>
          <CardHeader
            shadow={false}
            floated={false}
            className="m-0 w-full shrink-0 rounded-none"
          >
            <Image
              className="max-w-full h-auto"
              src={image.src}
              alt={image.alt}
              layout="responsive"
              width={image.width}
              height={image.height}
              priority={image.priority}
            />
          </CardHeader>
          <CardBody className="w-full rounded-none">
            <Typography variant="h6" color="gray" className="mb-4 uppercase">
              {content.header}
            </Typography>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              {content.subHeading}
            </Typography>

            <ul className="mb-10">
              {content.body.map((item, index) => (
                <li key={index}>
                  <Typography
                    color="blue-gray"
                    className="max-w-screen-lg font-normal"
                  >
                    <b>{item.bulletPoint} : </b>
                    {item.description}
                  </Typography>
                </li>
              ))}
            </ul>

            <Button
              type="button"
              onClick={handleButtonClick}
              className="w-1/8"
              fullWidth
              color="blue"
            >
              Register Your Business
            </Button>
          </CardBody>
        </Card>
      </div>
      <div className="hidden 2xl:block">
        <Card className="p-5 w-full flex-row" shadow={false}>
          <CardHeader
            shadow={false}
            floated={false}
            className="m-0 w-1/2 shrink-0 rounded-none"
          >
            <Image
              className="max-w-full h-auto"
              src={image.src}
              alt={image.alt}
              layout="responsive"
              width={image.width}
              height={image.height}
              priority={image.priority}
            />
          </CardHeader>
          <CardBody className="w-1/2 rounded-none relative">
            <Typography variant="h6" color="gray" className="mb-4 uppercase">
              {content.header}
            </Typography>
            <Typography variant="h4" color="blue-gray" className="mb-2">
              {content.subHeading}
            </Typography>

            <ul className="mb-10">
              {content.body.map((item, index) => (
                <li key={index}>
                  <Typography
                    color="blue-gray"
                    className="max-w-screen-lg font-normal"
                  >
                    <b>{item.bulletPoint} : </b>
                    {item.description}
                  </Typography>
                </li>
              ))}
            </ul>

            <Button
              type="button"
              className="w-1/8 absolute bottom-5"
              color="blue"
              fullWidth
            >
              Register Your Business
            </Button>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default HorizontalCard;
