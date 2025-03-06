import { useWeeklyActivity } from "../../hooks/useDashboardApi";
import WeeklyActivityChart from "./WeeklyActivityChart";

const WeeklyActivity = () => {
  const { data, loading, error } = useWeeklyActivity();

  return (
    <div className="flex flex-col h-full">
      <div className="header-area">
        <h2>Weekly Activity</h2>
      </div>
      <div className="rounded-card px-[10px] md:px-[30px] py-[24px] flex items-center flex-1 ">
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
