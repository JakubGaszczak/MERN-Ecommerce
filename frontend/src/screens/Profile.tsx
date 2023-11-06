import { Link } from "react-router-dom";
import { BiLogOutCircle } from "react-icons/bi";
import { useAppSelector } from "../hooks";

const Profile = () => {

  const { userInfo } = useAppSelector(state => state.auth)

  return (
    <div className="container my-5">
      <h1>Account</h1>
      <Link to="/">
        <button className="btn d-flex align-items-center gap-1 text-decoration-underline p-0">
          <BiLogOutCircle /> Logout
        </button>
      </Link>
      <div className="row">
        <div className="col-md-5">
          <form className="mt-5">
            <div className="mb-3">
              <label className="form-label">First Name</label>
              <input className="form-control" type="text" />
              <div className="form-text">{`current first name: ${userInfo?.firstName}`}</div>
            </div>
            <div className="mb-3">
              <label className="form-label">Last Name</label>
              <input className="form-control" type="text" />
              <div className="form-text">{`current last name: ${userInfo?.lastName}`}</div>
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input className="form-control" type="email" />
              <div className="form-text">{`current email: ${userInfo?.email}`}</div>
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input className="form-control" type="password" />
            </div>
            <button className="btn btn-dark mt-4">Save Changes</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
