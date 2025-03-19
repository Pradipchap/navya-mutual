export interface IScheme{
	id:number
	name:string,
	pricePerUnit:number,
	minimumInvestment:number
}

export interface IPurchase{
	id:number
	schemeId:number,
	amount:number,
	units:number
}

export interface IPurchaseDetails extends IPurchase{
  name:string
}