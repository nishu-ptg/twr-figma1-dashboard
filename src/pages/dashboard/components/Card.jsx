import React from "react";

const Card = ({ index, card }) => {
  const { name, balance, card_number, validity } = card;
  return (
    <div
      className={`c-card c-card-${index} col-span-2 md:col-span-1 rounded-card flex flex-col h-full font-lato text-white`}
    >
      <div className="c-card-top flex flex-col flex-grow-[165] px-[27px] w-full">
        <div className="flex flex-1 w-full items-center justify-between">
          <div className="min-h-[93px]">
            <h4 className="text-[12px] mt-[22px] tracking-tight">Balance</h4>
            <p className="font-semibold text-[20px] mt-[-5px]">
              {(balance ?? 0).toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
                minimumFractionDigits: 0,
              })}
            </p>
          </div>
          <div>
            <img
              src={`./src/assets/icons/cards/chip-${index}.svg`}
              alt="Chip"
            />
          </div>
        </div>
        <div className="flex flex-1 w-full min-h-[72px]">
          <div className="flex-1">
            <h5 className="text-[12px]">CARD HOLDER</h5>
            <p className="mt-[-2px] tracking-tighter">{name}</p>
          </div>
          <div className="flex-1">
            <h5 className="text-[12px] text-white/70">VALID THRU</h5>
            <p className="mt-[-2px] tracking-tight">{validity}</p>
          </div>
        </div>
      </div>
      <div className="c-card-bottom flex-grow-[70] flex items-center w-full px-[27px] justify-between">
        <div className="text-[22px] min-h-[70px] flex items-center tracking-wide">
          {card_number}
        </div>
        <div>
          <img
            src={`./src/assets/icons/cards/group-${index}.svg`}
            alt="Group"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
