"use client";

import React from "react";
import { useSession } from "next-auth/react";

import { UnAuthorised } from "@/components/unauth";
import { Typography } from "@material-tailwind/react";
import EditBusiness from "@/components/editBusiness";

export default function Dashboard() {
  const { data: session } = useSession();

  return (
    <div>
      {(!session || !session?.user) && <UnAuthorised />}
      {session && session?.user && (
        <>
          <Typography variant="h6" color="gray" className="mb-4 uppercase">
            Welcome {session?.user.name?.split(" ")[0]}!
          </Typography>
          <Typography variant="h6" color="gray" className="mb-4">
            {
              "Enter your business details now and boost your online visibility. Let's make your business shine!"
            }
          </Typography>
          <EditBusiness
            firstName={session?.user.name!?.split(" ")[0]}
            lastName={session?.user.name!?.split(" ")[1]}
            email={session?.user?.email!}
          />
        </>
      )}
    </div>
  );
}
