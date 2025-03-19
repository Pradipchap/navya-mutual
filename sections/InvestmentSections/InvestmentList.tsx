import { useInvestmentStore } from "@/store/useInvestmentStore";
import React, { useEffect } from "react";
import { InvestmentListUI } from "./InvestmentListUI";

export const InvestmentList = () => {
  const { investments, fetchInvestments, loading, loadMore } = useInvestmentStore();

  useEffect(() => {
    fetchInvestments();
  }, []);

  return <InvestmentListUI investments={investments} loadMore={loadMore} loading={loading} />;
};
