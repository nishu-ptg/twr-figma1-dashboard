import { useGetRecentTransactions } from "../../hooks/useDashboardApi";
import { SectionHeader, SectionBody } from "../common";
import RecentTransactionItem from "./RecentTransactionsItem";

const RecentTransaction = () => {
  const bgColors = ["#fff5d9", "#e7edff", "#dcfaf8"];

  const { data, loading, error } = useGetRecentTransactions();

  return (
    <>
      <SectionHeader>Recent Transaction</SectionHeader>

      <div className="rounded-card p-[10px] md:p-[25px] flex items-center flex-1">
        <SectionBody loading={loading} error={error}>
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
        </SectionBody>
      </div>
    </>
  );
};

export default RecentTransaction;
