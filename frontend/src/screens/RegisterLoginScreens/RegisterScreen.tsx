import { Link, useNavigate } from "react-router-dom";
import { useRegisterUserMutation } from "../../slices/userApiSlice";
import { FormEvent, useState } from "react";
import { ChangeEvent } from "react";
import { toast } from "react-toastify";

const RegisterScreen = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigate = useNavigate();

  const [register] = useRegisterUserMutation();

  const registerUser = async (e: FormEvent) => {
    e.preventDefault();

    try {
      await register({ firstName, lastName, email, password }).unwrap();
      toast.success("Logged in successfully");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("Registration failed. Please try again.");
    }
  };

  return (
    <div className="registerScreen">
      <div className="container">
        <div className="row justify-content-center pt-4 px-3">
          <div className="col col-md-6 bg-light rounded-4 p-4">
            <h1 className="mb-5 fw-bold text-center">Sign Up</h1>
            <form onSubmit={registerUser}>
              <div className="mb-3">
                <label className="form-label">First Name</label>
                <input
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setFirstName(e.target.value)
                  }
                  type="text"
                  className="form-control"
                  id="firstName"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Last Name</label>
                <input
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setLastName(e.target.value)
                  }
                  type="text"
                  className="form-control"
                  id="lastName"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setEmail(e.target.value)
                  }
                  type="email"
                  className="form-control"
                  id="email"
                />
                <div id="emailHelpBlok" className="form-text">
                  Example email jan.kowalski@domain.com
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setPassword(e.target.value)
                  }
                  type="password"
                  className="form-control"
                  id="password"
                />
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
