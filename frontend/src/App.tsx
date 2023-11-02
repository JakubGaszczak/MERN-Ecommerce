import 'bootstrap/dist/css/bootstrap.css';
import "./css/App.css";
import { Outlet } from 'react-router-dom';
import { ToastContainer } from "react-toastify"

const App: React.FC = () => {
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
