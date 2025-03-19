import { ScreenWrapper } from "@/components/Wrappers/ScreenWrapper";
import { InvestmentList } from "@/sections/InvestmentSections/InvestmentList";
import React from "react";

export default function index() {
  return (
    <ScreenWrapper scrollEnabled={false}>
      <InvestmentList />
    </ScreenWrapper>
  );
}
