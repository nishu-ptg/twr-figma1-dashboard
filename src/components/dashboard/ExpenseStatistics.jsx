import { useExpenseStatistics } from "../../hooks/useDashboardApi";
import ExpenseStatisticsChart from "./ExpenseStatisticsChart";

const ExpenseStatistics = () => {
  const { data, loading, error } = useExpenseStatistics();

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
