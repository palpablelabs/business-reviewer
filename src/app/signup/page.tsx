"use client";

import React, { useEffect, useState } from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";

export default function Signup() {
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    if (session && session?.user) {
      router.push("/dashboard");
    }
  }, [router, session]);

  enum PasswordStrength {
    Weak = "Weak",
    Medium = "Medium",
    Strong = "Strong",
  }
  const [email, setEmail] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isAgreementChecked, setIsAgreementChecked] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState("");
  const [isPasswordMatched, setIsPasswordMatched] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    console.log("Form submitted with:", {
      email,
      fname,
      lname,
      password,
      confirmPassword,
      isAgreementChecked,
      passwordStrength,
      isPasswordMatched,
    });

    if (passwordStrength === PasswordStrength.Strong && isPasswordMatched) {
      console.log("Allow SIGNUP");
    }
  };

  const handleLogin = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    router.push("/login");
  };

  const handleAgreementChecked = () =>
    setIsAgreementChecked(!isAgreementChecked);

  const handlePasswordChange = (e: { target: { value: any } }) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    checkPasswordStrength(newPassword);
  };

  const handleConfirmPassword = (e: { target: { value: any } }) => {
    const confirmPassword = e.target.value;
    setConfirmPassword(confirmPassword);
    setIsPasswordMatched(confirmPassword === password);
  };

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const checkPasswordStrength = (value: PasswordStrength) => {
    const strongRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const mediumRegex = /^(?=.*[a-zA-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/;

    if (strongRegex.test(password)) {
      setPasswordStrength(PasswordStrength.Strong);
    } else if (mediumRegex.test(password)) {
      setPasswordStrength(PasswordStrength.Medium);
    } else {
      setPasswordStrength(PasswordStrength.Weak);
    }
  };

  return (
    <Card color="transparent" shadow={false} className="max-w-md">
      <Typography
        color="blue-gray"
        className="flex items-center justify-center mb-5 font-bold text-2xl"
      >
        Create a free account to manage your digital business profile.
      </Typography>
      <>
        <Button
          onClick={async () => await signIn("google")}
          size="lg"
          variant="outlined"
          color="blue-gray"
          className="flex items-center justify-center gap-3 mt-5"
        >
          <Image
            src="https://docs.material-tailwind.com/icons/google.svg"
            alt="metamask"
            className="h-5 w-5"
            width="80"
            height="80"
          />
          Signup with Google
        </Button>
        <Typography
          color="blue-gray"
          className=" mt-4 flex items-center justify-center"
        >
          Or
        </Typography>
      </>
      <form className="mt-5 mb-2" onSubmit={handleSubmit}>
        <div className="mb-1 flex flex-col gap-6">
          <Input
            label="First Name"
            type="text"
            required
            size="lg"
            placeholder="e.g. Claire"
            crossOrigin={undefined}
            value={fname}
            onChange={(e) => setFname(e.target.value)}
          />
          <Input
            label="Last Name"
            type="text"
            required
            size="lg"
            placeholder="e.g. Nolan"
            crossOrigin={undefined}
            value={lname}
            onChange={(e) => setLname(e.target.value)}
          />
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

          <Typography variant="small" className="blue-grey">
            Use at least 8 characters, one lowercase(a-z), one uppercase(A-Z),
            one number(0-9) and one special character(@$!%*?&)
          </Typography>

          {password && passwordStrength !== "" && (
            <Typography variant="small" color="blue-gray">
              Password Strength :<label> </label>
              {passwordStrength === PasswordStrength.Strong && (
                <label className="text-green-800 font-bold">
                  {passwordStrength}
                </label>
              )}
              {passwordStrength === PasswordStrength.Weak && (
                <label className="text-red-800 font-bold">
                  {passwordStrength}
                </label>
              )}
              {passwordStrength === PasswordStrength.Medium && (
                <label className="text-amber-800 font-bold">
                  {passwordStrength}
                </label>
              )}
            </Typography>
          )}
          <Input
            label="Confirm Password"
            type={showPassword ? "text" : "password"}
            autoComplete="off"
            required
            size="lg"
            placeholder="*******"
            crossOrigin={undefined}
            value={confirmPassword}
            onChange={handleConfirmPassword}
          />
          {!isPasswordMatched && password && confirmPassword && (
            <Typography variant="small" className="text-red-800 font-bold">
              Passwords should match
            </Typography>
          )}
          {isPasswordMatched && password && confirmPassword && (
            <Typography variant="small" className="text-green-800 font-bold">
              Passwords matched
            </Typography>
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

        <Button type="submit" className="mt-6" color="black" fullWidth>
          sign up
        </Button>

        <Typography color="gray" className="mt-4 text-center font-normal">
          Already have an account?
        </Typography>
        <Typography
          onClick={handleLogin}
          color="blue"
          className="font-medium transition-colors hover:text-blue-700 flex items-center justify-center cursor-pointer"
        >
          Sign In
        </Typography>
      </form>
    </Card>
  );
}
