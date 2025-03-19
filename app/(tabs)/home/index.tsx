import { InvestmentCard } from "@/components/Cards/InvestmentCard";
import { ScreenWrapper } from "@/components/Wrappers/ScreenWrapper";
import { SectionWrapper } from "@/components/Wrappers/SectionWrapper";
import { useModalHandler } from "@/hooks/componentHooks/useModal";
import { LatestInvestment } from "@/sections/HomeSections/LatestInvestment";
import { PopularSchemeSection } from "@/sections/HomeSections/PopularSchemeSection";
import { CreateScheme } from "@/sections/MutualSchemeSection/CreateScheme";
import React from "react";
import { Text } from "react-native";

export default function index() {
  const { handleOpen } = useModalHandler();
  const handle = () => {
    handleOpen(<Text>Pradip</Text>);
  };
  return (
    <ScreenWrapper scrollEnabled={false}>
      <PopularSchemeSection />
      <LatestInvestment/>
    </ScreenWrapper>
  );
}
