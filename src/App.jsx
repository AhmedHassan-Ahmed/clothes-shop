import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateProduct from "./pages/CreateProduct";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import './index.css'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-product" element={<CreateProduct/>}/>
        <Route path="/product/:id" element={<ProductPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;