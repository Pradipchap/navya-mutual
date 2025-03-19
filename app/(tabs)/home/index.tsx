import { ScreenWrapper } from "@/components/Wrappers/ScreenWrapper";
import { LatestInvestment } from "@/sections/HomeSections/LatestInvestment";
import { PopularSchemeSection } from "@/sections/HomeSections/PopularSchemeSection";
import { InvestmentChart } from "@/sections/InvestmentChart";
import React from "react";

export default function index() {
  return (
    <ScreenWrapper>
      <InvestmentChart />
      <PopularSchemeSection />
      <LatestInvestment />
    </ScreenWrapper>
  );
}
