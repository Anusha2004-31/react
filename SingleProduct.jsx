import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export const SingleProduct = ({ addToCart }) => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        async function loadProduct() {
            const { data } = await axios.get(`https://dummyjson.com/products/${id}`);
            setProduct(data);
        }
        loadProduct();
    }, [id]);

    if (!product) {
        return <h2 className="text-center mt-5">Loading...</h2>;
    }

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-5 d-flex justify-content-center">
                    <img
                        src={product.thumbnail}
                        alt={product.title}
                        className="img-fluid rounded shadow"
                        style={{ maxHeight: "380px", objectFit: "cover" }}
                    />
                </div>
                <div className="col-md-7">
                    <h2>{product.title}</h2>
                    <p className="text-muted">{product.category.toUpperCase()}</p>

                    <h4 className="text-success">₹{product.price}</h4>

                    <p className="mt-3">
                        ⭐ <b>{product.rating}</b> / 5
                    </p>

                    <p className="mt-3">{product.description}</p>

                    <button
                        className="btn btn-primary btn-lg mt-3 w-50"
                        onClick={() => addToCart(product)}
                    >
                        🛒 Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};
