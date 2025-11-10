import { Link } from "react-router-dom";

const UserForm = () => {
  return (
    <div className="d-flex justify-content-center gap-3 mt-3">
      <Link to="/signup" className="btn btn-primary btn-lg">
        Signup
      </Link>

      <Link to="/login" className="btn btn-success btn-lg">
        Login
      </Link>
    </div>
  );
};

export default UserForm;
