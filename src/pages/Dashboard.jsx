import {
  MyCards,
  RecentTransactions,
  WeeklyActivity,
  ExpenseStatistics,
  QuickTransfer,
  BalanceHistory,
} from "../components/dashboard";

const Dashboard = () => {
  return (
    <div className="container mx-auto max-w-[1160px] px-[25px] mb-[30px]">
      {/* 1st row */}
      <div className="grid grid-cols-12 gap-[30px]">
        <div className="col-span-12 lg:col-span-8 gap-[30px]">
          <MyCards />
        </div>
        <div className="flex flex-col col-span-12 lg:col-span-4">
          <RecentTransactions />
        </div>
      </div>

      {/* 2nd row */}
      <div className="grid grid-cols-12 gap-[30px]">
        <div className="col-span-12 lg:col-span-8 gap-[30px]">
          <WeeklyActivity />
        </div>
        <div className="flex flex-col col-span-12 lg:col-span-4">
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
