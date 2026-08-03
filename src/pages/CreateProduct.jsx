import { useState } from "react";
import PageHeader from "../components/PageHeader";
import BasicInfo from "../components/BasicInfo";
import Pricing from "../components/Pricing";
import ImageURL from "../components/ImageURL";
import { createProduct } from "../api/products";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function CreateProduct() {
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [formData, setFormData] = useState({
    name: "",
    description: "",
    brand: "",
    category: "",
    price: "",
    stock: "",
    image: "",
  });
  
  const handleSubmit = async () => {
    try {
      setError("");
      setSuccess("");

      if (!formData.name.trim()) {
        setError("Product name is required");
        return;
      }

      if (!formData.price) {
        setError("Price is required");
        return;
      }

      const formattedData = {
        ...formData,
        name: formData.name.trim(),
        price: Number(formData.price),
        stock: formData.stock ? Number(formData.stock) : 0,
        image: formData.image || "https://via.placeholder.com/150",
      };
      
      const res = await createProduct(formattedData);

      setSuccess("Product added successfully");

        setTimeout(() => {
          setSuccess("");
        }, 3000);

      setFormData({
        name: "",
        description: "",
        brand: "",
        category: "",
        price: "",
        stock: "",
        image: "",
      });

    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="">
      <div className="md:flex justify-between">
          <PageHeader 
              page = "Add new Product"
              title = "Product Creation"
              desc = "Refine your luxury catalog with detailed specifications and high-end imagery."
              onSave ={handleSubmit}
          />
          <div className="
                    flex flex-col 
                    md:flex-row 
                    gap-3
                    w-full 
                    md:w-auto md:mt-16
                ">
                    <Button
                        label="Cancel"
                        variant="outline"
                        onClick={() => navigate("/")}
                    />

                    <Button
                        label="Save Product"
                        variant="primary"
                        onClick = {handleSubmit}
                    />
            </div>
            </div>
          {error && (
            <div className="bg-red-100 text-red-700 p-3 rounded-md mx-2 mt-2">
              {error}
            </div>
          )}

          {success && (
            <div className="bg-green-100 text-green-700 p-3 rounded-md mx-2 mt-2">
              {success}
            </div>
          )}
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 mt-2">

              <div className="flex flex-col gap-6 lg:col-span-2">

                <BasicInfo formData={formData} setFormData={setFormData} />
                <Pricing formData={formData} setFormData={setFormData} />

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
                  <div className="lg:hidden">
                    <ImageURL formData={formData} setFormData={setFormData} />                    </div>
                </div>

              </div>

              <div className="hidden lg:block mx-0">
                    <ImageURL formData={formData} setFormData={setFormData} />   
               </div>

              </div>
    </div>
  );
}

export default CreateProduct;