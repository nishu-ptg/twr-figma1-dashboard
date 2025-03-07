import { useState, useEffect } from "react";
import { useQuickTransfer } from "../../hooks/useDashboardApi";
import { SectionHeader, SectionBody } from "../common";
import QuickTransferUser from "./QuickTransferUser";
import QuickTransferForm from "./QuickTransferForm";

const QuickTransfer = () => {
  const { apiData: data, loading, error } = useQuickTransfer();
  const [activeIndex, setActiveIndex] = useState(0);
  const [startIndex, setStartIndex] = useState(0);

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

  useEffect(() => {
    if (data.length > 0 && activeIndex >= data.length) {
      setActiveIndex(0);
    }
  }, [data, activeIndex]);

  return (
    <div className="flex flex-col h-full w-full">
      <SectionHeader>Quick Transfer</SectionHeader>

      <div className="rounded-card px-0 md:px-[25px] py-[35px] flex flex-col justify-between flex-1">
        <div className="flex flex-1 w-full gap-[30px]">
          <div className="flex flex-1 justify-between overflow-hidden">
            <SectionBody loading={loading} error={error}>
              <div className="flex flex-1 justify-between">
                {getVisibleUsers().map((user, index) => (
                  <QuickTransferUser
                    key={index}
                    user={user}
                    isActive={
                      activeIndex === (startIndex + index) % data.length
                    }
                    onClick={() =>
                      setActiveIndex((startIndex + index) % data.length)
                    }
                  />
                ))}
              </div>
            </SectionBody>
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

        <QuickTransferForm activeUser={data[activeIndex]} />
      </div>
    </div>
  );
};

export default QuickTransfer;
