import { apiSlice } from "./apiSlice";
import { USERS_URL } from "../constans";
import { User } from "../types/user";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    registerUser: builder.mutation<User, Partial<User>>({
      query: (data) => ({
        url: `${USERS_URL}/register`,
        method: "POST",
        body: data,
      }),
    }),
    authUser: builder.mutation<User, Partial<User>>({
      query: (data) => ({
        url: `${USERS_URL}/auth`,
        method: "POST",
        body: data,
      }),
    }),
    logoutUser: builder.mutation<void, void>({
      query: () => ({
        url: `${USERS_URL}/logout`,
        method: "POST",
      }),
    }),
    updateUserProfile: builder.mutation<User, Partial<User>>({
      query: (data) => ({
        url: `${USERS_URL}/profile`,
        method: "PUT",
        body: data
      })
    }),
    getAllUsers: builder.query<User[], {}>({
      query: () => ({
        url: USERS_URL
      })
    }),
    deleteUser: builder.mutation<{}, string>({
      query: (id) => ({
        url: `${USERS_URL}/${id}`,
        method: "DELETE",
      })
    })
  }),
});

export const {
  useDeleteUserMutation,
  useGetAllUsersQuery,
  useRegisterUserMutation,
  useAuthUserMutation,
  useLogoutUserMutation,
  useUpdateUserProfileMutation
} = userApiSlice;
