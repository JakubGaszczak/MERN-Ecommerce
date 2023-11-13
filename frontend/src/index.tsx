import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import { Provider } from "react-redux";
import { store } from "./store";
import ProductScreen from "./screens/ProductScreen";
import RegisterScreen from "./screens/RegisterLoginScreens/RegisterScreen";
import LoginScreen from "./screens/RegisterLoginScreens/LoginScreen";
import PrivateRoute from "./components/PrivateRoute";
import ProfileScreen from "./screens/ProfileScreen";
import CartScreen from "./screens/CartScreen";
import AdminScreen from "./screens/Admin/AdminScreen";
import AdminRoute from "./components/AdminRoute";
import ProductsPanelScreen from "./screens/Admin/ProductsPanelScreen";
import UsersPanelScreen from "./screens/Admin/UsersPanelScreen";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/product/:id" element={<ProductScreen />} />
      <Route path="/register" element={<RegisterScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/cart" element={<CartScreen />} />

      {/* Registered users */}
      <Route path="" element={<PrivateRoute />}>
        <Route path="/profile" element={<ProfileScreen />} />
      </Route>

      {/* Admin routes */}
      <Route element={<AdminRoute />}>
        <Route path="/profileAdmin" element={<AdminScreen />} />
        <Route path="/productPanel" element={<ProductsPanelScreen />} />
        <Route path="usersPanel" element={<UsersPanelScreen />} />
      </Route>
    </Route>
  )
);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
