import { IScheme } from "@/interfaces/dataInterfaces"
import { useModalHandler } from "./useModal"
import { CreateInvestment } from "@/sections/InvestmentSections/CreateInvestment"

export const useOpenCreateInvestment = () => {

	const {handleOpen}=useModalHandler()

	const openCreateInvestmentModal=(schemeData:IScheme)=>{
		handleOpen(<CreateInvestment {...schemeData}/>)

	}
	return {openCreateInvestmentModal}
}
