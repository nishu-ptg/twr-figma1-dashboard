const SectionHeader = ({ children, rightElement = "" }) => {
  return (
    <div className="flex items-center justify-between min-h-[65px] mt-[5px]">
      <h2 className="ttext-[#343C6A] text-[22px] font-semibold tracking-wide">
        {children}
      </h2>
      {rightElement}
    </div>
  );
};

export default SectionHeader;
