"use client";

import React from "react";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import { useRouter } from "next/navigation";

export default function StickyNavBar() {
  const router = useRouter();
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const handleSignup = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setOpenNav(false);
    router.push("/signup");
  };

  const handleLogin = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setOpenNav(false);
    router.push("/login");
  };

  const handleHome = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setOpenNav(false);
    router.push("/");
  };

  return (
    <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          onClick={handleHome}
          className="mr-4 cursor-pointer py-1.5 font-medium"
        >
          Business Reviewer
        </Typography>

        <div className="flex items-center gap-4">
          <Button
            onClick={handleLogin}
            variant="gradient"
            size="sm"
            className="hidden lg:inline-block"
            color="blue"
          >
            <span>Log In</span>
          </Button>

          <Button
            onClick={handleSignup}
            variant="gradient"
            size="sm"
            className="hidden lg:inline-block"
            color="blue"
          >
            <span>Sign Up</span>
          </Button>
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <div className="flex items-center m-4 gap-4">
          <Button
            onClick={handleLogin}
            fullWidth
            variant="gradient"
            size="sm"
            className=""
            color="blue"
          >
            <span>Log In</span>
          </Button>

          <Button
            onClick={handleSignup}
            fullWidth
            variant="gradient"
            size="sm"
            className=""
            color="blue"
          >
            <span>Sign Up</span>
          </Button>
        </div>
      </Collapse>
    </Navbar>
  );
}
