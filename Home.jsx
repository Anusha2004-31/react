import React from "react";
import Carousel from "../components/Carousel"; // adjust path if needed

const Home = () => {
  return (
    <>
      {/* Carousel Section */}
      <Carousel />

      {/* Hero Section */}
      <section className="text-center container mt-5">
        <div className="row py-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-bold text-dark mb-3">Welcome to Our Store</h1>
            <p className="lead text-secondary mb-4">
              Explore our exclusive collection of items and discover your favorites.
            </p>
            <div>
              <button className="btn btn-success me-2">Shop Now</button>
              <button className="btn btn-outline-danger">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <div className="py-5 bg-light">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
            {Array.from({ length: 6 }).map((_, index) => (
              <div className="col" key={index}>
                <div className="card shadow-sm h-100 d-flex flex-column bg-dark text-white p-3">
                  <h5 className="text-center mb-2">Thumbnail</h5>
                  <div className="card-body text-center flex-grow-1">
                    <p className="card-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi deleniti veniam unde enim sed nobis, quidem sit fuga incidunt reprehenderit, recusandae repudiandae eum, iste hic consectetur ducimus ea sunt voluptates!
                    </p>
                  </div>
                  <div className="card-footer bg-dark border-0 d-flex justify-content-center gap-2">
                    <button className="btn btn-sm btn-outline-light">View</button>
                    <button className="btn btn-sm btn-outline-light">Edit</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
