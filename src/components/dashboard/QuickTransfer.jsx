import React from "react";
import QuickTransferUser from "./QuickTransferUser";

const QuickTransfer = () => {
  const defaultData = [
    { name: "Livia Bator", designation: "CEO" },
    { name: "Randy Press", designation: "Director" },
    { name: "Workman", designation: "Designer" },
  ];

  return (
    <div className="flex flex-col h-full w-full">
      <div className="header-area">
        <h2>Quick Transfer</h2>
      </div>
      <div className="rounded-card px-0 md:px-[25px] py-[35px] flex flex-col justify-between flex-1">
        <div className="flex flex-1 w-full gap-[30px]">
          <div className="flex flex-1 justify-between">
            {defaultData.map((user, index) =>
              index < 3 ? (
                <QuickTransferUser
                  key={index}
                  index={index}
                  user={user}
                  isActive={!index}
                />
              ) : null
            )}
          </div>
          <div className="flex items-center ">
            <button className="shadow-[0px_4px_10px_rgba(0,0,0,0.15)] hover:bg-gray-50 w-[50px] h-[50px] rounded-full cursor-pointer flex items-center justify-center">
              <img src="/assets/icons/caret-right.svg" alt="Next" />
            </button>
          </div>
        </div>
        <div className="flex w-full h-[50px] mt-[20px]">
          <div className="flex h-full items-center text-[#718EBF] mr-[28px]">
            Write Amount
          </div>
          <div className="flex flex-1 h-full rounded-full bg-[#edf1f7] focus-within:bg-[#e1f1f1]">
            <div className="flex flex-1 h-full items-center">
              <input
                type="text"
                className="w-full bg-transparent border-none outline-none px-[18px] md:px-[30px] text-[#718EBF]"
                value="525.50"
              />
            </div>
            <button className="flex items-center h-full px-8 gap-3 rounded-full bg-[#1814f3] hover:bg-[#1814f3]/80 text-white cursor-pointer">
              Send
              <img src="/assets/icons/send.svg" alt="Icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickTransfer;
