
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        repeatPassword: "",
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" }); // clear error on change
    };

    const validate = () => {
        const newErrors = {};
        if (!form.name) newErrors.name = "Name is required";
        if (!form.email) newErrors.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(form.email))
            newErrors.email = "Email is invalid";
        if (!form.password) newErrors.password = "Password is required";
        if (!form.repeatPassword) newErrors.repeatPassword = "Repeat password required";
        else if (form.password !== form.repeatPassword)
            newErrors.repeatPassword = "Passwords do not match";
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // ✅ prevent reload
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return; // ❌ stop navigation if errors
        }

        // ✅ redirect to homepage
        navigate("/");
    };

    return (
        <div className="container mt-5">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-2">
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={form.name}
                        onChange={handleChange}
                        className="form-control"
                    />
                    {errors.name && <small className="text-danger">{errors.name}</small>}
                </div>

                <div className="mb-2">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={form.email}
                        onChange={handleChange}
                        className="form-control"
                    />
                    {errors.email && <small className="text-danger">{errors.email}</small>}
                </div>

                <div className="mb-2">
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={form.password}
                        onChange={handleChange}
                        className="form-control"
                    />
                    {errors.password && <small className="text-danger">{errors.password}</small>}
                </div>

                <div className="mb-2">
                    <input
                        type="password"
                        name="repeatPassword"
                        placeholder="Repeat Password"
                        value={form.repeatPassword}
                        onChange={handleChange}
                        className="form-control"
                    />
                    {errors.repeatPassword && (
                        <small className="text-danger">{errors.repeatPassword}</small>
                    )}
                </div>

                <button type="submit" className="btn btn-primary">
                    Register
                </button>
            </form>
        </div>
    );
}
