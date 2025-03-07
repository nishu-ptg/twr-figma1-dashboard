import { useDataSource } from "../contexts/DataSourceContext";
import useFetchData from "./useFetchData";
import * as DashboardData from "../data/dashboardData";

const apiUrl = import.meta.env.VITE_ENDPOINT1_API_BASE_URL;
// const { useApiData } = useDataSource();

export const useGetMyCards = () => {
  const { useApiData } = useDataSource();

  const { apiData, loading, error } = useFetchData(
    `${apiUrl}/card-list`,
    useApiData,
    DashboardData.myCardsData
  );

  const data = useApiData ? apiData?.data ?? [] : apiData;

  return { data, loading, error };
};

export const useGetRecentTransactions = () => {
  const { useApiData } = useDataSource();

  const { apiData, loading, error } = useFetchData(
    `${apiUrl}/recent-transactions-list`,
    useApiData,
    DashboardData.recentTransactionsData
  );

  const data = useApiData ? apiData?.data ?? [] : apiData;

  return { data, loading, error };
};

export const useWeeklyActivity = () => {
  const { useApiData } = useDataSource();

  const { apiData, loading, error } = useFetchData(
    `${apiUrl}/weekly-activity-list`,
    useApiData,
    DashboardData.weeklyActivityData
  );

  const data = useApiData ? apiData?.data ?? [] : apiData;

  return { data, loading, error };
};

export const useExpenseStatistics = () => {
  const { useApiData } = useDataSource();

  const defaultData = DashboardData.expenseStatisticsData;

  const { apiData, loading, error } = useFetchData(
    `${apiUrl}/expense-list`,
    useApiData,
    defaultData
  );

  // const data = useApiData ? apiData?.data ?? [] : apiData;
  const data = useApiData
    ? (() => {
        const filteredData = Object.fromEntries(
          Object.entries(apiData.data || {}).filter(([key]) => key !== "id")
        );
        return {
          labels: Object.keys(filteredData).map((label) =>
            label.replace(/\b\w/g, (char) => char.toUpperCase())
          ),
          values: Object.values(filteredData),
          colors: Object.keys(filteredData).map(
            (_, index) => defaultData.colors[index % defaultData.colors.length]
          ),
        };
      })()
    : defaultData;

  return { data, loading, error };
};

export const useQuickTransfer = () => {
  return useFetchData("", false, DashboardData.quickTransferData);
};

export const useBalanceHistory = () => {
  return useFetchData("", false, DashboardData.balanceHistorytData);
};
