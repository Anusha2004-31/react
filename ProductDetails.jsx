
import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";

export const ProductDetails = ({ addToCart }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);

    const productsPerPage = 10;

    useEffect(() => {
        async function productsApi() {
            try {
                const { data } = await axios.get("https://dummyjson.com/products?limit=100");
                setProducts(data.products);
            } catch (error) {
                console.error("Error fetching products:", error);
            } finally {
                setLoading(false);
            }
        }
        productsApi();
    }, []);

    if (loading) {
        return (
            <div
                className="d-flex justify-content-center align-items-center"
                style={{ height: "70vh" }}
            >
                <Loader />
            </div>
        );
    }
    const startIndex = (page - 1) * productsPerPage;
    const currentProducts = products.slice(startIndex, startIndex + productsPerPage);

    return (
        <div className="container">
            <div className="row justify-content-center">
                {currentProducts.map((item) => (
                    <div className="col-3 mt-3" key={item.id}>
                        <div className="card shadow-sm" style={{ width: "14rem", minHeight: "320px" }}>
                            <img
                                src={item.images[0]}
                                className="card-img-top"
                                alt={item.title}
                                style={{
                                    height: "140px",
                                    objectFit: "cover",
                                    borderRadius: "6px",
                                }}
                            />
                            <div className="card-body p-2">
                                <h6 className="card-title" style={{ fontSize: "15px" }}>
                                    {item.title}
                                </h6>
                                <p
                                    className="card-text text-muted"
                                    style={{ fontSize: "12px", height: "40px", overflow: "hidden" }}
                                >
                                    {item.description}
                                </p>
                                <button
                                    className="btn btn-sm btn-primary w-100"
                                    onClick={() => addToCart(item)}
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>


            <div className="d-flex justify-content-center gap-2 my-4 flex-wrap">
                {[...Array(10)].map((_, index) => (
                    <button
                        key={index}
                        className={`btn ${page === index + 1 ? "btn-primary" : "btn-outline-primary"}`}
                        style={{ width: "50px" }}
                        onClick={() => setPage(index + 1)}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};
