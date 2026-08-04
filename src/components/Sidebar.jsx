import { NavLink } from "react-router-dom";
import { House, Package, PlusCircle, ChevronRight, X } from "lucide-react";
import { useState } from "react";

function Sidebar() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <button
                onClick={() => setOpen(true)}
                className="fixed bottom-5 left-3 z-50 lg:hidden bg-green-800 text-white p-2 rounded-full shadow"            >
                <ChevronRight size={20} />
            </button>

            {open && (
                <div
                    onClick={() => setOpen(false)}
                    className="fixed inset-0 bg-black bg-opacity-40 z-40 lg:hidden" />
            )}

            <aside
                className={`fixed top-0 left-0 h-screen w-64 bg-white border-r shadow
                overflow-y-auto z-50 transform transition-transform duration-300
                ${open ? "translate-x-0" : "-translate-x-full"}
                lg:translate-x-0`}
            >
                <button
                    onClick={() => setOpen(false)}
                    className="lg:hidden mb-4"
                >
                    <X />
                </button>

                <h2 className="text-2xl font-bold mb-8 mt-5 text-green-800">
                    Clothes Shop
                </h2>

                <nav className="flex flex-col gap-3">
                    <NavLink to="/" className="flex items-center gap-3 p-3 rounded-lg hover:bg-green-800 hover:text-white">
                        <House size={18} />
                        Home
                    </NavLink>

                    <NavLink to="/products" className="flex items-center gap-3 p-3 rounded-lg hover:bg-green-800 hover:text-white">
                        <Package size={18} />
                        Products
                    </NavLink>

                    <NavLink to="/create-product" className="flex items-center gap-3 p-3 rounded-lg hover:bg-green-800 hover:text-white">
                        <PlusCircle size={18} />
                        Add Product
                    </NavLink>
                </nav>
            </aside>
        </>
    );
}

export default Sidebar;