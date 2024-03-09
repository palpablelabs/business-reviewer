"use client";

import React from "react";
import { Button, Typography } from "@material-tailwind/react";
import { useRouter } from "next/navigation";

export function UnAuthorised() {
  const router = useRouter();

  const handleHome = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    router.push("/");
  };

  const handleLogin = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    router.push("/login");
  };

  return (
    <div className="h-full w-full flex-column">
      <Typography
        variant="h2"
        color="gray"
        className="flex items-center font-normal mb-5"
      >
        Oops! Access Denied.
      </Typography>
      <Typography
        variant="h5"
        color="gray"
        className="flex items-center font-normal mb-5"
      >
        It seems you do not have the necessary permissions to access this page.
      </Typography>
      <Typography
        variant="h5"
        color="gray"
        className="flex items-center font-normal mb-5"
      >
        If you believe this is an error, please contact the administrator or
        return to the Home page or try to Sign In.
      </Typography>
      <Button
        type="button"
        onClick={handleHome}
        className="mt-6"
        color="black"
        fullWidth
      >
        Home Page
      </Button>
      <Button
        type="button"
        onClick={handleLogin}
        className="mt-6"
        color="black"
        fullWidth
      >
        Sign In
      </Button>
    </div>
  );
}
