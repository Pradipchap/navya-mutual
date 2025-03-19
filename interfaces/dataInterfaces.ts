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

export interface IApiResponse<T>{
	first: number,
  prev: null|number,
  next: null|number,
  last: number,
  pages: number,
  items: number,
	data:T[]
}
export type ISchemeResponse=IApiResponse<IScheme>
export type IInvestmentResponse=IApiResponse<IPurchaseDetails>