import { useBalanceHistory } from "../../hooks/useDashboardApi";
import { SectionHeader, SectionBody } from "../common";
import BalanceHistoryChart from "./BalanceHistoryChart";

const BalanceHistory = () => {
  const { apiData: data, loading, error } = useBalanceHistory();

  return (
    <div className="flex flex-col h-full">
      <SectionHeader>Balance History</SectionHeader>

      <div className="rounded-card px-[10px] md:px-[22px] py-[24px] flex items-center flex-1">
        <SectionBody loading={loading} error={error}>
          <BalanceHistoryChart data={data} />
        </SectionBody>
      </div>
    </div>
  );
};

export default BalanceHistory;
