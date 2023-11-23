import { BiUserCircle } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiMenuAltRight } from "react-icons/bi";
import { useAppSelector } from "../../hooks";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const { userInfo } = useAppSelector((state) => state.auth);
  const { totalQty } = useAppSelector((state) => state.cart);

  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <header>
      <nav className="navbar bg-light navbar-expand-md fixed-top border-bottom shadow">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand h1 m-0">
            Elegance United
          </Link>
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
            <Link
              to="/"
              className="offcanvas-title text-decoration-none text-black h5"
              id="offcanvasNavbarLabel"
              data-bs-dismiss="offcanvas"
            >
              Elegance United
            </Link>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav nav-underline d-flex align-items-center pe-4">
              {isHome && (
                <li className="nav-item">
                  <a href="#" className="nav-link" data-bs-dismiss="offcanvas">
                    Home
                  </a>
                </li>
              )}
              {isHome && (
                <li className="nav-item">
                  <a
                    href="#products"
                    className="nav-link"
                    data-bs-dismiss="offcanvas"
                  >
                    Products
                  </a>
                </li>
              )}
              {isHome && (
                <li className="nav-item">
                  <a
                    href="#topRated"
                    className="nav-link"
                    data-bs-dismiss="offcanvas"
                  >
                    TopRated
                  </a>
                </li>
              )}
              {isHome && (
                <li className="nav-item">
                  <a
                    href="#contact"
                    className="nav-link"
                    data-bs-dismiss="offcanvas"
                  >
                    Contact
                  </a>
                </li>
              )}
              <li className="nav-item">
                {userInfo !== null ? (
                  userInfo.isAdmin === true ? (
                    <Link
                      className="nav-link"
                      to="/profileAdmin"
                      data-bs-dismiss="offcanvas"
                    >
                      <BiUserCircle size={25} color="black" />
                    </Link>
                  ) : (
                    <Link
                      className="nav-link"
                      to="/profile"
                      data-bs-dismiss="offcanvas"
                    >
                      <BiUserCircle size={25} color="black" />
                    </Link>
                  )
                ) : (
                  <Link
                    className="nav-link fw-bold text-dark text-decoration-none"
                    to="/login"
                    data-bs-dismiss="offcanvas"
                  >
                    SignIn
                  </Link>
                )}
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link position-relative"
                  to="/cart"
                  data-bs-dismiss="offcanvas"
                >
                  <AiOutlineShoppingCart size={25} color="black" />
                  <span className="cart-counter small">{totalQty}</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
