import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";
import Input from "../components/Input";
import Buttons from "../components/Button";

const EditProduct = () => {

    const { id } = useParams();

    const [product, setProduct] = useState({
        title: "",
        price: "",
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
        await api.put(
            `/products/${id}`,
            product
        );
        alert("Product Updated");
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
                    name="title"
                    placeholder="Product Name"
                    value={product.title}
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
                <Buttons
                    label="Update Product"
                    type="submit"
                />
            </form>
        </div>
    );
};


export default EditProduct;