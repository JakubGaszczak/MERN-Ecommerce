import UsersTable from "../../components/UsersTable"
import { useGetAllUsersQuery } from "../../slices/userApiSlice"

const UsersPanelScreen = () => {

  const { data, refetch } = useGetAllUsersQuery({})
  const regularUsers = data?.filter(user => !user.isAdmin)
  const adminUsers = data?.filter(user => user.isAdmin)

  return (
    <div className="container my-5">
      <h1 className="mb-4">Users Panel</h1>
      <div className="row">
        <div className="col-lg-6">
          <UsersTable usersData={regularUsers!} />
        </div>
        <div className="col-lg-6">
          <UsersTable usersData={adminUsers!} />
        </div>
      </div>
    </div>
  )
}

export default UsersPanelScreen