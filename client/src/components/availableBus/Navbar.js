import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary " style={{ zIndex: "1",position:"fixed",width:"100vw"}}>
        <div className="container-fluid ms-5">
        <Link to="/">          <label className="navbar-brand ms-5" href="#" style={{ color: "#FA8B68", fontSize: "30px" }}>
            Reserve
          </label>
          </Link>

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
            <div className='d-flex justify-content-around align-items-center'>
            <div className=' d-flex justify-content-center align-items-center ' style={{width:"2.5rem",height:"2.5rem", borderRadius:"100%",backgroundColor:"#E0E0E0"}} >
                
            </div>
            <p className='mt-3 mx-2 me-5'><span style={{fontWeight:"700"}}>My Profile</span> <br /> </p>
          </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
