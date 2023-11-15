import { User } from "../types/user";

interface Props {
  usersData: User[];
}

const UsersTable: React.FC<Props> = ({ usersData }) => {
  return (
    <table className="table table-dark">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Admin</th>
        </tr>
      </thead>
      <tbody>
        {usersData?.map((user, index) => (
          <tr key={index}>
            <th scope="row">{index + 1}</th>
            <td>{user.firstName} {user.lastName}</td>
            <td>{user.email}</td>
            <td>{user.isAdmin ? "True" : "False"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UsersTable;
