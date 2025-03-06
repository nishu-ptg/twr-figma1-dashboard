import React, { useState, useEffect } from "react";

const Loading = () => {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length < 3 ? prev + "." : ""));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <p className="flex items-center gap-2">
      <span className="w-4 h-4 border-2 border-gray-300 border-t-blue-500 rounded-full animate-spin"></span>
      <span className="w-[76px]">Loading{dots}</span>
    </p>
  );
};

export default Loading;
