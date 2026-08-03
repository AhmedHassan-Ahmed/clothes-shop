import { useNavigate } from "react-router-dom";
const ProductCard = ({ product }) => {
    const navigate = useNavigate();
    return (
        <div 
            onClick={() => navigate(`/product/${product.id}`)}
            className="bg-white rounded-xl shadow p-4 cursor-pointer hover:shadow-lg transition"
        >
            <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-lg"
            />
            <h3 className="font-bold mt-3">
                {product.name}
            </h3>
            <p className="text-gray-600">
                ${product.price}
            </p>
        </div>
    );
};

export default ProductCard;