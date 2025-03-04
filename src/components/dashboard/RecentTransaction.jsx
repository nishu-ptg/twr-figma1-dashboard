import React from "react";
import TransactionItem from "./TransactionItem";

const RecentTransaction = () => {
  const bgColors = ["#fff5d9", "#e7edff", "#dcfaf8"];
  const transactions = [
    { name: "Deposit from my Card", date: "28 January 2021", amount: -850 },
    { name: "Deposit Paypal", date: "25 January 2021", amount: 2500 },
    { name: "Jemi Wilson", date: "21 January 2021", amount: 4800 },
  ];

  return (
    <>
      <div className="header-area">
        <h2>Recent Transaction</h2>
      </div>
      <div className="rounded-card p-[25px] flex items-center flex-1">
        <ul className="flex flex-col w-full gap-[10px]">
          {transactions.map((transaction, index) => (
            <TransactionItem
              key={index}
              index={index}
              transaction={transaction}
              bgColor={bgColors[index % bgColors.length]}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default RecentTransaction;
