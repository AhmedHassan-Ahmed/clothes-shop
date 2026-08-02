import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "..//services/api";
import {
  ArrowLeft,
  Pencil,
  Trash2,
  Star,
  Package,
  CalendarDays,
  Tag,
  Boxes,
  ShieldCheck,
} from "lucide-react";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const [selectedImage, setSelectedImage] = useState("");

  const colors = ["#111827", "#065f46", "#4338CA", "#991B1B"];

  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const sizes = ["XS", "S", "M", "L"];

  const [selectedColor, setSelectedColor] = useState(colors[1]);
  const [selectedSize, setSelectedSize] = useState("S");

  useEffect(() => {
    api
      .get(`/products/${id}`)
      .then((res) => {
        setProduct(res.data.data);
        console.log(res.data.data);
        setSelectedImage(res.data.data.image);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center text-xl font-semibold">
        Loading Product...
      </div>
    );
  }

  if (!product) {
    return (
      <div className="h-screen flex justify-center items-center text-xl">
        Product not found
      </div>
    );
  }

  if (!product.stock > 0) {
    return (
      <div className="mt-10 rounded-xl border border-red-200 bg-red-50 p-6">
        <h3 className="text-xl font-bold text-red-600">Out of Stock</h3>

        <p className="text-gray-600 mt-2">
          This product is currently unavailable. Please check back later after
          it has been restocked.
        </p>
      </div>
    );
  }

  const oldPrice = (product.price * 1.25).toFixed(2);

const handleDelete = async () => {
  try {
    await api.delete(`/products/${id}`);
    setShowDeleteModal(false);
    navigate("/products");
  } catch (error) {
    console.log(error);
  }
};

  return (
    <div className="max-w-7xl mx-auto px-5 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row md:justify-between gap-5 mb-8">
        <div className="text-sm uppercase tracking-wider text-gray-500">
          Inventory /<span className="mx-1">Ready-To-Wear /</span>
          <span className="font-bold text-emerald-700">{product.category}</span>
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => navigate("/products")}
            className="border rounded-lg px-4 py-2 flex items-center gap-2 hover:bg-gray-100"
          >
            <ArrowLeft size={18} />
            Back To List
          </button>

          <button 
            onClick={() => navigate(`/edit-product/${id}`)}
            className="bg-orange-600 text-white rounded-lg px-4 py-2 flex items-center gap-2 hover:bg-orange-700"
          >
            <Pencil size={18} />
            Edit Product
          </button>

          <button
            onClick={() => setShowDeleteModal(true)}
            className="border rounded-lg p-2 hover:bg-red-50"
          >
            <Trash2 className="text-red-500" size={18} />
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-10">
        <div>
          <div className="relative rounded-xl overflow-hidden border bg-gray-100">
            <img
              src={selectedImage}
              alt={product.name}
              className="w-full h-[650px] object-cover"
            />

            <div className="absolute top-5 left-5 flex flex-col gap-3">
              <span className="bg-emerald-900 text-white text-xs rounded-full px-4 py-2">
                EXCLUSIVE
              </span>

              <span className="bg-white text-gray-700 text-xs rounded-full px-4 py-2 shadow">
                {product.stock > 0 ? "IN STOCK" : "OUT OF STOCK"}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4 mt-5">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                onClick={() => setSelectedImage(product.image)}
                className={`cursor-pointer rounded-lg overflow-hidden border-2 transition
                  ${
                    selectedImage === product.image
                      ? "border-emerald-700"
                      : "border-gray-200"
                  }`}
              >
                <img
                  src={product.image}
                  alt=""
                  className="h-28 w-full object-cover hover:scale-105 duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="uppercase tracking-widest text-orange-600 font-semibold">
            Premium Collection
          </p>

          <h1 className="text-4xl font-bold mt-3">{product.name}</h1>

          <p className="text-gray-500 mt-2">
            Product ID :<span className="ml-2 font-medium">{product.id}</span>
          </p>

          <div className="flex items-center gap-1 mt-5">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} size={18} fill="#FACC15" color="#FACC15" />
            ))}

            <span className="text-gray-500 ml-3">4.9 (128 Reviews)</span>
          </div>

          <div className="flex items-center gap-5 mt-8">
            <span className="text-4xl font-bold text-red-500">
              ${product.price}
            </span>

            <span className="text-xl text-gray-400 line-through">
              ${oldPrice}
            </span>

            <span className="bg-red-100 text-red-600 rounded-full px-3 py-1 text-sm">
              Save 20%
            </span>
          </div>

          <div className="mt-10">
            <h3 className="uppercase font-semibold tracking-wide mb-4">
              Select Color
            </h3>

            <div className="flex gap-3">
              {colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  style={{ backgroundColor: color }}
                  className={`w-10 h-10 rounded border-2 transition
                    ${
                      selectedColor === color
                        ? "border-black scale-110"
                        : "border-gray-300"
                    }`}
                />
              ))}
            </div>
          </div>

          <div className="mt-10">
            <div className="flex justify-between">
              <h3 className="uppercase font-semibold">Select Size</h3>

              <button className="text-sm text-emerald-700">Size Guide</button>
            </div>

            <div className="flex flex-wrap gap-3 mt-4">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-6 py-3 rounded-lg border transition
                    ${
                      selectedSize === size
                        ? "bg-emerald-700 text-white border-emerald-700"
                        : "hover:bg-gray-100"
                    }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <h3 className="uppercase font-semibold tracking-wide mb-4">
              Description
            </h3>

            <p className="text-gray-600 leading-8 italic">
              "{product.description}"
            </p>

            <p className="text-gray-500 mt-5 leading-7">
              Crafted with attention to detail and designed for everyday
              performance, this product combines durability, style, and
              functionality. Whether for work or personal use, it offers a
              premium experience with reliable quality and modern aesthetics.
            </p>
          </div>

          <div className="mt-10 bg-gray-50 border rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-bold mb-6">Specifications</h2>

            <div className="space-y-5">
              <div className="flex justify-between items-center border-b pb-3">
                <div className="flex items-center gap-2 text-gray-600">
                  <Tag size={18} />
                  Category
                </div>

                <span className="font-medium">{product.category}</span>
              </div>

              <div className="flex justify-between items-center border-b pb-3">
                <div className="flex items-center gap-2 text-gray-600">
                  <Boxes size={18} />
                  Stock
                </div>

                <span className="font-medium">{product.stock} Units</span>
              </div>

              <div className="flex justify-between items-center border-b pb-3">
                <div className="flex items-center gap-2 text-gray-600">
                  <Package size={18} />
                  Product ID
                </div>

                <span className="font-medium">#{product.id}</span>
              </div>

              <div className="flex justify-between items-center border-b pb-3">
                <div className="flex items-center gap-2 text-gray-600">
                  <CalendarDays size={18} />
                  Created
                </div>

                <span className="font-medium">
                  {new Date(product.createdAt).toLocaleDateString()}
                </span>
              </div>

              <div className="flex justify-between items-center border-b pb-3">
                <div className="flex items-center gap-2 text-gray-600">
                  <ShieldCheck size={18} />
                  Warranty
                </div>

                <span className="font-medium">12 Months</span>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 text-gray-600">
                  <Package size={18} />
                  Shipping
                </div>

                <span className="font-medium">Free Delivery</span>
              </div>
            </div>
          </div>

          <div
            className={`mt-8 rounded-xl p-6 border ${
              product.stock > 20
                ? "bg-green-50 border-green-200"
                : product.stock > 0
                  ? "bg-yellow-50 border-yellow-200"
                  : "bg-red-50 border-red-200"
            }`}
          >
            <div className="flex gap-4">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  product.stock > 20
                    ? "bg-green-100"
                    : product.stock > 0
                      ? "bg-yellow-100"
                      : "bg-red-100"
                }`}
              >
                <Package
                  className={
                    product.stock > 20
                      ? "text-green-700"
                      : product.stock > 0
                        ? "text-yellow-700"
                        : "text-red-700"
                  }
                />
              </div>

              <div>
                <h3 className="font-semibold text-lg">Inventory Status</h3>

                <p className="text-gray-600 mt-1">
                  {product.stock > 20
                    ? `${product.stock} items currently available in stock.`
                    : product.stock > 0
                      ? `Only ${product.stock} items remaining. Restock soon.`
                      : "Currently unavailable."}
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="border rounded-xl p-5 text-center">
              <h4 className="text-gray-500 text-sm">Price</h4>

              <p className="text-2xl font-bold text-emerald-700 mt-2">
                ${product.price}
              </p>
            </div>

            <div className="border rounded-xl p-5 text-center">
              <h4 className="text-gray-500 text-sm">Category</h4>

              <p className="font-semibold mt-2">{product.category}</p>
            </div>

            <div className="border rounded-xl p-5 text-center">
              <h4 className="text-gray-500 text-sm">Stock</h4>

              <p className="font-semibold mt-2">{product.stock}</p>
            </div>

            <div className="border rounded-xl p-5 text-center">
              <h4 className="text-gray-500 text-sm">Added On</h4>

              <p className="font-semibold mt-2">
                {new Date(product.createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mt-10">
            <button className="bg-emerald-700 hover:bg-emerald-800 transition text-white rounded-xl py-4 font-semibold">
              Update Product
            </button>

            <button
              onClick={() => navigate(-1)}
              className="border rounded-xl py-4 hover:bg-gray-100 font-semibold"
            >
              Back to Inventory
            </button>
          </div>
        </div>
      </div>
      {showDeleteModal && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
    <div className="bg-white rounded-xl p-6 w-[400px] shadow-xl">
      <h2 className="text-2xl font-bold mb-3 text-red-600">
        Delete Product
      </h2>

      <p className="text-gray-600">
        Are you sure you want to delete
        <span className="font-semibold"> {product.name}</span>?
      </p>

      <div className="flex justify-end gap-3 mt-6">
        <button
          onClick={() => setShowDeleteModal(false)}
          className="px-4 py-2 border rounded-lg hover:bg-gray-100"
        >
          Cancel
        </button>

        <button
          onClick={handleDelete}
          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
)}
    </div>
  );
};

export default ProductDetails;
