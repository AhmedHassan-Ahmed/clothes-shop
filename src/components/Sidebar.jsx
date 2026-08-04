import { NavLink } from "react-router-dom";
import { House, Package, PlusCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { name: "Home", path: "/", icon: House },
  { name: "Products", path: "/products", icon: Package },
  { name: "Add Product", path: "/create-product", icon: PlusCircle },
];

function Sidebar({ open, setOpen }) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-40 bg-black lg:hidden"
          />

          <motion.aside
            onClick={(e) => e.stopPropagation()}
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{
              type: "spring",
              stiffness: 280,
              damping: 28,
            }}
            className="fixed left-0 top-0 z-50 flex h-screen w-72 flex-col border-r bg-gray-50 shadow-xl"
          >
            <div className="flex items-center justify-between border-b px-6 py-6">
              <h1 className="text-2xl font-bold text-green-800">
                Clothes Shop
              </h1>
            </div>

            <nav className="flex-1 space-y-2 p-4">
              {links.map((link) => {
                const Icon = link.icon;

                return (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    end={link.path === "/"}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center gap-3 rounded-xl px-4 py-3 font-medium transition ${
                        isActive
                          ? "bg-green-800 text-white"
                          : "text-gray-700 hover:bg-green-100 hover:text-green-800"
                      }`
                    }
                  >
                    <Icon size={20} />
                    {link.name}
                  </NavLink>
                );
              })}
            </nav>

            <div className="border-t p-5 text-center text-sm text-gray-500">
              © 2026 Clothes Shop
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

export default Sidebar;
