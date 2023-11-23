import UsersTable from "../../components/UsersTable"
import { useGetAllUsersQuery } from "../../slices/userApiSlice"

const UsersPanelScreen = () => {

  const { data, refetch } = useGetAllUsersQuery({})
  const regularUsers = data?.filter(user => !user.isAdmin)
  const adminUsers = data?.filter(user => user.isAdmin)

  return (
    <div className="container mt-6 mb-5">
      <h1 className="mb-4">Users Panel</h1>
      <div className="row">
        <div className="col-lg-6 p-0 pe-md-2">
          <UsersTable refetch={refetch} usersData={regularUsers!} />
        </div>
        <div className="col-lg-6 p-0 pe-md-2">
          <UsersTable refetch={refetch} usersData={adminUsers!} />
        </div>
      </div>
    </div>
  )
}

export default UsersPanelScreen