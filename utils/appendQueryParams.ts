import { TQuery } from "@/interfaces/componentInterfaces";

export const appendQueryParams = (api: string, query: TQuery) => {
  const fullUrl = `${api}&${new URLSearchParams(query).toString()}`;
	return fullUrl
};
