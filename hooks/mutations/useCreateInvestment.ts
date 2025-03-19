import { INVESTMENTS } from "@/constants/endpoints";
import { STATUS } from "@/constants/misc";
import { IPurchaseDetails } from "@/interfaces/dataInterfaces";
import { useState } from "react";
import { useModalHandler } from "../componentHooks/useModal";
import { useSchemeStore } from '@/store/useSchemeStore';
import { ShowInvestmentSuccess } from "@/components/PopupContent/ShowInvestmentSuccess";
import { useInvestmentStore } from "@/store/useInvestmentStore";

export const useCreateInvestment = () => {
  const [status, setStatus] = useState<STATUS>(STATUS.IDLE);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const {updateInvestments}=useInvestmentStore()
  const {handleOpen,handleClose}=useModalHandler()


  //function to show confirmation
  const handleSuccess=(props:IPurchaseDetails)=>{
    handleOpen(ShowInvestmentSuccess(props))
    updateInvestments(props)
    setTimeout(() => {
      handleClose()
    }, 3000);
  }

  const createInvestment = async (investmentData: Omit<IPurchaseDetails, "id">) => {
    setStatus(STATUS.LOADING);
    try {
      const response = await fetch(INVESTMENTS, {
        method: "POST",
        body: JSON.stringify(investmentData)
      });
      if (!response.ok) {
        throw "";
      }

      //if success
      const returneddata:IPurchaseDetails=await response.json()
      setStatus(STATUS.SUCCESS);
      handleSuccess(returneddata)
    } catch (error) {
      setErrorMessage(JSON.stringify(error));
      setStatus(STATUS.FAILED);
      setTimeout(() => {
        setStatus(STATUS.IDLE)
      }, 2000);
    }
  };
  return { status, createInvestment, errorMessage };
};
