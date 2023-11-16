import { User } from "../types/user";
import { FaRegTrashCan } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { useDeleteUserMutation } from "../slices/userApiSlice";
import { toast } from "react-toastify";

interface Props {
  usersData: User[];
  refetch: () => any;
}

const UsersTable: React.FC<Props> = ({ usersData, refetch }) => {
  const [deleteUser] = useDeleteUserMutation();

  const deleteUserHandler = async (id: string) => {
    if (window.confirm("Are u sure?")) {
      try {
        await deleteUser(id).unwrap();
        refetch();
        toast.success("User deleted");
      } catch (error: any) {
        console.log(error);
        toast.error(error.data.message);
      }
    }
  };

  return (
    <table className="table table-dark">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Admin</th>
          <th scope="col">
            <IoMdClose />
          </th>
        </tr>
      </thead>
      <tbody>
        {usersData && usersData.length > 0 ? (
          usersData.map((user, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>
                {user.firstName} {user.lastName}
              </td>
              <td>{user.email}</td>
              <td>{user.isAdmin ? "True" : "False"}</td>
              <td>
                <button
                  onClick={() => deleteUserHandler(user._id)}
                  className="border-0 bg-dark p-0"
                >
                  <FaRegTrashCan color="white" />
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={5}>No current users</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default UsersTable;
