import ExpenseStatistics from "./../components/dashboard/ExpenseStatistics";
import MyCards from "./../components/dashboard/MyCards";
import WeeklyActivity from "./../components/dashboard/WeeklyActivity";
import RecentTransaction from "./../components/dashboard/RecentTransaction";
import BalanceHistory from "../components/dashboard/BalanceHistory";
import QuickTransfer from "../components/dashboard/QuickTransfer";

const Dashboard = () => {
  return (
    <div className="container mx-auto max-w-[1160px] px-[25px] mb-[30px]">
      {/* 1st row */}
      <div className="grid grid-cols-12 gap-[30px]">
        <div className="col-span-12 lg:col-span-8 gap-[30px]">
          <MyCards />
        </div>
        <div className="col-span-12 lg:col-span-4">
          <RecentTransaction />
        </div>
      </div>

      {/* 2nd row */}
      <div className="grid grid-cols-12 gap-[30px]">
        <div className="col-span-12 lg:col-span-8 gap-[30px]">
          <WeeklyActivity />
        </div>
        <div className="col-span-12 lg:col-span-4">
          <ExpenseStatistics />
        </div>
      </div>

      {/* 3rd row */}
      <div className="grid grid-cols-12 gap-[30px]">
        <div className="col-span-12 lg:col-span-5 gap-[30px]">
          <QuickTransfer />
        </div>
        <div className="col-span-12 lg:col-span-7">
          <BalanceHistory />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
