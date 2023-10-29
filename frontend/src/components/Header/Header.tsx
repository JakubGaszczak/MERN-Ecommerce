import { BiUserCircle } from "react-icons/bi"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { BiMenuAltRight } from "react-icons/bi"
 
const Header = () => {
  return (
    <header>
      <nav className="navbar bg-light navbar-expand-md fixed-top border-bottom shadow">
        <div className="container-fluid">
          <a className="navbar-brand h1 mb-0" href="#">
            MERN Ecom
          </a>
          <button
            className="btn navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <BiMenuAltRight />
          </button>
        </div>
        <div
          className="offcanvas offcanvas-end"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              MERN Ecom
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav nav-underline d-flex align-items-center pe-4">
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#products" className="nav-link">
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a href="#about" className="nav-link">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="#contact" className="nav-link">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link icon"><BiUserCircle /></a>
              </li>
              <li className="nav-item">
                <a className="nav-link icon"><AiOutlineShoppingCart /></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;