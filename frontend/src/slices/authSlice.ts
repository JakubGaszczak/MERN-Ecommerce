import { createSlice } from "@reduxjs/toolkit";
import { User } from "../types/user";
import { PayloadAction } from "@reduxjs/toolkit";

const userInfoFromLocalStorage = localStorage.getItem("userInfo");

const initialState: { userInfo: User | null } = {
  userInfo: userInfoFromLocalStorage
    ? JSON.parse(userInfoFromLocalStorage)
    : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<User | null>) => {
        state.userInfo = action.payload
        localStorage.setItem("userInfo", JSON.stringify(action.payload))
    },
    logout: (state) => {
        state.userInfo = null
        localStorage.clear()
    }
  },
});

export const { setCredentials, logout } = authSlice.actions

export default authSlice.reducer