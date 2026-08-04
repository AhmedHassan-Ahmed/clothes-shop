import { useNavigate } from "react-router-dom";
import ProductCard from "../ProductCard";

const FeaturedProducts = ({ products }) => {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="uppercase tracking-[4px] text-green-700 font-semibold">
            Featured
          </p>
          <h2 className="text-5xl font-bold mt-3">Best Sellers</h2>
          <p className="text-gray-500 mt-4">
            Discover our most popular fashion pieces.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <button
            onClick={() => navigate("/products")}
            className="bg-green-700 text-white px-8 py-4 rounded-xl hover:bg-green-800 duration-300"
          >
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
