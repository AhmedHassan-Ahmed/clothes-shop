import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";
import ErrorBanner from "../components/ErrorBanner";
import { useProductContext } from "../context/ProductContext";

const Home = () => {

  const {
    products,
    loading,
    error,
  } = useProductContext();

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorBanner message={error} />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}

    </div>
  );
};

export default Home;
