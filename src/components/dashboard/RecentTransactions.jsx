import { useGetRecentTransactions } from "../../hooks/useDashboardApi";
import RecentTransactionItem from "./RecentTransactionsItem";

const RecentTransaction = () => {
  const bgColors = ["#fff5d9", "#e7edff", "#dcfaf8"];

  const { data, loading, error } = useGetRecentTransactions();

  return (
    <>
      <div className="header-area">
        <h2>Recent Transaction</h2>
      </div>
      <div className="rounded-card p-[10px] md:p-[25px] flex items-center flex-1">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="text-red-500">Error: {error}</p>
        ) : (
          <ul className="flex flex-col flex-1 w-full gap-[10px]">
            {data.map((transaction, index) => (
              <RecentTransactionItem
                key={index}
                index={index}
                transaction={transaction}
                bgColor={bgColors[index % bgColors.length]}
              />
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default RecentTransaction;
