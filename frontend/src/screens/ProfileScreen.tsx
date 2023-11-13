import { Link, useNavigate } from "react-router-dom";
import { BiLogOutCircle } from "react-icons/bi";
import { useAppDispatch } from "../hooks";
import { useLogoutUserMutation } from "../slices/userApiSlice";
import { toast } from "react-toastify";
import { logout } from "../slices/authSlice";
import ScrollToTop from "../components/ScrollToTop";
import UpdateUserForm from "../components/UpdateUserForm";

const ProfileScreen = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [logoutUser] = useLogoutUserMutation();

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
          className="btn d-flex-inline align-items-center gap-1 text-decoration-underline p-0"
        >
          <BiLogOutCircle /> Logout
        </button>
      </Link>
      <div className="row">
        <div className="col-md-5">
          <UpdateUserForm />
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
