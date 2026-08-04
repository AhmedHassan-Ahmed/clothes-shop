import { useState } from "react";
import { useProductContext } from "../context/useProductContext";
import Loader from "../components/Loader";
import ErrorBanner from "../components/ErrorBanner";
import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";
import Button from "../components/Button";
import PageHeader from "../components/PageHeader";
import { useNavigate } from "react-router-dom";

const ProductManagement = () => {
  const { products, loading, error } = useProductContext();
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const productsPerPage = 8;
  const [search, setSearch] = useState("");
  if (loading) return <Loader />;
  if (error) return <ErrorBanner message={error} />;

  const filteredProducts = products.filter((product) =>
    (product.name || "").toLowerCase().includes(search.toLowerCase()),
  );
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct,
  );
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  return (
    <section className="space-y-8 p-8">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <PageHeader
          page="Products"
          title="Products Management"
          desc="Manage your inventory"
        />

        <Button
          label="+ Add Product"
          onClick={() => navigate("/create-product")}
        />
      </div>

      <div className="flex flex-col gap-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm font-medium uppercase tracking-wide text-gray-500">
            Total Products
          </p>

          <h2 className="mt-2 text-5xl font-bold text-green-800">
            {products.length}
          </h2>
        </div>

        <div className="w-full lg:w-96">
          <input
            type="text"
            placeholder="🔍 Search products..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
            className="w-full rounded-xl border border-gray-300 px-5 py-3 text-lg transition focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
          />
        </div>
      </div>


      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {currentProducts.map((product) => (
          <ProductCard key={product._id || product.id} product={product} />
        ))}
      </div>

      {currentProducts.length === 0 && (
        <div className="rounded-xl border border-dashed border-gray-300 py-16 text-center text-lg text-gray-500">
          No products found.
        </div>
      )}
      {totalPages > 1 && (
        <div className="flex justify-center pt-4">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      )}
    </section>
  );
};

export default ProductManagement;
