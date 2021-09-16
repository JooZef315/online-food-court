import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const onLogout = () => {
    sessionStorage.removeItem("logged");
    location.replace("/Home");
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand " to="/Home">
          Home
        </Link>
        <span className="badge bg-primary position-absolute end-0">
          <i className="fas fa-cart-plus m-1 ml-0"></i>
          {props.count}
        </span>

        <div className="navbar-collapse ps-2 row justify-content-between">
          <ul className="navbar-nav col-9 col-sm-6">
            <li className="nav-item">
              <Link className="nav-link" to="/Menu">
                Menu
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Cart">
                Cart
              </Link>
            </li>
            {props.islogged && (
              <li className="nav-item">
                <Link className="nav-link" to="/Admin">
                  Admin
                </Link>
              </li>
            )}
          </ul>
          {props.islogged && (
            <Link
              className="btn btn-sm text-light bg-danger col-6 col-sm-2 col-lg-1 m-auto me-sm-5"
              to="/Home"
              onClick={onLogout}
            >
              Sign out!
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
