import 'bootstrap/dist/css/bootstrap.css';
import "./css/App.css";
import { Outlet } from 'react-router-dom';
import { ToastContainer } from "react-toastify"
import Header from "./components/Header/Header"

const App: React.FC = () => {
  return (
    <>
      <ToastContainer />
      <Header />
      <main className='py-3'>
        <div className='container'>
          <Outlet />
        </div>
      </main>
    </>
  );
}

export default App;
