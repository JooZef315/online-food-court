import React from "react";
import {Link} from 'react-router-dom';

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand " to="/Home">
          Resturant
        </Link>        
        <span className="badge bg-primary position-absolute end-0">                
            <i className="fas fa-cart-plus m-1 ml-0"></i>
            {props.count}
        </span>
        <div className="navbar-collapse" id="navbarNav">          
          <ul className="navbar-nav"> 
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/Menu">
                Menu
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Cart">
                Cart
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Admin">
                Admin
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
