import {FiInfo} from "react-icons/fi";
import InputField from "../components/InputField";
import Label from "../components/Label";
import SelectField from "../components/SelectField";

function BasicInfo({ formData, setFormData }){
    return(
        <div className="border border-gray-100 p-5 bg-white rounded-md">
            <div className="flex">
                <FiInfo className="m-2 text-green-700"/>
                <h3 className="text-xl font-playfair text-green-700">Basic Information</h3>
            </div>
            <div className="flex flex-col p-4">
                <Label label="Product Name"/>
                <InputField 
                    type="text"
                    placeholder="e.g. Silk Organza Evening Grown"
                    value={formData.name}
                    onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                    }
                    />

                <Label label="Description"/>
                <textarea
                    className="border border-gray-400 outline-none p-3"
                    placeholder="Describe the craftmanship..."
                    value={formData.description}
                    onChange={(e) =>
                        setFormData({ ...formData, description: e.target.value })
                    }
                    />
            </div>

            <div className="md:flex gap-4 p-4">
                <div className="w-full">
                    <Label label="Brand"/> 
                    <textarea
                        className="border border-gray-400 outline-none p-3"
                        placeholder="Describe the craftmanship..."
                        value={formData.description}
                        onChange={(e) =>
                            setFormData({ ...formData, description: e.target.value })
                        }
                        />
                </div>
                <div className="w-full">
                    <Label label="Category"/>
                    <SelectField 
                        placeholder="Select a category"
                        options={[
                            "Dresses",
                            "Tops",
                            "T-Shirts",
                            "Jeans",
                            "Skirts",
                            "Pants",
                            "Jackets",
                            "Hoodies",
                        ]}
                        value={formData.category}
                        onChange={(value) =>
                            setFormData({ ...formData, category: value })
                        }
                        />
                </div>
            </div>
        </div>
    )
}

export default BasicInfo;