import { INVESTMENTS } from "@/constants/endpoints";
import { STATUS } from "@/constants/misc";
import { TQuery } from "@/interfaces/componentInterfaces";
import { IInvestmentResponse, IPurchaseDetails } from "@/interfaces/dataInterfaces";
import { appendQueryParams } from "@/utils/appendQueryParams";
import { useEffect, useState } from "react";

interface Props {
  query: TQuery;
}

export const useGetInvestments = ({ query }: Props) => {
  const [status, setStatus] = useState<STATUS>(STATUS.IDLE);
  const [investments, setInvestments] = useState<IPurchaseDetails[]>([]);
  const [page, setPage] = useState(1);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const limit = 10;

  const getInvestments = async () => {
    try {
      const full_url = appendQueryParams(`${INVESTMENTS}?_page=${page}&_per_page=${limit}`, query);
      const response = await fetch(full_url);
      if (!response.ok) {
        throw "Error fetching investments";
      }
      const data: IInvestmentResponse = await response.json();
      setInvestments(data.data);
      return data;
    } catch (error) {
      setErrorMessage(JSON.stringify(error));
    }
  };

  useEffect(() => {
    const handleGetInvestments = async () => {
      await getInvestments();
    };
    handleGetInvestments();
  }, [page, JSON.stringify(query)]);

  const increasePage = () => {
    setPage(p => p + 1);
  };
  const handleRefresh = () => {
    setPage(1);
  };

  return { investments, setInvestments, status, setStatus, increasePage, handleRefresh, errorMessage };
};
