import { Link } from "react-router-dom";

const RegisterScreen = () => {
  return (
    <div className="registerScreen">
      <div className="container">
        <div className="row justify-content-center pt-4 px-3">
          <div className="col col-md-6 bg-light rounded-4 p-4">
            <h1 className="mb-5 fw-bold text-center">Sign Up</h1>
            <form>
              <div className="mb-3">
                <label className="form-label">First Name</label>
                <input type="text" className="form-control" id="firstName" />
              </div>
              <div className="mb-3">
                <label className="form-label">Last Name</label>
                <input type="text" className="form-control" id="lastName" />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" id="email" />
                <div id="emailHelpBlok" className="form-text">
                  Example email jan.kowalski@domain.com
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password" className="form-control" id="password" />
                <div id="passwordHelpBlok" className="form-text">
                  Your password must be 6-20 characters
                </div>
              </div>
              <button type="submit" className="btn btn-secondary w-100 mt-5">
                Register
              </button>
            </form>
            <p className="mt-5">
              Already have an account?{" "}
              <Link to="/login">
                <span className="text-dark fw-bold text-decoration-underline">
                  Sign In here!
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterScreen;
