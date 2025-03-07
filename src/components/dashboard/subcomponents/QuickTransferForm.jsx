import React, { useState, useRef } from "react";

const QuickTransferForm = ({ activeUser }) => {
  const [amount, setAmount] = useState("525.50");
  const debounceTimeout = useRef(null);
  const inputRef = useRef(null);

  const handleOnChange = (e) => {
    const inputValue = e.target.value;

    setAmount(inputValue);

    if (debounceTimeout.current) clearTimeout(debounceTimeout.current);

    debounceTimeout.current = setTimeout(() => {
      const [int, dec = null] = inputValue.replace(/[^0-9.]/g, "").split(".");
      setAmount(int.slice(0, 10) + (dec === null ? "" : `.${dec.slice(0, 2)}`));
    }, 100);
  };

  const handleTransfer = () => {
    if (amount === "") {
      alert("Amount not specified!");
      inputRef.current.focus();
      return;
    }

    const formattedAmount = parseFloat(amount).toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

    alert(`Amount ${formattedAmount} transferred to ${activeUser.name}`);
  };

  return (
    <div className="flex w-full h-[50px] mt-[20px]">
      <div className="flex h-full items-center text-[#718EBF] mr-[28px]">
        Write Amount
      </div>
      <div className="flex flex-1 h-full rounded-full bg-[#edf1f7] focus-within:bg-[#e1f1f1]">
        <div className="flex flex-1 h-full items-center">
          <input
            type="text"
            className="w-full bg-transparent border-none outline-none px-[18px] md:px-[30px] text-[#718EBF]"
            value={amount}
            onChange={handleOnChange}
            ref={inputRef}
          />
        </div>
        <button
          className="flex items-center h-full px-8 gap-3 rounded-full bg-[#1814f3] hover:bg-[#1814f3]/80 text-white cursor-pointer"
          onClick={handleTransfer}
        >
          Send
          <img src="/assets/icons/send.svg" alt="Icon" />
        </button>
      </div>
    </div>
  );
};

export default QuickTransferForm;
