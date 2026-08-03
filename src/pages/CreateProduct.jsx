import { useState } from "react";
import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import Input from "../components/Input";
import Buttons from "../components/Button";
import { useProductContext } from "../context/ProductContext";
import BasicInfo from "../components/BasicInfo";
import Pricing from "../components/Pricing";
import Varients from "../components/Varients";
import MediaUpload from "../components/MediaUpload";

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
    <div className="">
          <PageHeader 
              page = "Add new Product"
              title = "Product Creation"
              desc = "Refine your luxury catalog with detailed specifications and high-end imagery."
          />
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 m-8">

              <div className="flex flex-col gap-6 lg:col-span-2">

                <BasicInfo />
                <Pricing />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
                  <Varients />
                  <div className="lg:hidden">
                    <MediaUpload />
                  </div>
              </div>

            </div>

        <div className="hidden lg:block mx-0">
          <MediaUpload />
        </div>

      </div>
    </div>
  );
}

export default CreateProduct;