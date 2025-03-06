import React, { useState } from "react";
import QuickTransferUser from "./QuickTransferUser";
import QuickTransferForm from "./QuickTransferForm";

const QuickTransfer = () => {
  const defaultData = [
    { name: "Livia Bator", designation: "CEO" },
    { name: "Randy Press", designation: "Director" },
    { name: "Workman", designation: "Designer" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

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
                  isActive={activeIndex === index}
                  onClick={() => setActiveIndex(index)}
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
        <QuickTransferForm activeUser={defaultData[activeIndex]} />
      </div>
    </div>
  );
};

export default QuickTransfer;
