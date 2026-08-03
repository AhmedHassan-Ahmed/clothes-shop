import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar"

const Layout = () => {
  return (
    <>
      <Navbar />
        <div className="flex">
          <Sidebar />
          <main className="max-w-7xl mx-auto px-5 py-8">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Layout;