import { CommonHeader } from "@/components/ScreenHeaders/CommonHeader";
import { InvestmentChart } from "@/sections/InvestmentChart";
import { Stack } from "expo-router";
import React, { Fragment } from "react";

export default function InvestmentDistribution() {
  return (
    <Fragment>
      <Stack.Screen
        options={{
          title: "Oops!",
          header: props => <CommonHeader canGoBack headerIcon={"Home"} headerTitle="Investment Distribution" {...props} />
        }}
      />
      <InvestmentChart isPage />
    </Fragment>
  );
}
