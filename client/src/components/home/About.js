import React from 'react';
import Bus from "../../images/bus.png";
import Public from "../../images/public.png";

function About() {
  return (
    <>
    <div className='d-flex justify-content-center align-items-center'>   
     <div className='container text-center m-5' style={{width:"60vw"}}>
      <div className='row row-cols-1 row-cols-md-3 g-4'>
        {/* Image no. 1 */}
        <div className='col public-div '>
          <div className=''>
            <div className=' '>
              <img src={Bus} alt='Bus' className='img-fluid custom-image' />
            </div>
          </div>
          <div className='text-center'>
            <p><span style={{fontWeight:"700"}}>2000+</span> <br /> <span style={{color:"#777474"}}>bus collection</span></p>
          </div>
        </div>

        {/* Image no. 2 */}
        <div className='col public-div'>
          <div>
            <img src={Public} alt='Public' className='img-fluid custom-image' />
          </div>
          <div>
          <p><span style={{fontWeight:"700"}}>20 million</span> <br /> <span style={{color:"#777474"}}>happy customers globally</span></p>
          </div>
        </div>

        {/* Image no. 3 */}
        <div className='col public-div '>
          <div>
            <img src={Public} alt='Public' className='img-fluid custom-image' />
          </div>
          <div>
          <p><span style={{fontWeight:"700"}}>5000+</span> <br /> <span style={{color:"#777474"}}>tickets everyday</span></p>
          </div>
        </div>
      </div>
    </div>
    </div>
    <div className='d-flex justify-content-center align-items-center text-center m-1 '>
            <h2 className='p-2'>Here’s what a few  of our  customers
                have to say about us</h2>
        </div>
</>
  );
}

export default About;
