"use client";

import React, { useState } from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

interface EditBusinessProps {
  firstName: string;
  lastName: string;
  email: string;
}

const EditBusiness: React.FC<EditBusinessProps> = ({
  firstName,
  lastName,
  email,
}) => {
  const [bemail, setEmail] = useState(email);
  const [fname, setFname] = useState(firstName);
  const [lname, setLname] = useState(lastName);
  const [bname, setBname] = useState("");
  const [bdescription, setbdescription] = useState("");
  const [bphone, setbphone] = useState("+44");
  const [bwebAddress, setbwebAddress] = useState("");
  const [blocation, setblocation] = useState("");
  const [bopenTimes, setbopenTimes] = useState("");
  const [services, setServices] = useState("");
  const [isAgreementChecked, setIsAgreementChecked] = useState(false);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    console.log("Form submitted with:", {
      bemail,
      fname,
      lname,
      bname,
      bdescription,
      bphone,
      bwebAddress,
      blocation,
      bopenTimes,
      services,
      isAgreementChecked,
    });
  };

  const handleAgreementChecked = () =>
    setIsAgreementChecked(!isAgreementChecked);

  return (
    <Card color="transparent" shadow={false} className="max-w-md">
      <form className="mt-5 mb-2" onSubmit={handleSubmit}>
        <div className="mb-1 flex flex-col gap-6">
          <Input
            label="First Name"
            type="text"
            required
            size="lg"
            placeholder=""
            crossOrigin={undefined}
            value={fname}
            onChange={(e) => setFname(e.target.value)}
          />
          <Input
            label="Last Name"
            type="text"
            required
            size="lg"
            placeholder=""
            crossOrigin={undefined}
            value={lname}
            onChange={(e) => setLname(e.target.value)}
          />
          <Input
            label="Business Phone Number"
            type="text"
            required
            size="lg"
            placeholder=""
            crossOrigin={undefined}
            value={bphone}
            onChange={(e) => setbphone(e.target.value)}
          />
          <Input
            label="Business Email"
            type="email"
            required
            size="lg"
            placeholder="e.g. claire@business.com"
            crossOrigin={undefined}
            value={bemail}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            label="Business Name"
            type="text"
            required
            size="lg"
            placeholder=""
            crossOrigin={undefined}
            value={bname}
            onChange={(e) => setBname(e.target.value)}
          />
          <Input
            label="Services Offered"
            type="text"
            required
            size="lg"
            placeholder="Laptop body repair, Mobile phone support"
            crossOrigin={undefined}
            value={services}
            onChange={(e) => setServices(e.target.value)}
          />
          <Input
            label="Web Address"
            type="text"
            size="lg"
            placeholder="https://www.company.co.uk"
            crossOrigin={undefined}
            value={bwebAddress}
            onChange={(e) => setbwebAddress(e.target.value)}
          />
          <Input
            label="About the Business"
            type="text"
            required
            size="lg"
            placeholder=""
            crossOrigin={undefined}
            value={bdescription}
            onChange={(e) => setbdescription(e.target.value)}
          />
          <Input
            label="Business Location"
            type="text"
            required
            size="lg"
            placeholder="abc, def"
            crossOrigin={undefined}
            value={blocation}
            onChange={(e) => setblocation(e.target.value)}
          />

          <Input
            label="Operating Hours"
            type="text"
            required
            size="lg"
            placeholder="abc, def"
            crossOrigin={undefined}
            value={bopenTimes}
            onChange={(e) => setbopenTimes(e.target.value)}
          />
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
          Create Business Profile
        </Button>
      </form>
    </Card>
  );
};

export default EditBusiness;
