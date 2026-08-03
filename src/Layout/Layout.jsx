import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar"

const Layout = () => {
  return (
    <>
      <Navbar />
        <div className="flex">
          <Sidebar />
          <main className="flex-1 px-5 py-8 overflow-x-hidden">
            <Outlet />
          </main>
        </div>
    </>
  );
};

export default Layout;