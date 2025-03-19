import { SCHEMES } from "@/constants/endpoints";
import { STATUS } from "@/constants/misc";
import { IScheme } from "@/interfaces/dataInterfaces";
import { useState } from "react";

export const useCreateScheme = () => {
  const [status, setStatus] = useState<STATUS>(STATUS.IDLE);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const createScheme = async (schemeData: Omit<IScheme, "id">) => {
    setStatus(STATUS.LOADING);
    try {
      const response = await fetch(SCHEMES, {
        method: "POST",
        body: JSON.stringify(schemeData)
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
  return { status, createScheme, errorMessage };
};
