import { useState } from "react";
import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import Input from "../components/Input";
import Buttons from "../components/Button";
import { useProductContext } from "../context/ProductContext";

function CreateProduct() {
  const { addProduct } = useProductContext();
  const [product, setProduct] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
    description: "",
    image: "",
  });
  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await addProduct(product);
    setProduct({
      name: "",
      category: "",
      price: "",
      stock: "",
      description: "",
      image: "",
    });
  };
  return (
    <div>
      <Navbar />
      <PageHeader 
        page="Add new Product"
        title="Product Creation"
        desc="Refine your luxury catalog with detailed specifications and high-end imagery."
      />
      <div className="max-w-xl mx-auto mt-10">
        <form 
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <Input
            name="name"
            placeholder="Product Name"
            value={product.name}
            onChange={handleChange}
          />
          <Input
            name="price"
            type="number"
            placeholder="Price"
            value={product.price}
            onChange={handleChange}
          />
          <Input
            name="image"
            placeholder="Image URL"
            value={product.image}
            onChange={handleChange}
          />
          <Buttons
            label="Create Product"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
}

export default CreateProduct;