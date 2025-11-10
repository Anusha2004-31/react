import { Link } from "react-router-dom";

const Login = () => {
    return (
        <>
            <div className="text-center rounded bg-warning p-3">Login</div>
            <section className="vh-100" style={{ backgroundColor: "#eee" }}>
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-12 col-xl-11">

                            <div className="card text-black" style={{ borderRadius: "25px" }}>
                                <div className="card-body p-md-5">

                                    <div className="row justify-content-center">

                                        <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center">
                                            <img
                                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                                className="img-fluid"
                                                alt="Login Illustration"
                                            />
                                        </div>
                                        <div className="col-md-10 col-lg-6 col-xl-5">
                                            <p className="text-center h1 fw-bold mb-5 mt-4">Login</p>

                                            <form className="mx-1 mx-md-4">

                                                <div className="mb-4">
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        placeholder="Email"
                                                    />
                                                </div>

                                                <div className="mb-4">
                                                    <input
                                                        type="password"
                                                        className="form-control"
                                                        placeholder="Password"
                                                    />
                                                </div>

                                                <button
                                                    type="button"
                                                    className="btn btn-primary w-100 btn-lg"
                                                >
                                                    Login
                                                </button>

                                            </form>
                                        </div>

                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>

    );
};

export default Login;
