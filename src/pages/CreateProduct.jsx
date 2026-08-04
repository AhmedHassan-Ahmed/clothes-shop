import { useState } from "react";
import PageHeader from "../components/PageHeader";
import BasicInfo from "../components/BasicInfo";
import Pricing from "../components/Pricing";
import ImageURL from "../components/ImageURL";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { useProductContext } from "../context/useProductContext";

function CreateProduct() {
  const { addProduct } = useProductContext();

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

      await addProduct(formattedData);

      setSuccess("Product added successfully");

      setTimeout(() => {
        setSuccess("");
        navigate("/products");
      }, 2200);

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
    <div className="space-y-8 p-6 lg:p-8">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <PageHeader
          page="Add New Product"
          title="Product Creation"
          desc="Refine your luxury catalog with detailed specifications and high-end imagery."
        />

        <div className="flex flex-col gap-3 sm:flex-row">
          <Button
            label="Cancel"
            variant="outline"
            onClick={() => navigate("/")}
          />

          <Button
            label="Save Product"
            variant="primary"
            onClick={handleSubmit}
          />
        </div>
      </div>

      {error && (
        <div className="rounded-xl border border-red-200 bg-red-50 px-5 py-4 text-red-700 shadow-sm">
          {error}
        </div>
      )}

      {success && (
        <div className="rounded-xl border border-green-200 bg-green-50 px-5 py-4 text-green-700 shadow-sm">
          {success}
        </div>
      )}

      <div className="grid grid-cols-1 gap-8 xl:grid-cols-3">
        <div className="space-y-6 xl:col-span-2">
          <BasicInfo formData={formData} setFormData={setFormData} />

          <Pricing formData={formData} setFormData={setFormData} />

          <div className="xl:hidden">
            <ImageURL formData={formData} setFormData={setFormData} />
          </div>
        </div>

        <div className="hidden xl:block">
          <div className="sticky top-28">
            <ImageURL formData={formData} setFormData={setFormData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateProduct;
