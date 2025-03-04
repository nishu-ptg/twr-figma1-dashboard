import ExpenseStatistics from "./../components/dashboard/ExpenseStatistics";
import MyCards from "./../components/dashboard/MyCards";
import WeeklyActivity from "./../components/dashboard/WeeklyActivity";
import RecentTransaction from "./../components/dashboard/RecentTransaction";

const Dashboard = () => {
  return (
    <div className="container mx-auto max-w-[1160px] px-[25px]">
      <div className="grid grid-cols-12 gap-[30px]">
        <div className="col-span-12 lg:col-span-8 gap-[30px]">
          <MyCards />
        </div>
        <div className="col-span-12 lg:col-span-4">
          <RecentTransaction />
        </div>
      </div>
      <div className="grid grid-cols-12 gap-[30px]">
        <div className="col-span-12 lg:col-span-8 gap-[30px]">
          <WeeklyActivity />
        </div>
        <div className="col-span-12 lg:col-span-4">
          <ExpenseStatistics />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
