import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen w-full">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Topbar />
        <main className="flex-1 p-4 bg-[#f5f7fa] overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
