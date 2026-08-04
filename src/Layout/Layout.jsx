import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar"

const Layout = () => {
  return (
    <>
      <Navbar />
        <div className="flex">
          <Sidebar />
          <main className="flex-1 lg:ml-64 pt-24 px-6">
            <Outlet />
          </main>
        </div>
    </>
  );
};

export default Layout;