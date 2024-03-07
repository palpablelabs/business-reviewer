"use client";

import React, { useState } from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAgreementChecked, setIsAgreementChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSignup = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    router.push("/signup");
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    console.log("Form submitted with:", {
      email,
      password,
      isAgreementChecked,
    });

    console.log("Allow Login");
  };

  const handleAgreementChecked = () =>
    setIsAgreementChecked(!isAgreementChecked);

  const handlePasswordChange = (e: { target: { value: any } }) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
  };

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <Card color="transparent" shadow={false}>
      <Typography
        color="blue-gray"
        className="flex items-center justify-center font-bold sm:text-sm md:text-3xl lg:text-3xl"
      >
        Log in to view your business
      </Typography>
      <form className="mt-8 mb-2" onSubmit={handleSubmit}>
        <div className="mb-1 flex flex-col gap-6">
          <Input
            label="Email Address"
            type="email"
            required
            size="lg"
            placeholder="e.g. claire@business.com"
            crossOrigin={undefined}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            label="Password"
            type={showPassword ? "text" : "password"}
            autoComplete="off"
            required
            size="lg"
            placeholder="*******"
            crossOrigin={undefined}
            value={password}
            onChange={handlePasswordChange}
          />

          {password && (
            <Button size="sm" onClick={togglePasswordVisibility}>
              {!showPassword ? "Show Password" : "Hide Password"}
            </Button>
          )}

          <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree with the terms and conditions
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
            crossOrigin={undefined}
            required
            checked={isAgreementChecked}
            onChange={handleAgreementChecked}
          />
        </div>

        <Button type="submit" className="mt-6" color="blue" fullWidth>
          log in
        </Button>

        <Typography color="gray" className="mt-4 text-center font-normal">
          New here?
        </Typography>
        <Typography
          onClick={handleSignup}
          color="blue"
          className="font-medium transition-colors hover:text-blue-700 flex items-center justify-center cursor-pointer"
        >
          Sign Up
        </Typography>
      </form>
    </Card>
  );
}
