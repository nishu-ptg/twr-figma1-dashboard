import React from "react";
import { useBalanceHistory } from "../../hooks/useDashboardApi";
import BalanceHistoryChart from "./BalanceHistoryChart";

const BalanceHistory = () => {
  const { apiData: data, loading, error } = useBalanceHistory();

  return (
    <div className="flex flex-col h-full">
      <div className="header-area">
        <h2>Balance History</h2>
      </div>
      <div className="rounded-card px-[10px] md:px-[22px] py-[24px] flex items-center flex-1">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="text-red-500">Error: {error}</p>
        ) : (
          <BalanceHistoryChart data={data} />
        )}
      </div>
    </div>
  );
};

export default BalanceHistory;
