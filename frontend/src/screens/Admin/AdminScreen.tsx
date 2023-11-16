import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks";
import { BiLogOutCircle } from "react-icons/bi";
import { useLogoutUserMutation } from "../../slices/userApiSlice";
import { logout } from "../../slices/authSlice";
import { toast } from "react-toastify";
import UpdateUserForm from "../../components/UpdateUserForm";

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
    } catch (error: any) {
      console.error(error);
      toast.error(error.data.message)
    }
  };

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6">
          <h1>Dashboard</h1>
          <Link to="/">
            <button
              onClick={logoutHandler}
              className="btn d-flex-inline align-items-center gap-1 text-decoration-underline p-0"
            >
              <BiLogOutCircle /> Logout
            </button>
          </Link>
          <UpdateUserForm />
        </div>
        <div className="col-md-6">
          <div className="card mb-3">
            <div className="card-header">Products</div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">- List of current products</li>
              <li className="list-group-item">- Add product</li>
              <li className="list-group-item">- Delete product</li>
            </ul>
            <Link to="/productPanel">
              <button className="btn text-primary">Go to product panel</button>
            </Link>
          </div>
          <div className="card mb-3">
            <div className="card-header">Users</div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">- List of current users</li>
              <li className="list-group-item">- Delete user account</li>
            </ul>
            <Link to="/usersPanel">
              <button className="btn text-primary">Go to user panel</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminScreen;
