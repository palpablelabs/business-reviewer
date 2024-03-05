"use client";

import React from "react";

import PricingCard from "../components/pricingCard";

export default function Plans() {
  return (
    <div className="h-full w-full">
      <PricingCard
        type="standard"
        currency="£"
        charge={30}
        occurance="month"
        buttonText="BUY Now"
        benefits={[
          "300 free sms",
          "30 visiting card with QR code",
          "30 discount coupon limit",
        ]}
      />
      <PricingCard
        type="Small Boost"
        currency="£"
        charge={50}
        occurance="month"
        buttonText="BUY Now"
        benefits={[
          "500 free sms",
          "50 visiting card with QR code",
          "50 discount coupon limit",
        ]}
      />
      <PricingCard
        type="Big Boost"
        currency="£"
        charge={100}
        occurance="month"
        buttonText="BUY Now"
        benefits={[
          "1000 free sms",
          "100 visiting card with QR code",
          "100 discount coupon limit",
        ]}
      />
    </div>
  );
}
