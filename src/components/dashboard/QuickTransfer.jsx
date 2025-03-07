import { useState, useEffect } from "react";
import { useQuickTransfer } from "../../hooks/useDashboardApi";
import { SectionHeader, SectionBody } from "../common";
import { QuickTransferUser, QuickTransferForm } from "./subcomponents";

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
        <SectionBody loading={loading} error={error}>
          <QuickTransferUser
            data={data}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            startIndex={startIndex}
            setStartIndex={setStartIndex}
          />
          <QuickTransferForm activeUser={data[activeIndex]} />
        </SectionBody>
      </div>
    </div>
  );
};

export default QuickTransfer;
