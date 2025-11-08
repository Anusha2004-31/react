
import { useState } from "react";

const UserForm = ({ setUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ name, email, phone });
    setName("");
    setEmail("");
    setPhone("");
  };

  return (
    <div className="container mt-4">
      <h2>Enter Your Info</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input 
            type="text" 
            className="form-control" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input 
            type="email" 
            className="form-control" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Phone</label>
          <input 
            type="tel" 
            className="form-control" 
            value={phone} 
            onChange={(e) => setPhone(e.target.value)} 
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default UserForm;
