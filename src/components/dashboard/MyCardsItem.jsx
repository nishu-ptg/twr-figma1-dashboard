const formatValidity = (validity) => {
  if (/^\d{2}\/\d{2}$/.test(validity)) return validity;

  const date = new Date(validity);
  if (!date.getTime()) return validity;

  return [
    date.getFullYear() % 100,
    (date.getMonth() + 1).toString().padStart(2, "0"),
  ].join("/");
};

const formatCardNumber = (cardNumber) => {
  if (isNaN(cardNumber)) return cardNumber;

  let chunks = cardNumber.match(/.{1,4}/g);
  return chunks
    .map((chunk, index) => {
      if (index === 0 || index === chunks.length - 1) {
        return chunk;
      } else {
        return "****";
      }
    })
    .join(" ");
};

const MyCardsItem = ({ index, card }) => {
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
            <img src={`/assets/icons/cards/chip-${index}.svg`} alt="Chip" />
          </div>
        </div>
        <div className="flex flex-1 w-full min-h-[72px]">
          <div className="flex-1">
            <h5 className="text-[12px]">CARD HOLDER</h5>
            <p className="mt-[-2px] tracking-tighter">{name}</p>
          </div>
          <div className="flex-1">
            <h5 className="text-[12px] text-white/70">VALID THRU</h5>
            <p className="mt-[-2px] tracking-tight">
              {formatValidity(validity)}
            </p>
          </div>
        </div>
      </div>
      <div className="c-card-bottom flex-grow-[70] flex items-center w-full px-[27px] justify-between">
        <div className="text-[22px] min-h-[70px] flex items-center tracking-wide">
          {formatCardNumber(card_number)}
        </div>
        <div>
          <img src={`/assets/icons/cards/group-${index}.svg`} alt="Group" />
        </div>
      </div>
    </div>
  );
};

export default MyCardsItem;
