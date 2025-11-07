import React from "react";

const Carousel = () => {
  return (
    <div className="mt-5 pt-5">
      <div>
        <img 
          src="https://images.unsplash.com/photo-1600058644245-ede8d11f6522?auto=format&fit=crop&q=60&w=1200" 
          className="d-block w-100 mb-3" 
          alt="Image 1"
          style={{ height: "1200px", objectFit: "cover" }} 
        />
      </div>
      <div>
        <img 
          src="https://images.unsplash.com/photo-1686071211629-91ac9906e878?auto=format&fit=crop&q=60&w=1200" 
          className="d-block w-100 mb-3" 
          alt="Image 2"
          style={{ height: "1000px", objectFit: "cover" }} 
        />
      </div>
      <div>
        <img 
          src="https://images.unsplash.com/photo-1686071247990-d5b534d5b7e9?auto=format&fit=crop&q=80&w=1200" 
          className="d-block w-100 mb-3" 
          alt="Image 3"
          style={{ height: "700px", objectFit: "cover" }} 
        />
      </div>

    </div>
  );
};

export default Carousel;
