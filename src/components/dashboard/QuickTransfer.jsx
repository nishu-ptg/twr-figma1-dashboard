import { useState, useEffect } from "react";
import { useQuickTransfer } from "../../hooks/useDashboardApi";
import { SectionHeader } from "../common";
import QuickTransferUser from "./subcomponents/QuickTransferUser";
import QuickTransferForm from "./subcomponents/QuickTransferForm";

const QuickTransfer = () => {
  const { apiData: data, loading, error } = useQuickTransfer();
  const [activeIndex, setActiveIndex] = useState(0);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    if (data.length > 0 && activeIndex >= data.length) {
      setActiveIndex(0);
    }
  }, [data, activeIndex]);

  return (
    <div className="flex flex-col h-full w-full">
      <SectionHeader>Quick Transfer</SectionHeader>

      <div className="rounded-card px-0 md:px-[25px] py-[35px] flex flex-col justify-between flex-1">
        <QuickTransferUser
          data={data}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          startIndex={startIndex}
          setStartIndex={setStartIndex}
          loading={loading}
          error={error}
        />
        <QuickTransferForm activeUser={data[activeIndex]} />
      </div>
    </div>
  );
};

export default QuickTransfer;
