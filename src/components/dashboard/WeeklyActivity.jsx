import { useWeeklyActivity } from "../../hooks/useDashboardApi";
import { SectionHeader, SectionBody } from "../common";
import WeeklyActivityChart from "./subcomponents/WeeklyActivityChart";

const WeeklyActivity = () => {
  const { data, loading, error } = useWeeklyActivity();

  return (
    <div className="flex flex-col h-full">
      <SectionHeader>Weekly Activity</SectionHeader>

      <div className="rounded-card px-[10px] md:px-[30px] py-[24px] flex items-center flex-1 ">
        <SectionBody loading={loading} error={error}>
          <WeeklyActivityChart data={data} />
        </SectionBody>
      </div>
    </div>
  );
};

export default WeeklyActivity;
