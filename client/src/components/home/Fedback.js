import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
function Feedback() {
  return (
    <>
    <div className='d-flex justify-content-center align-items-center'>   
     <div className='container text-center m-5' style={{width:"60vw"}}>
      <div className='row row-cols-1 row-cols-md-3 g-4'>
        {/* Image no. 1 */}
        <div className='col public-div '>
          <div className='d-flex justify-content-around align-items-center'>
            <div className=' d-flex justify-content-center align-items-center ' style={{width:"4rem",height:"4rem", borderRadius:"100%",backgroundColor:"#E9C4C4"}} >
                <h1 style={{color:"white",fontWeight:""}}>V</h1>
            </div>
            <p className='mt-3'><span style={{fontWeight:"700"}}>Vanshika Singh</span> <br /> <span style={{color:"#777474"}}>customer since 2020</span></p>
          </div>
          <div>
            <section className='d-flex justify-content-around align-items-center ms-3' style={{borderRadius:"10px", width:"3rem", height:"1.5em", backgroundColor:"#14B214"}}>
            <FontAwesomeIcon className="ms-1 text-white d-inline-flex" style={{fontSize:"12px"}} icon={faStar}  />
            <p className="mt-3 me-2" style={{fontSize:"12px",color:"white", fontWeight:"700"}}>4.5</p>
            </section>
          </div>
          <div className='text-center'>
            <p> <span style={{color:"#777474"}}>Awesome travel experience with
reserve Excellent staff </span></p>
          </div>
        </div>

        {/* Image no. 2 */}
        <div className='col public-div '>
          <div className='d-flex justify-content-around align-items-center'>
            <div className=' d-flex justify-content-center align-items-center ' style={{width:"4rem",height:"4rem", borderRadius:"100%",backgroundColor:"#E9C4C4"}} >
                <h1 style={{color:"white",fontWeight:""}}>V</h1>
            </div>
            <p className='mt-3'><span style={{fontWeight:"700"}}>Vikram Singh</span> <br /> <span style={{color:"#777474"}}>customer since 2020</span></p>
          </div>
          <div>
            <section className='d-flex justify-content-around align-items-center ms-3' style={{borderRadius:"10px", width:"3rem", height:"1.5em", backgroundColor:"#14B214"}}>
            <FontAwesomeIcon className="ms-1 text-white d-inline-flex" style={{fontSize:"12px"}} icon={faStar}  />
            <p className="mt-3 me-2" style={{fontSize:"12px",color:"white", fontWeight:"700"}}>4.5</p>
            </section>
          </div>
          <div className='text-center'>
            <p> <span style={{color:"#777474"}}>Awesome travel experience with
reserve Excellent staff </span></p>
          </div>
        </div>

        {/* Image no. 3 */}
        <div className='col public-div '>
          <div className='d-flex justify-content-around align-items-center'>
            <div className=' d-flex justify-content-center align-items-center ' style={{width:"4rem",height:"4rem", borderRadius:"100%",backgroundColor:"#6baf6b"}} >
                <h1 style={{color:"white",fontWeight:""}}>A</h1>
            </div>
            <p className='mt-3'><span style={{fontWeight:"700"}}>Abhay Yadav</span> <br /> <span style={{color:"#777474"}}>customer since 2020</span></p>
          </div>
          <div>
            <section className='d-flex justify-content-around align-items-center ms-3' style={{borderRadius:"10px", width:"3rem", height:"1.5em", backgroundColor:"#14B214"}}>
            <FontAwesomeIcon className="ms-1 text-white d-inline-flex" style={{fontSize:"12px"}} icon={faStar}  />
            <p className="mt-3 me-2" style={{fontSize:"12px",color:"white", fontWeight:"700"}}>4.5</p>
            </section>
          </div>
          <div className='text-center'>
            <p> <span style={{color:"#777474"}}>Awesome travel experience with
reserve Excellent staff </span></p>
          </div>
        </div>
      </div>
    </div>
    </div>

</>
  );
}

export default Feedback;
