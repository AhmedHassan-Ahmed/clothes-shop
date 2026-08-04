import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../services/api";
import Input from "../components/Input";
import Button from "../components/Button";
import { useProductContext } from "../context/useProductContext";
import PageHeader from "../components/PageHeader";

const EditProduct = () => {
  const { updateProduct } = useProductContext();
  const navigate = useNavigate();
  const { id } = useParams();

  const [loading, setLoading] = useState(true);

  const [product, setProduct] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
    description: "",
    image: "",
  });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await api.get(`/products/${id}`);
        setProduct(res.data.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleChange = (e) => {
    setProduct((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateProduct(id, product);
      navigate("/products");
    } catch (err) {
      console.log(err);
      alert("Something went wrong.");
    }
  };

  if (loading) {
    return (
      <div className="flex h-96 items-center justify-center">Loading...</div>
    );
  }

  return (
    <section className="space-y-8 p-6 lg:p-8">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <PageHeader
          page="Edit Product"
          title="Update Product"
          desc="Modify your product information and save the latest changes."
        />

        <div className="flex gap-3">
          <Button
            label="Cancel"
            variant="outline"
            onClick={() => navigate("/products")}
          />

          <Button label="Save Changes" onClick={handleSubmit} />
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="rounded-2xl border bg-white p-8 shadow-sm"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <Input
            name="name"
            placeholder="Product Name"
            value={product.name}
            onChange={handleChange}
          />

          <Input
            name="category"
            placeholder="Category"
            value={product.category}
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
            name="stock"
            type="number"
            placeholder="Stock"
            value={product.stock}
            onChange={handleChange}
          />

          <div className="md:col-span-2">
            <Input
              name="image"
              placeholder="Image URL"
              value={product.image}
              onChange={handleChange}
            />
          </div>

          <div className="md:col-span-2">
            <textarea
              name="description"
              rows={5}
              value={product.description}
              onChange={handleChange}
              placeholder="Product Description"
              className="w-full rounded-lg border p-3 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>
        </div>

        <div className="mt-8 flex justify-end gap-3">
          <Button
            label="Cancel"
            variant="outline"
            onClick={() => navigate("/products")}
          />

          <Button label="Update Product" type="submit" />
        </div>
      </form>
    </section>
  );
};

export default EditProduct;
