"use client";

import React from "react";
import { useSession } from "next-auth/react";

import { UnAuthorised } from "@/components/unauth";

export default function Dashboard() {
  const { data: session } = useSession();

  return (
    <>
      {(!session || !session?.user) && <UnAuthorised />}
      {session && session?.user && <div>auth</div>}
    </>
  );
}
