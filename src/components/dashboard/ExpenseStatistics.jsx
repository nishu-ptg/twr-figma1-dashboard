import { useExpenseStatistics } from "../../hooks/useDashboardApi";
import { SectionHeader, SectionBody } from "../common";
import ExpenseStatisticsChart from "./ExpenseStatisticsChart";

const ExpenseStatistics = () => {
  const { data, loading, error } = useExpenseStatistics();

  return (
    <div className="flex flex-col h-full">
      <SectionHeader>Expense Statistics</SectionHeader>

      <div className="rounded-card p-[30px] flex items-center flex-1">
        <SectionBody loading={loading} error={error}>
          <ExpenseStatisticsChart data={data} />
        </SectionBody>
      </div>
    </div>
  );
};

export default ExpenseStatistics;
