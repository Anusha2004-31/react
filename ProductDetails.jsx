import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const ProductDetails = ({ addToCart }) => {
    const [products, setProducts] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [categories, setCategories] = useState([]);

    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("all");
    const [starFilter, setStarFilter] = useState("all");
    const [ratingRange, setRatingRange] = useState(3);

    const [page, setPage] = useState(1);
    const itemsPerPage = 10;
    useEffect(() => {
        async function loadProducts() {
            const { data } = await axios.get("https://dummyjson.com/products?limit=100");
            setProducts(data.products);
            const uniqueCategories = [...new Set(data.products.map((p) => p.category))];
            setCategories(uniqueCategories);
        }
        loadProducts();
    }, []);
    useEffect(() => {
        let filteredData = products.filter((p) => {
            const matchSearch = p.title.toLowerCase().includes(search.toLowerCase());
            const matchCategory = category === "all" || p.category === category;

            const rating = p.rating;
            let matchStar = true;

            if (starFilter === "3") matchStar = rating >= 3 && rating < 4;
            if (starFilter === "4") matchStar = rating >= 4 && rating < 5;

            const matchRange = rating >= ratingRange && rating <= 4.9;

            return matchSearch && matchCategory && matchStar && matchRange;
        });

        setFiltered(filteredData);
        setPage(1);
    }, [search, category, starFilter, ratingRange, products]);

    const totalPages = Math.ceil(filtered.length / itemsPerPage);
    const startIndex = (page - 1) * itemsPerPage;
    const visibleProducts = filtered.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-3 d-flex flex-column align-items-center mt-5">
                    <h5 className="mb-4">Filter by Rating</h5>

                    <button
                        className={`btn w-75 mb-2 ${starFilter === "3" ? "btn-dark" : "btn-outline-dark"}`}
                        onClick={() => setStarFilter("3")}
                    >
                        ⭐⭐⭐ 3 Stars
                    </button>

                    <button
                        className={`btn w-75 mb-2 ${starFilter === "4" ? "btn-dark" : "btn-outline-dark"}`}
                        onClick={() => setStarFilter("4")}
                    >
                        ⭐⭐⭐⭐ 4 Stars
                    </button>

                    <div className="w-75 mt-4">
                        <label className="form-label">
                            Rating Range: <b>{ratingRange}</b> ⭐
                        </label>
                        <input
                            type="range"
                            className="form-range"
                            min="3"
                            max="4"
                            step="0.1"
                            value={ratingRange}
                            onChange={(e) => setRatingRange(Number(e.target.value))}
                        />
                    </div>
                </div>
                <div className="col-md-9">
                    <div className="row mb-4">
                        <div className="col-md-6">
                            <input
                                type="text"
                                placeholder="Search products..."
                                className="form-control"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>

                        <div className="col-md-6">
                            <select
                                className="form-select"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                            >
                                <option value="all">All Categories</option>
                                {categories.map((cat, idx) => (
                                    <option key={idx} value={cat}>
                                        {cat.toUpperCase()}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        {visibleProducts.map((item) => (
                            <div className="col-md-4 mb-4" key={item.id}>
                                <div className="card h-100 shadow-sm">
                                    <Link to={`/product/${item.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                                        <img src={item.thumbnail} className="card-img-top" height="180" />
                                        <h6 className="text-truncate mt-2 px-2">{item.title}</h6>
                                    </Link>

                                    <div className="card-body">
                                        <p className="small text-muted">{item.category}</p>
                                        <strong>₹{item.price}</strong>
                                        <p>⭐ {item.rating}</p>

                                        <button
                                            className="btn btn-primary w-100"
                                            onClick={() => addToCart(item)}
                                        >
                                            🛒 Add to Cart
                                        </button>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="d-flex justify-content-center mt-3 flex-wrap">
                        {Array.from({ length: totalPages }, (_, i) => (
                            <button
                                key={i}
                                className={`btn mx-1 mb-2 ${page === i + 1 ? "btn-dark" : "btn-outline-dark"}`}
                                onClick={() => setPage(i + 1)}
                            >
                                {i + 1}
                            </button>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
};
