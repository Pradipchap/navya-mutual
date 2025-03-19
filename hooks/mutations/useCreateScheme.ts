import { ShowSchemeSuccess } from '@/components/PopupContent/ShowSchemeCreationCompletion';
import { SCHEMES } from "@/constants/endpoints";
import { STATUS } from "@/constants/misc";
import { IScheme } from "@/interfaces/dataInterfaces";
import { useState } from "react";
import { useModalHandler } from "../componentHooks/useModal";
import { useSchemeStore } from '@/store/useSchemeStore';

export const useCreateScheme = () => {
  const [status, setStatus] = useState<STATUS>(STATUS.IDLE);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
const {updateSchemes}=useSchemeStore()
  const {handleOpen,handleClose}=useModalHandler()


  //function to show confirmation
  const handleSuccess=(props:IScheme)=>{
    handleOpen(ShowSchemeSuccess(props))
    updateSchemes(props)
    setTimeout(() => {
      handleClose()
    }, 3000);
  }

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

      //if success
      const returneddata:IScheme=await response.json()
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
  return { status, createScheme, errorMessage };
};
