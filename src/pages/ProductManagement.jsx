import { useState } from "react";
import { useProductContext } from "../context/ProductContext";
import Loader from "../components/Loader";
import ErrorBanner from "../components/ErrorBanner";
import ProductCard from "../components/ProductCard";
import Modal from "../components/Modal";
import Input from "../components/Input";
import Pagination from "../components/Pagination";
import Button from "../components/Button";
import PageHeader from "../components/PageHeader";
import { useNavigate } from "react-router-dom";

const ProductManagement = () => {
    const { products, loading, error, addProduct } = useProductContext();
    const [openModal, setOpenModal] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const navigate = useNavigate();
    const productsPerPage = 6;
    const [product, setProduct] = useState({
        name: "",
        price: "",
        image: "",
        category: "",
        stock: 0,
        description: ""
    });
    const [search, setSearch] = useState("");
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
            price: "",
            image: "",
            category: "",
            stock: 0,
            description: ""
        });
        setOpenModal(false);
    };
    if (loading) return <Loader />;
    if (error) return <ErrorBanner message={error} />;
    const filteredProducts = products.filter((product) =>
        (product.name || "").toLowerCase().includes(search.toLowerCase())
    );
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(
        indexOfFirstProduct,
        indexOfLastProduct
    );
    const totalPages = Math.ceil(
        filteredProducts.length / productsPerPage
    );
    return (
        <section className="space-y-6">
            <div className="md:flex justify-between">
                <PageHeader 
                    page = "Products"
                    title = "Products Management"
                    desc = "Manage your inventory"
                />
                <div className="
                    flex flex-col 
                    md:flex-row 
                    gap-3
                    w-full 
                    md:w-auto md:mt-16
                ">
                    <Button
                        label="+ Add Product"
                        onClick={() => navigate("/create-product")}
                    />
                    </div>
            </div>
            <h2 className="text-xl font-bold text-green-800">
                Total Products : {products.length}
            </h2>
            <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => {
                    setSearch(e.target.value)
                    setCurrentPage(1);
                }}
                className="w-full md:w-80 border rounded-lg px-4 py-3 mb-6"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {currentProducts.map((product)=>(
                <ProductCard
                    key={product.id}
                    product={product}
                />
                ))}
            </div>
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
            />
            <Modal
                isOpen={openModal}
                onClose={() => setOpenModal(false)}
            >
                <form
                    onSubmit={handleSubmit}
                    className="space-y-4"
                >
                    <Input
                        name="name"
                        placeholder="Product Name"
                        value={product.name}
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
                        name="image"
                        placeholder="Image URL"
                        value={product.image}
                        onChange={handleChange}
                    />
                    <Button
                        label="Add Product"
                        type="submit"
                    />
                </form>
            </Modal>
        </section>
    );
};


export default ProductManagement;