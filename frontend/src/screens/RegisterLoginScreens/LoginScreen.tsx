import { Link, useNavigate } from "react-router-dom";
import { useAuthUserMutation } from "../../slices/userApiSlice";
import { useAppDispatch } from "../../hooks";
import { FormEvent, useState } from "react";
import { ChangeEvent } from "react";
import { setCredentials } from "../../slices/authSlice";
import { toast } from "react-toastify";

const LoginScreen = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [login] = useAuthUserMutation();

  const loginUser = async (e: FormEvent) => {
    e.preventDefault()

    try {
      const res = await login({ email, password }).unwrap()
      dispatch(setCredentials({ ...res }))
      toast.success("Logged in successfully")
      navigate("/")
    } catch (error: any) {
      console.log(error)
      toast.error(error.data.message)
    }
  }

  return (
    <div className="loginScreen">
      <div className="container py-5">
        <div className="row justify-content-center pt-4 px-3">
          <div className="col col-md-6 bg-light rounded-4 p-4">
            <h1 className="mb-5 fw-bold text-center">Sign In</h1>
            <form onSubmit={loginUser}>  
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
