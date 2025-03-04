import React, { useMemo } from "react";
import { useDataSource } from "../../context/DataSourceContext";
import useFetchData from "../../hooks/useFetchData";
import WeeklyActivityChart from "./WeeklyActivityChart";

const WeeklyActivity = () => {
  const defaultData = useMemo(
    () => [
      { days: "Sat", deposit: 480, withdraw: 250 },
      { days: "Sun", deposit: 350, withdraw: 130 },
      { days: "Mon", deposit: 330, withdraw: 270 },
      { days: "Tue", deposit: 480, withdraw: 380 },
      { days: "Wed", deposit: 150, withdraw: 250 },
      { days: "Thu", deposit: 390, withdraw: 250 },
      { days: "Fri", deposit: 400, withdraw: 350 },
    ],
    []
  );

  const { useApiData } = useDataSource();

  const { apiData, loading, error } = useFetchData(
    `${import.meta.env.VITE_ENDPOINT1_API_BASE_URL}/weekly-activity-list`,
    useApiData,
    defaultData
  );

  const data = useApiData ? apiData?.data ?? [] : apiData;

  return (
    <div className="flex flex-col h-full">
      <div className="header-area">
        <h2>Weekly Activity</h2>
      </div>
      <div className="rounded-card px-[30px] py-[24px] flex items-center flex-1 ">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="text-red-500">Error: {error}</p>
        ) : (
          <WeeklyActivityChart data={data} />
        )}
      </div>
    </div>
  );
};

export default WeeklyActivity;
