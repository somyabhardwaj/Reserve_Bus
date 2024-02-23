import React from 'react';
import UserForm from './UserForm';
import Fare from "./Fare";
import Details from './Details';
import Navbar from './Navbar';

function InfoHome() {
  return (
    <>
      <Navbar />
      <div className='container-fluid p-4' >
        <div className='row justify-content-center align-items-center ' style={{paddingTop:"80px"}}>
          <div className='col-lg-8 col-md-12'> {/* Details section takes 8 columns on large screens and full width on medium and smaller screens */}
            <div className='details-section'>
              <Details />
              <UserForm />
            </div>
          </div>
          <div className='col-lg-4 col-md-12'> {/* Fare section takes 4 columns on large screens and full width on medium and smaller screens */}
            <div className='fare-section'>
              <Fare />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InfoHome;
