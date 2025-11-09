
const UserForm = () => {
  return (
    <section
      className="vh-100"
      style={{ backgroundColor: "#eee" }}
    >
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: "25px" }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center flex-column">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                      className="img-fluid mb-4"
                      alt="Signup illustration"
                    />

                    <div className="d-flex gap-3">
                      <a href="/" className="btn btn-primary btn-lg">
                        Sign Up
                      </a>
                      <a href="/login" className="btn btn-success btn-lg">
                        Login
                      </a>
                    </div>
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

export default UserForm;
