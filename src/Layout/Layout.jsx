import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />

      <main className="max-w-7xl mx-auto px-5 py-8 bg-stone-100">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;