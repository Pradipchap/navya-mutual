import { InvestmentCard } from "@/components/Cards/InvestmentCard";
import { SchemeCard } from "@/components/Cards/SchemeCard";
import { ScreenWrapper } from "@/components/Wrappers/ScreenWrapper";
import { SectionWrapper } from "@/components/Wrappers/SectionWrapper";
import { CreateScheme } from "@/sections/MutualSchemeSection/CreateScheme";
import React from "react";
import { Text } from "react-native";

export default function index() {
  return (
    <ScreenWrapper>
      <Text>Hello home</Text>
      <CreateScheme />
      <SectionWrapper>
        <InvestmentCard name="Pradip Mutual Scheme" units={30} amount={300} schemeId={1} id={1} />
      </SectionWrapper>
    </ScreenWrapper>
  );
}
