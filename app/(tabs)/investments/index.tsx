import { ScreenWrapper } from "@/components/Wrappers/ScreenWrapper";
import { LatestInvestment } from "@/sections/HomeSections/LatestInvestment";
import { PopularSchemeSection } from "@/sections/HomeSections/PopularSchemeSection";
import React from "react";

export default function index() {
  return (
    <ScreenWrapper>
      <PopularSchemeSection />
      <LatestInvestment />
    </ScreenWrapper>
  );
}
