import { ScreenWrapper } from "@/components/Wrappers/ScreenWrapper";
import { STATUS } from "@/constants/misc";
import { useGetInvestments } from "@/hooks/queries/useGetInvestments";
import { InvestmentListUI } from "@/sections/InvestmentSections/InvestmentListUI";
import SchemeDetails from "@/sections/MutualSchemeSection/SchemeDetails";
import { useLocalSearchParams } from "expo-router";
import React from "react";

export default function ShemeDetails() {
  const { id } = useLocalSearchParams();
  const { investments, status, increasePage } = useGetInvestments({ query: { schemeId: id as string } });

  return (
    <ScreenWrapper scrollEnabled={false}>
      <SchemeDetails />
      <InvestmentListUI investments={investments} loading={status === STATUS.LOADING} loadMore={increasePage} />
    </ScreenWrapper>
  );
}
