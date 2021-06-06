import React from 'react';
import { useSelector } from "react-redux";
function Navbar(props) {
  const cartObj = useSelector((store) => store.cartReducer);
    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-light bg-primary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Mr.Fresh
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbar"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse navbar-right" id="navbar">
    
              <ul className="nav navbar-nav mx-auto">
                <li className="nav-item pl-5">
                  <a className="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item pl-3">
                  <a className="nav-link" href="/addItem">
                    Add Item
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="/addCart">
                    cart {cartObj.cart.length}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>


    );
}

export default Navbar;