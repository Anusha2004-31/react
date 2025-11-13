import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";

export const ProductDetails = ({ addToCart }) => {
    const [products, setProducts] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");
    const productsPerPage = 10;
    const fetchProducts = async (category = "all") => {
        setLoading(true);
        try {
            let url =
                category === "all"
                    ? "https://dummyjson.com/products?limit=100"
                    : `https://dummyjson.com/products/category/${category}`;
            const { data } = await axios.get(url);
            setProducts(data.products);
            setFiltered(data.products);
        } catch (error) {
            console.error("Error fetching products:", error);
        } finally {
            setLoading(false);
        }
    };
    const fetchCategories = async () => {
        try {
            const { data } = await axios.get("https://dummyjson.com/products/categories");
            setCategories(data);
        } catch (error) {
            console.error("Error fetching categories:", error);
        }
    };
    useEffect(() => {
        fetchProducts();
        fetchCategories();
    }, []);

    useEffect(() => {
        const result = products.filter((p) =>
            p.title.toLowerCase().includes(search.toLowerCase())
        );
        setFiltered(result);
        setCurrentPage(1);
    }, [search, products]);

    const indexOfLast = currentPage * productsPerPage;
    const indexOfFirst = indexOfLast - productsPerPage;
    const currentProducts = filtered.slice(indexOfFirst, indexOfLast);

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

    return (
        <div
            className="container mt-4 p-3"
            style={{
                backgroundColor: "#f8f9fa",
                borderRadius: "12px",
                boxShadow: "0 0 10px rgba(0,0,0,0.1)",
            }}
        >
            <div
                className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3"
                style={{ borderBottom: "2px solid #ddd", paddingBottom: "10px" }}
            >
                <input
                    type="text"
                    placeholder="🔍 Search products..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="form-control"
                    style={{
                        width: "50%",
                        borderRadius: "8px",
                        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                    }}
                />

                <select
                    className="form-select"
                    value={selectedCategory}
                    onChange={(e) => {
                        const category = e.target.value;
                        setSelectedCategory(category);
                        fetchProducts(category);
                        setCurrentPage(1);
                    }}
                    style={{
                        width: "30%",
                        borderRadius: "8px",
                        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                    }}
                >
                    <option value="all">All Categories</option>
                    {categories.map((cat, idx) => (
                        <option key={idx} value={cat.slug || cat}>
                            {cat.name || cat}
                        </option>
                    ))}
                </select>
            </div>
            <div className="row justify-content-center">
                {currentProducts.map((item) => (
                    <div className="col-md-3 col-sm-6 mb-4" key={item.id}>
                        <div
                            className="card h-100 border-0 shadow-sm"
                            style={{
                                borderRadius: "12px",
                                transition: "transform 0.2s, box-shadow 0.2s",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = "scale(1.04)";
                                e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.15)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = "scale(1)";
                                e.currentTarget.style.boxShadow = "0 3px 10px rgba(0,0,0,0.1)";
                            }}
                        >
                            <img
                                src={item.images[0]}
                                className="card-img-top"
                                alt={item.title}
                                style={{
                                    height: "180px",
                                    objectFit: "cover",
                                    borderTopLeftRadius: "12px",
                                    borderTopRightRadius: "12px",
                                }}
                            />
                            <div className="card-body d-flex flex-column justify-content-between">
                                <h6
                                    className="card-title text-truncate"
                                    style={{ fontSize: "16px", fontWeight: "600" }}
                                >
                                    {item.title}
                                </h6>
                                <p
                                    className="text-muted"
                                    style={{
                                        fontSize: "13px",
                                        height: "40px",
                                        overflow: "hidden",
                                    }}
                                >
                                    {item.description}
                                </p>
                                <div className="d-flex justify-content-between align-items-center mt-auto">
                                    <span className="fw-bold text-success">${item.price}</span>
                                    <button
                                        className="btn btn-sm btn-outline-primary"
                                        onClick={() => addToCart(item)}
                                    >
                                        🛒 Add
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="d-flex justify-content-center mt-4 flex-wrap">
                {filtered.length > 10 ? (
                    Array.from({ length: Math.ceil(filtered.length / 10) }, (_, index) => (
                        <button
                            key={index}
                            className={`btn mx-1 mb-2 ${currentPage === index + 1
                                ? "btn-dark"
                                : "btn-outline-secondary"
                                }`}
                            style={{
                                borderRadius: "8px",
                                padding: "5px 12px",
                                fontSize: "14px",
                            }}
                            onClick={() => setCurrentPage(index + 1)}
                        >
                            {index + 1}
                        </button>
                    ))
                ) : (
                    <button className="btn btn-primary">1</button>
                )}
            </div>
        </div>
    );
};
