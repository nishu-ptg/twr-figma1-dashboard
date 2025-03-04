const TopbarSearch = ({ searchTerm, onChange }) => {
  return (
    <div className="focus-within:bg-[#f3f3f3] bg-[#f5f7fa] rounded-full w-full lg:w-[255px] flex items-center px-[10px] h-[40px] lg:h-[50px]">
      <div className="flex items-center">
        <img
          src="/assets/icons/magnifying-glass.svg"
          alt="Icon"
          className="px-[15px]"
        />
      </div>
      <div className="flex items-center flex-1">
        <input
          type="text"
          placeholder="Search for something"
          value={searchTerm}
          onChange={onChange}
          className="search bg-transparent border-none outline-none w-full tracking-tight text-[#718EBF]"
        />
      </div>
    </div>
  );
};

export default TopbarSearch;
