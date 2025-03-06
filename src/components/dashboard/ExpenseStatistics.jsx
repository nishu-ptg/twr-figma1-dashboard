import React, { useMemo } from "react";
import ExpenseStatisticsChart from "./ExpenseStatisticsChart";
import { useDataSource } from "../../context/DataSourceContext";
import useFetchData from "../../hooks/useFetchData";

const ExpenseStatistics = () => {
  const defaultData = useMemo(
    () => ({
      labels: ["Investment", "Entertainment", "Bill Expense", "Others"],
      values: [37.5, 25, 12.5, 25],
      colors: ["#fa00ff", "#343c6a", "#fc7900", "#1814f3", "#ff0000"],
    }),
    []
  );

  const { useApiData } = useDataSource();

  const { apiData, loading, error } = useFetchData(
    `${import.meta.env.VITE_ENDPOINT1_API_BASE_URL}/expense-list`,
    useApiData,
    defaultData
  );

  // const data = useApiData ? apiData?.data ?? [] : apiData;
  const data = useApiData
    ? (() => {
        const filteredData = Object.fromEntries(
          Object.entries(apiData.data || {}).filter(([key]) => key !== "id")
        );
        return {
          labels: Object.keys(filteredData).map((label) =>
            label.replace(/\b\w/g, (char) => char.toUpperCase())
          ),
          values: Object.values(filteredData),
          colors: Object.keys(filteredData).map(
            (_, index) => defaultData.colors[index % defaultData.colors.length]
          ),
        };
      })()
    : defaultData;

  return (
    <div className="flex flex-col h-full">
      <div className="header-area">
        <h2>Expense Statistics</h2>
      </div>
      <div className="rounded-card p-[30px] flex items-center flex-1">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="text-red-500">Error: {error}</p>
        ) : (
          <ExpenseStatisticsChart data={data} />
        )}
      </div>
    </div>
  );
};

export default ExpenseStatistics;
