import React from "react";
import ExpenseChart from "./ExpenseChart";

const ExpenseStatistics = () => {
  const data = {
    labels: ["Investment", "Entertainment", "Bill Expense", "Others"],
    values: [40, 25, 15, 25],
    colors: ["#fa00ff", "#343c6a", "#fc7900", "#1814f3"],
  };

  return (
    <div className="flex flex-col h-full">
      <div className="header-area">
        <h2>Expense Statistics</h2>
      </div>
      <div className="rounded-card p-[30px] flex items-center flex-1">
        <ExpenseChart data={data} />
      </div>
    </div>
  );
};

export default ExpenseStatistics;
