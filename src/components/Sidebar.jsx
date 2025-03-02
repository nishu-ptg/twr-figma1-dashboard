const Sidebar = () => {
  return (
    <aside className="w-64 bg-white p-4 flex flex-col h-screen border-r border-[#e6eff5]">
      <h2 className="text-xl">BankDash</h2>
      <nav className="mt-4 flex flex-col space-y-2">
        <a href="/" className="p-2">
          Dashboard
        </a>
      </nav>
    </aside>
  );
};

export default Sidebar;
