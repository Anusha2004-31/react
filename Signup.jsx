import { useState } from "react";

export const SignUp = () => {
    const [mode, setMode] = useState("signup");

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        repeatPassword: "",
    });

    const [errors, setErrors] = useState({});
    const nameRegex = /^[A-Z][a-zA-Z ]*$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[@$!%*?&]).{6,}$/;

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    function validateSignup() {
        const temp = {};

        if (!form.name.trim()) temp.name = "Kindly fill the input field";
        else if (!nameRegex.test(form.name))
            temp.name = "First letter must be capital";

        if (!form.email.trim()) temp.email = "Kindly fill the input field";
        else if (!emailRegex.test(form.email))
            temp.email = "Enter valid email";

        if (!form.password.trim()) temp.password = "Kindly fill the input field";
        else if (!passwordRegex.test(form.password))
            temp.password = "Password must include special character";

        if (!form.repeatPassword.trim())
            temp.repeatPassword = "Kindly fill the input field";
        else if (form.repeatPassword !== form.password)
            temp.repeatPassword = "Passwords do not match";

        setErrors(temp);
        return Object.keys(temp).length === 0;
    }

    function validateLogin() {
        const temp = {};

        if (!form.email.trim()) temp.email = "Kindly fill the input field";
        if (!form.password.trim()) temp.password = "Kindly fill the input field";

        setErrors(temp);
        return Object.keys(temp).length === 0;
    }

    function handleSubmit() {
        if (mode === "signup") {
            if (validateSignup()) alert("Signup Successful");
        } else {
            if (validateLogin()) alert("Login Successful");
        }
    }

    return (
        <section className="vh-100" style={{ backgroundColor: "#eee" }}>
            <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-12 col-xl-11">
                        <div className="card text-black" style={{ borderRadius: "25px" }}>
                            <div className="card-body p-md-5">
                                <div className="row justify-content-center">

                                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                        <div className="d-flex justify-content-center mb-3 gap-3">
                                            <button
                                                className={`btn btn-${mode === "signup" ? "primary" : "secondary"}`}
                                                onClick={() => setMode("signup")}
                                            >
                                                Sign Up
                                            </button>

                                            <button
                                                className={`btn btn-${mode === "login" ? "primary" : "secondary"}`}
                                                onClick={() => setMode("login")}
                                            >
                                                Login
                                            </button>
                                        </div>

                                        <p className="text-center h1 fw-bold mb-5 mt-4">
                                            {mode === "signup" ? "Sign up" : "Login"}
                                        </p>

                                        <form className="mx-1 mx-md-4" onSubmit={(e) => e.preventDefault()}>

                                            {mode === "signup" && (
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input
                                                            type="text"
                                                            name="name"
                                                            className="form-control"
                                                            value={form.name}
                                                            onChange={handleChange}
                                                        />
                                                        <label className="form-label">Your Name</label>
                                                        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
                                                    </div>
                                                </div>
                                            )}
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        className="form-control"
                                                        value={form.email}
                                                        onChange={handleChange}
                                                    />
                                                    <label className="form-label">Your Email</label>
                                                    {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
                                                </div>
                                            </div>
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input
                                                        type="password"
                                                        name="password"
                                                        className="form-control"
                                                        value={form.password}
                                                        onChange={handleChange}
                                                    />
                                                    <label className="form-label">Password</label>
                                                    {errors.password && (
                                                        <p style={{ color: "red" }}>{errors.password}</p>
                                                    )}
                                                </div>
                                            </div>

                                            {mode === "signup" && (
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input
                                                            type="password"
                                                            name="repeatPassword"
                                                            className="form-control"
                                                            value={form.repeatPassword}
                                                            onChange={handleChange}
                                                        />
                                                        <label className="form-label">Repeat your password</label>
                                                        {errors.repeatPassword && (
                                                            <p style={{ color: "red" }}>{errors.repeatPassword}</p>
                                                        )}
                                                    </div>
                                                </div>
                                            )}
                                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                <button
                                                    type="button"
                                                    className="btn btn-primary btn-lg"
                                                    onClick={handleSubmit}
                                                >
                                                    {mode === "signup" ? "Register" : "Login"}
                                                </button>
                                            </div>

                                        </form>
                                    </div>
                                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                                        <img
                                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                            className="img-fluid"
                                            alt="Sample image"
                                        />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
