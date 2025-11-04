
export const Child = ({ title, desc, img, stock, price }) => {
  const shortDesc = desc.length > 60 ? desc.slice(0, 60) + "..." : desc;

  return (
    <>
      <div className="card m-2 shadow" style={{ width: "18rem" }}>
        <img src={img} className="card-img-top" alt={title} />
        <div className="card-body text-center">
          <h5 className="card-title text-capitalize">{title}</h5>
          <p className="card-text">{shortDesc}</p>
          <p className="fw-bold">Price: ₹{price}</p>
          {stock === "true" ? (
            <button className="btn btn-success w-100">Buy Now</button>
          ) : (
            <button className="btn btn-danger w-100" disabled>
              Out of Stock
            </button>
          )}
        </div>
      </div>
    </>
  );
};
