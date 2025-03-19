import { ScreenWrapper } from "@/components/Wrappers/ScreenWrapper";
import { CreateSchemeButton } from "@/sections/MutualSchemeSection/CreateSchemeButton";
import { SchemeList } from "@/sections/MutualSchemeSection/SchemeList";
import React from "react";

export default function index() {
  return (
    <ScreenWrapper scrollEnabled={false}>
      <CreateSchemeButton />
      <SchemeList />
    </ScreenWrapper>
  );
}
