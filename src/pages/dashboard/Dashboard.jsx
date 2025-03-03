import MyCards from "./components/MyCards";
import RecentTransaction from "./components/RecentTransaction";

const Dashboard = () => {
  return (
    <div className="container mx-auto px-[40px]">
      <div className="grid grid-cols-12 gap-[30px]">
        <div className="col-span-12 lg:col-span-8 gap-[30px]">
          <MyCards />
        </div>
        <div className="col-span-12 lg:col-span-4">
          <RecentTransaction />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
