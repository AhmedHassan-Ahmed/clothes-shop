import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import CreateProduct from "./pages/CreateProduct";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import ProductManagement from "./pages/ProductManagement";
import EditProduct from "./pages/EditProduct";
import "./index.css";
import Layout from "./Layout/Layout";
import NotFound from "./pages/NotFound";
import Categories from "./components/landing/Categories";
import About from "./components/landing/About";
import Contact from "./components/landing/Contact";
import FeaturedProducts from "./components/landing/FeaturedProducts";
import { useProductContext } from "./context/useProductContext";

function App() {
  const { products } = useProductContext();

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/edit-product/:id" element={<EditProduct />} />
          <Route path="/" element={<Landing />} />
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/products" element={<ProductManagement />} />
          <Route path="/create-product" element={<CreateProduct />} />
          <Route
            path="/collections"
            element={<FeaturedProducts products={products} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
