import { FiBell, FiUser, FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";

function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <div className="w-full bg-white border shadow-md p-5 fixed relative">

            <div className="flex justify-between items-center">

                <div className="text-green-700 font-archivo font-bold text-lg">
                    Haute Admin
                </div>

                <div className="hidden md:flex gap-6 text-gray-800 transition-all duration-500">
                    <span className="cursor-pointer hover:text-green-700 transition">Dashboard</span>
                    <span className="cursor-pointer hover:text-green-700 transition">Products</span>
                    <span className="cursor-pointer hover:text-green-700 transition">Orders</span>
                </div>

                <div className="flex items-center gap-4 text-lg">

                    <FiBell className="cursor-pointer hover:scale-110" />
                    <FiUser className="cursor-pointer hover:scale-110" />

                    <div className="md:hidden cursor-pointer" onClick={() => setOpen(!open)}>
                        {open ? <FiX /> : <FiMenu />}
                    </div>
                </div>
            </div>

            {open && (
                <div className="flex flex-col mt-4 gap-3 text-gray-800 md:hidden">
                    <span className="cursor-pointer hover:text-green-700 transition">Dashboard</span>
                    <span className="cursor-pointer hover:text-green-700 transition">Products</span>
                    <span className="cursor-pointer hover:text-green-700 transition">Orders</span>
                </div>
            )}
        </div>
    );
}

export default Navbar;