import { useGetMyCards } from "../../hooks/useDashboardApi";
import { SectionHeader, SectionBody } from "../common";
import MyCardsItem from "./MyCardsItem";

const MyCards = () => {
  const { data, loading, error } = useGetMyCards();

  const rightElement = (
    <a
      href="#"
      className="font-semibold text-[17px] text-[#343C6A] hover:text-[#2d60ff]"
    >
      See All
    </a>
  );

  return (
    <div className="flex flex-col h-full">
      <SectionHeader rightElement={rightElement}>My Cards</SectionHeader>

      <div className="flex w-full flex-1 items-center justify-center">
        <SectionBody loading={loading} error={error}>
          <div className="grid w-full h-full grid-cols-2 gap-[30px]">
            {data.map((card, index) =>
              index < 2 ? (
                <MyCardsItem key={index} index={index} card={card} />
              ) : null
            )}
          </div>
        </SectionBody>
      </div>
    </div>
  );
};

export default MyCards;
