import {  SCHEMES } from "@/constants/endpoints"
import { STATUS } from "@/constants/misc"
import { IScheme } from "@/interfaces/dataInterfaces"
import { useEffect, useState } from "react"

export const useGetSchemeDetails = ({id}:{id:string}) => {
	const [status,setStatus]=useState<STATUS>(STATUS.IDLE)
	const [errorMessage,setErrorMessage]=useState<string|null>(null)
	const [schemeDetails,setSchemeDetails]=useState<IScheme|null>(null)

	const getSchemeDetails=async()=>{
		try {
		const response=await fetch(`${SCHEMES}/${id}`);
		if(!response.ok){
      throw "Error fetching investments"
		}
		const data:IScheme=await response.json()
		setSchemeDetails(data)
		} catch (error) {
			setErrorMessage(JSON.stringify(error))
		}
	}

	useEffect(() => {
		getSchemeDetails()
	}, [id])
	

	

	return { status,setStatus,errorMessage,schemeDetails}

}
