import React from "react";
import QuickTransferUserItem from "./QuickTransferUserItem";

const QuickTransferUser = ({
  data,
  activeIndex,
  setActiveIndex,
  startIndex,
  setStartIndex,
}) => {
  const getVisibleUsers = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(data[(startIndex + i) % data.length]);
    }
    return visible;
  };

  const handleNextClick = () => {
    setStartIndex((prev) => (prev + 1) % data.length);
    setActiveIndex((prev) => {
      return (prev + 1) % data.length;
    });
  };

  return (
    <div className="flex flex-1 w-full gap-[30px]">
      <div className="flex flex-1 justify-between overflow-hidden">
        <div className="flex flex-1 justify-between">
          {getVisibleUsers().map((user, index) => (
            <QuickTransferUserItem
              key={index}
              user={user}
              isActive={activeIndex === (startIndex + index) % data.length}
              onClick={() => setActiveIndex((startIndex + index) % data.length)}
            />
          ))}
        </div>
      </div>

      <div className="flex items-center">
        <button
          className="shadow-[0px_4px_10px_rgba(0,0,0,0.15)] hover:bg-gray-50 w-[50px] h-[50px] rounded-full cursor-pointer flex items-center justify-center"
          onClick={handleNextClick}
        >
          <img src="/assets/icons/caret-right.svg" alt="Next" />
        </button>
      </div>
    </div>
  );
};

export default QuickTransferUser;
