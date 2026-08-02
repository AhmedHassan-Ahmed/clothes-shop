import { FiLayers } from "react-icons/fi";
import Label from "../components/Label";
import Sizes from "../components/Sizes";
import Colors from "../components/Colors";

function Varients() {
    return(
        <div className="border border-gray-100 p-5 bg-white rounded-md ">
            <div className="flex">
                <FiLayers className="m-2 text-green-700"/>
                <h3 className="text-xl font-playfair text-green-700">Varients</h3>
            </div>
            <div className="p-5 flex flex-col lg:flex-row gap-8 my-10">
                
                <div className="flex-1 ">
                    <Label label="Size Options"/>
                    <Sizes />
                </div>

                <div className="flex-1">
                    <Label label="Color Palette"/>
                    <Colors />
                </div>

            </div>
        </div>
    )
}

export default Varients;