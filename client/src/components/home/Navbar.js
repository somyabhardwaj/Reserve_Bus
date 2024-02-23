import React from 'react';

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary " style={{ zIndex: "1",position:"fixed",width:"100vw"}}>
        <div className="container-fluid ms-5">
          <label className="navbar-brand ms-5" href="#" style={{ color: "#FA8B68", fontSize: "30px" }}>
            Reserve
          </label>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent" >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Tickets
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
            <div className="d-flex me-5"style ={{fontWeight:"700",display:"flex",alignItems:"center"}}>
              <button className="mx-2 button">Login</button>
              <a className="nav-link me-5" href="#" >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
