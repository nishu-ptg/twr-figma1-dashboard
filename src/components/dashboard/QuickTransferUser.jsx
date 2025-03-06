import React from "react";

const QuickTransferUser = ({ index, user, isActive }) => {
  const { name, designation } = user;

  return (
    <div
      className={`quick-transfer-user flex flex-col items-center cursor-pointer ${
        isActive ? "active" : ""
      }`}
    >
      <img
        src={`/assets/images/user${index}.svg`}
        alt="Avatar"
        className="w-[70px] h-[70px] rounded-full"
      />
      <p className="mt-3 text-center">{name}</p>
      <p className="text-[#718EBF] text-center">{designation}</p>
    </div>
  );
};

export default QuickTransferUser;
