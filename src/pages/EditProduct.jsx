import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";
import Input from "../components/Input";
import Buttons from "../components/Button";
import { useNavigate } from "react-router-dom";

const EditProduct = () => {

    const navigate = useNavigate();

    const { id } = useParams();

    const [product, setProduct] = useState({
        name: "",
        category: "",
        price: "",
        stock: "",
        description: "",
        image: ""
    });

    useEffect(() => {
        api.get(`/products/${id}`)
            .then((res) => {
                setProduct(res.data.data);
            });
        }, [id]);

    const handleChange = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.put(`/products/${id}`, product);
            navigate(`/product/${id}`);
        } catch (error) {
            console.log(error);
            alert("Something went wrong");
        }
    };

    return (
        <div className="max-w-xl mx-auto mt-10">
            <h1 className="text-3xl font-bold mb-6">
                Edit Product
            </h1>
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
                    name="category"
                    placeholder="Category"
                    value={product.category}
                    onChange={handleChange}
                />

                <Input
                    name="stock"
                    type="number"
                    placeholder="Stock"
                    value={product.stock}
                    onChange={handleChange}
                />

                <Input
                    name="description"
                    placeholder="Description"
                    value={product.description}
                    onChange={handleChange}
                />

                <Input
                    name="image"
                    placeholder="Image URL"
                    value={product.image}
                    onChange={handleChange}
                />
                
                <Buttons
                    label="Update Product"
                    type="submit"
                />
            </form>
        </div>
    );
};


export default EditProduct;