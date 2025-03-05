import React from "react";
import BalanceHistoryChart from "./BalanceHistoryChart";

const BalanceHistory = () => {
  const defaultData = [
    { month: "Jul", value: 100 },
    { month: "Aug", value: 325 },
    { month: "Sep", value: 235 },
    { month: "Oct", value: 480 },
    { month: "Nov", value: 440 },
    { month: "Dec", value: 775 },
    { month: "Jan", value: 205 },
    { month: "Feb", value: 570 },
    { month: "Mar", value: 230 },
    { month: "Apr", value: 620 },
    { month: "", value: 595 },
  ];

  return (
    <div className="flex flex-col h-full">
      <div className="header-area">
        <h2>Balance History</h2>
      </div>
      <div className="rounded-card px-[22px] py-[24px] flex items-center flex-1">
        <BalanceHistoryChart data={defaultData} />
      </div>
    </div>
  );
};

export default BalanceHistory;
