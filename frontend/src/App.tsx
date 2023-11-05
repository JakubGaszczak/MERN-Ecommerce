import 'bootstrap/dist/css/bootstrap.css';
import "./css/App.css";
import 'react-toastify/dist/ReactToastify.css'
import { Outlet } from 'react-router-dom';
import { ToastContainer } from "react-toastify"
import { useEffect } from 'react';
import { useAppDispatch } from './hooks';
import { logout } from './slices/authSlice';

const App: React.FC = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    const expirationTime = localStorage.getItem("expirationTime")
    if (expirationTime) {
      const currentTime = new Date().getTime()

      if (parseInt(expirationTime) < currentTime) {
        dispatch(logout())
      }
    }
  }, [dispatch])
  
  return (
    <>
      <ToastContainer />
      <main>
          <Outlet />
      </main>
    </>
  );
}

export default App;
