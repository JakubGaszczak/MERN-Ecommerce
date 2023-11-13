import { ChangeEvent, FormEvent, useState } from "react";
import { useUpdateUserProfileMutation } from "../slices/userApiSlice";
import { setCredentials } from "../slices/authSlice";
import { useAppDispatch, useAppSelector } from "../hooks";
import { toast } from "react-toastify";

const UpdateUserForm = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const dispatch = useAppDispatch();
  const { userInfo } = useAppSelector((state) => state.auth);

  const [updateProfile] = useUpdateUserProfileMutation();

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

  return (
    <form className="mt-5" onSubmit={updateUserProfile}>
      <h5 className="mb-3">Update Profile</h5>
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
  );
};

export default UpdateUserForm;
