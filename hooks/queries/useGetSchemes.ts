import {  SCHEMES } from "@/constants/endpoints"
import { STATUS } from "@/constants/misc"
import { IScheme } from "@/interfaces/dataInterfaces"
import { useEffect, useState } from "react"

export const useGetSchemes = () => {
	const [status,setStatus]=useState<STATUS>(STATUS.IDLE)
	const [page,setPage]=useState(1)
	const [errorMessage,setErrorMessage]=useState<string|null>(null)
  const limit=10

	const getSchemes=async()=>{
		try {
		const response=await fetch(`${SCHEMES}?_page=${page}&_limit=${limit}`);
		if(!response.ok){
      throw "Error fetching investments"
		}
		const data:IScheme[]=await response.json()
		return data
		} catch (error) {
			setErrorMessage(JSON.stringify(error))
		}
	}

	useEffect(() => {
		const handleGetSchemes=async()=>{
			const schemes=await getSchemes();
			if(page===1){
				//add all data
			}else{
				//append data
			}
		}
		handleGetSchemes()
	}, [page])
	

	const increasePage=()=>{
		setPage(p=>p+1)
	}
	const handleRefresh=()=>{
		setPage(1)
	}

	return { status,setStatus,increasePage,handleRefresh,errorMessage}

}
