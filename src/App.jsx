import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateProduct from "./pages/CreateProduct";
import Home from "./pages/Home";
import './index.css'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-product" element={<CreateProduct/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;