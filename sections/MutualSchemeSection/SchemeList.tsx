import { useSchemeStore } from "@/store/useSchemeStore";
import React, { useEffect } from "react";
import { SchemeListUI } from "./SchemeListUI";

export const SchemeList = () => {
  const { schemes, fetchSchemes, loading, loadMore } = useSchemeStore();

  useEffect(() => {
    fetchSchemes();
  }, []);

  return <SchemeListUI schemes={schemes} loadMore={loadMore} loading={loading} />;
};
