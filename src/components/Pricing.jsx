import { MdAttachMoney } from "react-icons/md";
import InputField from "../components/InputField";
import Label from "../components/Label";

function Pricing({ formData, setFormData }){
    return(
    <div className="border border-gray-100 p-5 bg-white rounded-md shadow">
        <div className="flex">
            <MdAttachMoney className="m-2 text-green-700"/>
            <h3 className="text-xl font-playfair text-green-700">Pricing & Inventory</h3>
        </div>
        <div className="flex flex-col md:flex-row gap-4  my-2">
            <div className="flex-1 p-4">
                <Label label="Base Price (USD)"/>
                <InputField
                type="number"
                placeholder="$ 2,500"
                value={formData.price}
                onChange={(e) =>
                    setFormData({ ...formData, price: Number(e.target.value) })
                    }
                />
            </div>
            <div className="flex-1 p-4">
                <Label label="Stock Quantity"/>
                <InputField 
                type="number"
                placeholder="15"
                value={formData.stock}
                    onChange={(e) =>
                    setFormData({ ...formData, stock: Number(e.target.value) })
                    }
                />
            </div>
        </div>
    </div>
    )
}

export default Pricing;