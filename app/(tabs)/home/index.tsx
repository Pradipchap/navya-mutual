import { InvestmentCard } from "@/components/Cards/InvestmentCard";
import { ScreenWrapper } from "@/components/Wrappers/ScreenWrapper";
import { SectionWrapper } from "@/components/Wrappers/SectionWrapper";
import { useModalHandler } from "@/hooks/componentHooks/useModal";
import { CreateScheme } from "@/sections/MutualSchemeSection/CreateScheme";
import React from "react";
import { Text, TouchableOpacity } from "react-native";

export default function index() {
  const { handleOpen } = useModalHandler();
  const handle = () => {
    handleOpen(<Text>Pradip</Text>);
  };
  return (
    <ScreenWrapper>
      <TouchableOpacity onPress={handle}>
        <Text>Hello home</Text>
      </TouchableOpacity>
      <CreateScheme />
      <SectionWrapper>
        <InvestmentCard name="Pradip Mutual Scheme" units={30} amount={300} schemeId={1} id={1} />
      </SectionWrapper>
    </ScreenWrapper>
  );
}
