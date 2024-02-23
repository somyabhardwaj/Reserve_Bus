import React from 'react';
import Details from '../infoPage/Details';
import Receipt from "./Receipt";
import Navbar from './Navbar';


function RHome() {
  return (
    <>
      <Navbar />
    <div className=' d-flex justify-content-center' style={{paddingTop:"80px"}}>
    <div className='border shadow rounded col-md-6'>   
    <div className=''>

       <Receipt />
    </div>
       <div className='mt-2 p-2 '>

       {/* <Details /> */}
       </div>
    </div>
    </div>
 
    </> 
  )
}

export default RHome
