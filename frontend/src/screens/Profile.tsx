import { Link, useNavigate } from "react-router-dom";
import { BiLogOutCircle } from "react-icons/bi";
import { useAppDispatch, useAppSelector } from "../hooks";
import { ChangeEvent, FormEvent, useState } from "react";
import {
  useLogoutUserMutation,
  useUpdateUserProfileMutation,
} from "../slices/userApiSlice";
import { toast } from "react-toastify";
import { setCredentials, logout } from "../slices/authSlice";
import ScrollToTop from "../components/ScrollToTop";

const Profile = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { userInfo } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [updateProfile] = useUpdateUserProfileMutation();
  const [logoutUser] = useLogoutUserMutation();

  const updateUserProfile = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const res = await updateProfile({
        firstName,
        lastName,
        email,
        password,
      }).unwrap();
      dispatch(setCredentials({ ...res }));
      toast.success("Profiled updated");
    } catch (error) {
      console.log(error);
      toast.error("Try again later");
    }
  };

  const logoutHandler = async () => {
    try {
      await logoutUser().unwrap();
      dispatch(logout());
      navigate("/");
      toast.success("Logged out");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container my-5">
      <ScrollToTop />
      <h1>Account</h1>
      <Link to="/">
        <button
          onClick={logoutHandler}
          className="btn d-flex align-items-center gap-1 text-decoration-underline p-0"
        >
          <BiLogOutCircle /> Logout
        </button>
      </Link>
      <div className="row">
        <div className="col-md-5">
          <form className="mt-5" onSubmit={updateUserProfile}>
            <div className="mb-3">
              <label className="form-label">First Name</label>
              <input
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setFirstName(e.target.value)
                }
                className="form-control"
                type="text"
              />
              <div className="form-text">{`current first name: ${userInfo?.firstName}`}</div>
            </div>
            <div className="mb-3">
              <label className="form-label">Last Name</label>
              <input
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setLastName(e.target.value)
                }
                className="form-control"
                type="text"
              />
              <div className="form-text">{`current last name: ${userInfo?.lastName}`}</div>
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
                className="form-control"
                type="email"
              />
              <div className="form-text">{`current email: ${userInfo?.email}`}</div>
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setPassword(e.target.value)
                }
                className="form-control"
                type="password"
              />
            </div>
            <button type="submit" className="btn btn-dark mt-4">
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
