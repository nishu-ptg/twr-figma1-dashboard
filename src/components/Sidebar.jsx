import Navbar from "./Navbar";

const Sidebar = () => {
  return (
    <aside className="w-[250px] bg-white flex flex-col h-screen border-r border-[#e6eff5]">
      <div className="topbar-min-h flex items-center justify-center">
        <a href="#" className="flex items-center justify-center">
          <img
            src="./src/assets/icons/logo.svg"
            alt="Logo"
            className="w-[36px] m-[10px]"
          />
          <h2 className="text-[25px] text-[#343c6a] font-mont-heavy">
            BankDash.
          </h2>
        </a>
      </div>

      <Navbar />
    </aside>
  );
};

export default Sidebar;
