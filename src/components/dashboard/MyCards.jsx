import { useGetMyCards } from "../../hooks/useDashboardApi";
import MyCardsItem from "./MyCardsItem";

const MyCards = () => {
  const { data, loading, error } = useGetMyCards();

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
      <div className="flex w-full flex-1 items-center justify-center">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="text-red-500">Error: {error}</p>
        ) : (
          <div className="grid w-full h-full grid-cols-2 gap-[30px]">
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
