
import React from "react";

export const Home = () => {
  return (
    <main>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Album example</h1>
            <p className="lead text-body-secondary">
              Something short and leading about the collection below—its contents, the creator, etc.
              Make it short and sweet, but not too short so folks don’t simply skip over it entirely.
            </p>
            <p>
              <a href="#" className="btn btn-primary my-2">Main call to action</a>
              <a href="#" className="btn btn-secondary my-2 ms-2">Secondary action</a>
            </p>
          </div>
        </div>
      </section>
      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">

            {Array.from({ length: 9 }).map((_, index) => (
              <div className="col" key={index}>
                <div
                  className="card shadow-sm"
                  style={{
                    height: "250px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    padding: "1rem"
                  }}
                >
                  <svg
                    className="bd-placeholder-img card-img-top d-block mx-auto"
                    style={{ width: "100px", height: "100px", marginBottom: "1rem" }}
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    preserveAspectRatio="xMidYMid slice"
                    aria-label="Placeholder: Thumbnail"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#55595c" />
                    <text x="50%" y="50%" fill="#eceeef" dy=".3em" textAnchor="middle">
                      Thumbnail
                    </text>
                  </svg>
                  <div
                    className="card-body d-flex flex-column justify-content-center text-center"
                    style={{ flex: 1 }}
                  >
                    <p className="card-text">
                      This is a wider card with supporting text below as a natural lead-in
                      to additional content.
                    </p>

                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                      </div>
                      <small className="text-body-secondary">9 mins</small>
                    </div>
                  </div>

                </div>
              </div>
            ))}

          </div>
        </div>
      </div>

    </main>
  );
};
