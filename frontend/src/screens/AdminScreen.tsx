import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../hooks";
import { BiLogOutCircle } from "react-icons/bi";
import { useLogoutUserMutation } from "../slices/userApiSlice";
import { logout } from "../slices/authSlice";
import { toast } from "react-toastify";
import AddProduct from "../components/AddProduct";

const AdminScreen = () => {
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
      <h1>Dashboard</h1>
      <Link to="/">
        <button
          onClick={logoutHandler}
          className="btn d-flex align-items-center gap-1 text-decoration-underline p-0"
        >
          <BiLogOutCircle /> Logout
        </button>
      </Link>
      <div className="row my-4">
        <div className="col">
          <AddProduct />
        </div>
      </div>
    </div>
  );
};

export default AdminScreen;
