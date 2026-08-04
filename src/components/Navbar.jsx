import { FiBell, FiUser, FiMenu, FiX, FiShoppingBag } from "react-icons/fi";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const links = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "Add Product", path: "/create-product" },
  { name: "Collections", path: "/collections" },
  { name: "Categories", path: "/categories" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

function Navbar({ sidebarOpen, setSidebarOpen }) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="mx-auto flex h-20 items-center justify-between px-20">
        <NavLink
          to="/"
          className="text-2xl font-bold tracking-wide text-green-700"
        >
          Clothes Shop
        </NavLink>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) =>
                `font-medium transition ${
                  isActive
                    ? "text-green-700"
                    : "text-gray-600 hover:text-green-700"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <FiBell className="cursor-pointer text-xl text-gray-600 hover:text-green-700" />

          <FiUser className="cursor-pointer text-xl text-gray-600 hover:text-green-700" />

          <button
            onClick={() => navigate("/products")}
            className="flex items-center gap-2 rounded-full bg-green-700 px-5 py-2 text-white transition hover:bg-green-800"
          >
            <FiShoppingBag />
            Shop Now
          </button>
        </div>

        <button onClick={() => setOpen(!open)} className="text-2xl md:hidden">
          {open ? <FiX /> : <FiMenu />}
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setSidebarOpen((pr) => !pr);
          }}
          className="text-2xl hidden md:block"
        >
          {sidebarOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {open && (
        <nav className="border-t bg-white md:hidden">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block px-6 py-4 transition ${
                  isActive
                    ? "bg-green-700 text-white"
                    : "text-gray-700 hover:bg-green-100 hover:text-green-700"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}

export default Navbar;
