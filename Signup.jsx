
import { Link } from "react-router-dom";

const Signup = () => {
    return (
        <>
            <div className="text-center rounded bg-warning p-3">Signup</div>

            <section className="vh-100" style={{ backgroundColor: "#eee" }}>
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-12 col-xl-11">
                            <div className="card text-black" style={{ borderRadius: "25px" }}>
                                <div className="card-body p-md-5">
                                    <div className="row justify-content-center">

                                        <div className="col-md-10 col-lg-6 col-xl-5">

                                            <p className="text-center h1 fw-bold mb-5 mt-4">Sign Up</p>

                                            {/* ✅ PREVENT PAGE RELOAD */}
                                            <form
                                                className="mx-1 mx-md-4"
                                                onSubmit={(e) => e.preventDefault()}
                                            >

                                                <div className="mb-4">
                                                    <input type="text" className="form-control" placeholder="Your Name" />
                                                </div>

                                                <div className="mb-4">
                                                    <input type="email" className="form-control" placeholder="Your Email" />
                                                </div>

                                                <div className="mb-4">
                                                    <input type="password" className="form-control" placeholder="Password" />
                                                </div>

                                                <div className="mb-4">
                                                    <input type="password" className="form-control" placeholder="Repeat Password" />
                                                </div>

                                                <div className="d-flex justify-content-center mb-3">
                                                    <button type="button" className="btn btn-primary btn-lg">
                                                        Register
                                                    </button>
                                                </div>

                                                <div className="d-flex justify-content-center gap-3 mt-3">
                                                    <Link to="/login" className="btn btn-outline-primary btn-lg">
                                                        Login
                                                    </Link>

                                                    {/* ✅ DO NOT SUBMIT FORM */}
                                                    <button type="button" className="btn btn-danger btn-lg">
                                                        Signup
                                                    </button>
                                                </div>

                                            </form>
                                        </div>

                                        <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center">
                                            <img
                                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                                className="img-fluid"
                                                alt="Signup Illustration"
                                            />
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

export default Signup;