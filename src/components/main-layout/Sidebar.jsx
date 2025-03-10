import Navbar from "./Navbar";

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <aside
      className={`w-full md:w-[250px] bg-white flex flex-col h-screen border-r border-[#e6eff5] fixed top-0 left-0 transition-transform duration-300 ease-in-out z-20 ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0 md:relative md:block`}
    >
      <div className="topbar-min-h flex items-center justify-center">
        <a href="#" className="flex items-center justify-center">
          <img
            src="/assets/icons/logo.svg"
            alt="Logo"
            className="w-[36px] m-[10px]"
          />
          <h2 className="text-[25px] text-[#343c6a] font-mont-heavy">
            BankDash.
          </h2>
        </a>
        <a
          href="#"
          onClick={toggleSidebar}
          className="md:hidden absolute right-[20px]"
        >
          <img src="/assets/icons/close.svg" alt="Close" />
        </a>
      </div>

      <Navbar />
    </aside>
  );
};

export default Sidebar;
