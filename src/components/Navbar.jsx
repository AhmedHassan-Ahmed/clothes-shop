import { FiBell, FiUser } from "react-icons/fi";

function Navbar(){
    return(
        <>
            <div className="w-full bg-white border shadow-md flex justify-between p-5 ">
                <div className="text-green-700 font-archivo font-bold text-lg">
                    <span>Haute Admin</span>
                </div>

                <div className="text-md flex gap-6 text-gray-800">
                    <span className="cursor-pointer hover:text-green-700 transition-all duration-500 hover:-translate-y-1">Dashboard</span>
                    <span className="cursor-pointer hover:text-green-700 transition-all duration-500 hover:-translate-y-1">Products</span>
                    <span className="cursor-pointer hover:text-green-700 transition-all duration-500 hover:-translate-y-1">Orders</span>
                </div>

                <div className="flex gap-5 text-lg">
                    <FiBell className="cursor-pointer hover:scale-110"/>
                    <FiUser className="cursor-pointer hover:scale-110"/>
                </div>
            </div>
        </>
    )
}

export default Navbar;