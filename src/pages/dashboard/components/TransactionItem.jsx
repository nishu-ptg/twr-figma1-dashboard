const TransactionItem = ({ index, transaction, bgColor }) => {
  const { name, date, amount, icon } = transaction;

  return (
    <li className="flex items-center gap-[15px]">
      <div
        className="w-[55px] h-[55px] rounded-full flex items-center justify-center "
        style={{ backgroundColor: bgColor }}
      >
        <img
          src={icon || `/assets/icons/transaction/${index}.svg`}
          alt="Icon"
        />
      </div>
      <div className="flex flex-col flex-1">
        <p className="text-[16px] font-medium line-clamp-1">{name}</p>
        <span className="text-[15px] text-[#718EBF] mt-[2px] line-clamp-1">
          {date}
        </span>
      </div>
      <div
        className={`flex items-center font-medium ${
          amount < 0 ? "text-[#FF4B4A]" : "text-[#41D4A8]"
        }`}
      >
        {amount < 0 ? `-$` : `+$`}
        {Math.abs(amount).toLocaleString()}
      </div>
    </li>
  );
};

export default TransactionItem;
