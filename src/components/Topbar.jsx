const Topbar = ({ toggleSidebar }) => {
  return (
    <header className="topbar-min-h bg-white flex items-center px-4 border-b border-[#e6eff5]">
      <a href="#" onClick={toggleSidebar} className="md:hidden">
        <img src="./src/assets/icons/menu.svg" alt="Menu" />
      </a>
      <h1 className="text-lg">Overview</h1>
    </header>
  );
};

export default Topbar;
