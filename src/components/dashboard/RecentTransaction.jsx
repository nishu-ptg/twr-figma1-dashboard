import React, { useMemo } from "react";
import RecentTransactionItem from "./RecentTransactionItem";
import { useDataSource } from "../../context/DataSourceContext";
import useFetchData from "../../hooks/useFetchData";

const RecentTransaction = () => {
  const bgColors = ["#fff5d9", "#e7edff", "#dcfaf8"];
  const defaultData = useMemo(
    () => [
      { name: "Deposit from my Card", date: "28 January 2021", amount: -850 },
      { name: "Deposit Paypal", date: "25 January 2021", amount: 2500 },
      { name: "Jemi Wilson", date: "21 January 2021", amount: 4800 },
    ],
    []
  );

  const { useApiData } = useDataSource();

  const { apiData, loading, error } = useFetchData(
    `${import.meta.env.VITE_ENDPOINT1_API_BASE_URL}/recent-transactions-list`,
    useApiData,
    defaultData
  );

  const data = useApiData ? apiData?.data ?? [] : apiData;

  return (
    <>
      <div className="header-area">
        <h2>Recent Transaction</h2>
      </div>
      <div className="rounded-card p-[10px] md:p-[25px] flex items-center flex-1">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="text-red-500">Error: {error}</p>
        ) : (
          <ul className="flex flex-col w-full gap-[10px]">
            {data.map((transaction, index) => (
              <RecentTransactionItem
                key={index}
                index={index}
                transaction={transaction}
                bgColor={bgColors[index % bgColors.length]}
              />
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default RecentTransaction;
