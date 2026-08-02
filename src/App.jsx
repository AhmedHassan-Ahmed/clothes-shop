import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateProduct from "./pages/CreateProduct";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import "./index.css";
import Layout from "./Layout/Layout";
import NotFound from "./pages/NotFound";

function App() {
  return (
<BrowserRouter>
  <Routes>
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />

      <Route
        path="/create-product"
        element={<CreateProduct />}
      />

      <Route
        path="/product/:id"
        element={<ProductPage />}
      />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
</BrowserRouter>
  );
}

export default App;
