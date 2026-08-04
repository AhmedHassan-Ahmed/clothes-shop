import { FiBell, FiUser, FiMenu, FiX, FiShoppingBag } from "react-icons/fi";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    return (
        <div className="fixed top-0 left-0 w-full bg-white border-b shadow z-50 px-6 py-5">

            <div className="flex justify-between items-center">

                <NavLink
                to="/"
                className="text-2xl font-archivo font-bold text-green-700 tracking-wide"
                >
                Clothes Shop
                </NavLink>

                <div className="hidden md:flex gap-6 text-gray-800 transition-all duration-500">
                    <span className="cursor-pointer hover:text-green-700 transition">Home</span>
                    <span className="cursor-pointer hover:text-green-700 transition">Dashboard</span>
                    <span className="cursor-pointer hover:text-green-700 transition">Products</span>
                    <span className="cursor-pointer hover:text-green-700 transition">Orders</span>
                    <span className="cursor-pointer hover:text-green-700 transition">Collection</span>
                    <span className="cursor-pointer hover:text-green-700 transition">Categories</span>
                    <span className="cursor-pointer hover:text-green-700 transition">About</span>
                    <span className="cursor-pointer hover:text-green-700 transition">Contact</span>
                </div>

                <div className="hidden md:flex items-center gap-4">
                    <button className="border border-green-700 text-green-700 px-5 py-2 rounded-full hover:bg-green-700 hover:text-white duration-300">
                        Login
                    </button>
                    <button 
                    onClick={() => navigate("/products")}
                    className="bg-green-700 text-white px-5 py-2 rounded-full flex items-center gap-2 hover:bg-green-800 duration-300">
                        <FiShoppingBag />
                        Shop Now
                    </button>
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
                    <span className="cursor-pointer hover:text-green-700 transition">Home</span>
                    <span className="cursor-pointer hover:text-green-700 transition">Dashboard</span>
                    <span className="cursor-pointer hover:text-green-700 transition">Products</span>
                    <span className="cursor-pointer hover:text-green-700 transition">Orders</span>
                    <span className="cursor-pointer hover:text-green-700 transition">Collection</span>
                    <span className="cursor-pointer hover:text-green-700 transition">Categories</span>
                    <span className="cursor-pointer hover:text-green-700 transition">About</span>
                    <span className="cursor-pointer hover:text-green-700 transition">Contact</span>
                </div>
            )}
        </div>
    );
}

export default Navbar;
