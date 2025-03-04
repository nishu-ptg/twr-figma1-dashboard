import React, { useMemo } from "react";
import { useDataSource } from "../../context/DataSourceContext";
import useFetchData from "../../hooks/useFetchData";
import MyCardsItem from "./MyCardsItem";

const MyCards = () => {
  const defaultData = useMemo(
    () => [
      {
        name: "Eddy Cusuma",
        balance: 5756,
        card_number: "3778 **** **** 1234",
        validity: "12/22",
      },
      {
        name: "Eddy Cusuma",
        balance: 5756,
        card_number: "3778 **** **** 1234",
        validity: "12/22",
      },
    ],
    []
  );

  const { useApiData } = useDataSource();

  const { apiData, loading, error } = useFetchData(
    `${import.meta.env.VITE_ENDPOINT1_API_BASE_URL}/card-list`,
    useApiData,
    defaultData
  );

  const data = useApiData ? apiData?.data ?? [] : apiData;

  return (
    <div className="flex flex-col h-full">
      <div className="header-area">
        <h2>My Cards</h2>
        <a
          href="#"
          className="font-semibold text-[17px] text-[#343C6A] hover:text-[#2d60ff]"
        >
          See All
        </a>
      </div>
      <div className="flex w-full h-full items-center justify-center">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="text-red-500">Error: {error}</p>
        ) : (
          <div className="grid w-full grid-cols-2 gap-[30px]">
            {data.map((card, index) =>
              index < 2 ? (
                <MyCardsItem key={index} index={index} card={card} />
              ) : null
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyCards;
