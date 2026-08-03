import { NavLink } from "react-router-dom";
import { House, Package, PlusCircle } from "lucide-react";

function Sidebar() {
    return (
        <aside className="w-64 min-h-screen bg-white text-black p-6">
            <h2 className="text-2xl font-bold mb-8 text-green-800">
                Clothes Shop
            </h2>
            <nav className="flex flex-col gap-3">
                <NavLink
                to="/"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-green-800 hover:text-white"
                >
                <House size={18} />
                Home
                </NavLink>
                <NavLink
                to="/products"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-green-800 hover:text-white"
                >
                <Package size={18} />
                Products
                </NavLink>
                <NavLink
                to="/create-product"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-green-800 hover:text-white"
                >
                <PlusCircle size={18} />
                Add Product
                </NavLink>
            </nav>
        </aside>
    );
}

export default Sidebar;