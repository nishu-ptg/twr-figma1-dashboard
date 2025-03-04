import React from "react";
import MyCardsItem from "./MyCardsItem";

const MyCards = () => {
  const cards = [
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
  ];

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
      <div className="grid grid-cols-2 gap-[30px] h-full">
        {cards.map((card, index) =>
          index < 2 ? (
            <MyCardsItem key={index} index={index} card={card} />
          ) : null
        )}
      </div>
    </div>
  );
};

export default MyCards;
