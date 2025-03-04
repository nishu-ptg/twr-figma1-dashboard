import React from "react";
import { useDataSource } from "../../context/DataSourceContext";
import WeeklyActivityChart from "./WeeklyActivityChart";

const WeeklyActivity = () => {
  const { useApiData } = useDataSource();
  console.log(useApiData);

  const data = [
    { days: "Sat", deposit: 480, withdraw: 250 },
    { days: "Sun", deposit: 350, withdraw: 130 },
    { days: "Mon", deposit: 330, withdraw: 270 },
    { days: "Tue", deposit: 480, withdraw: 380 },
    { days: "Wed", deposit: 150, withdraw: 250 },
    { days: "Thu", deposit: 390, withdraw: 250 },
    { days: "Fri", deposit: 400, withdraw: 350 },
  ];

  return (
    <div className="flex flex-col h-full">
      <div className="header-area">
        <h2>Weekly Activity</h2>
      </div>
      <div className="rounded-card px-[30px] py-[24px] flex items-center flex-1 ">
        <WeeklyActivityChart data={data} />
      </div>
    </div>
  );
};

export default WeeklyActivity;
