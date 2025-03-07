const formatDate = (date) => {
  if (/^\d+ \w+ \d+$/.test(date)) return date;

  const newDate = new Date(date);
  if (isNaN(newDate.getTime())) return date;

  return newDate.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

const RecentTransactionItem = ({ index, transaction, bgColor }) => {
  const { name, date, amount, image } = transaction;
  const formattedDate = formatDate(date);

  return (
    <li className="flex items-center gap-[15px]">
      <div
        className="w-[55px] h-[55px] rounded-full flex items-center justify-center overflow-hidden border-1 border-red-500"
        style={{ backgroundColor: bgColor, borderColor: bgColor }}
      >
        <img
          src={
            image
              ? `${import.meta.env.VITE_ENDPOINT1_IMAGE_BASE_URL}/${image}`
              : `/assets/icons/transaction/${index}.svg`
          }
          alt="Icon"
        />
      </div>
      <div className="flex flex-col flex-1">
        <p className="text-[16px] font-medium line-clamp-1" title={name}>
          {name}
        </p>
        <span
          className="text-[15px] text-[#718EBF] mt-[2px] line-clamp-1"
          title={formattedDate}
        >
          {formattedDate}
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

export default RecentTransactionItem;
