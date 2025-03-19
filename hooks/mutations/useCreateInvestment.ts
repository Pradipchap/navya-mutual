import { INVESTMENTS } from "@/constants/endpoints";
import { STATUS } from "@/constants/misc";
import { IPurchase } from "@/interfaces/dataInterfaces";
import { useState } from "react";

export const useCreateInvestment = () => {
  const [status, setStatus] = useState<STATUS>(STATUS.IDLE);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const createInvestment= async (investmentData: Omit<IPurchase, "id">) => {
    setStatus(STATUS.LOADING);
    try {
      const response = await fetch(INVESTMENTS, {
        method: "POST",
        body: JSON.stringify(investmentData)
      });
      if (!response.ok) {
        throw "";
      }
      //handle on Success
      setStatus(STATUS.SUCCESS);
    } catch (error) {
      setErrorMessage(JSON.stringify(error));
      setStatus(STATUS.FAILED);
    }
  };
  return { status, createInvestment, errorMessage };
};
