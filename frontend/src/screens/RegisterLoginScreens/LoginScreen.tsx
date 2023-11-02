import { Link } from "react-router-dom"

const LoginScreen = () => {
  return (
    <div className="loginScreen">
      <div className="container">
        <div className="row justify-content-center pt-4 px-3">
          <div className="col col-md-6 bg-light rounded-4 p-4">
            <h1 className="mb-5 fw-bold text-center">Sign In</h1>
            <form>
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
                Login
              </button>
            </form>
            <p className="mt-5">
              No account?{" "}
              <Link to="/register">
                <span className="text-dark fw-bold text-decoration-underline">
                  Create one!
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
