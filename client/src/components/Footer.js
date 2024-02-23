import React from 'react';

function Footer() {
  return (
    <footer className='d-flex flex-wrap justify-content-around mt-5'>
      {/* Part 1 */}
      <div className="col-md-4 mt-1">
        <label className=''>Reserve</label>
        <p className='footer-li'>When you have a choice: choose Reserve</p>
        <p className='footer-li'>Reserve offers bus ticket bookings<br/> through its website, IOS, and android<br /> mobile apps for all major cities.</p>
        <p className='footer-li'>Reserve.bus@reserve.com</p>
      </div>

      {/* Part 2 */}
      <div className='d-flex justify-content-around mt-3 col-md-4'>
        <section>
          <ul>
            <li style={{fontWeight:"700"}}>About</li>
            <li className='footer-li'>About Us</li>
            <li className='footer-li'>Contact Us</li>
          
          </ul>
        </section>

        <section>
          <ul>
            <li style={{fontWeight:"700"}}>Useful Links</li>
            <li className='footer-li'>Career</li>
            <li className='footer-li'>FAQ</li>
            <li className='footer-li'>T & Q</li>
            <li className='footer-li'>Privacy Policy</li>
            <li className='footer-li'>Blog</li>
            
          </ul>
        </section>

        <section>
          <ul>
            <li style={{fontWeight:"700"}}>Follow</li>
            {/* Add your follow links here */}
          </ul>
        </section>
      </div>
      <hr className='my-4 w-100'  /> 
      <div className='text-center' style={{backgroundColor:"#E0E0E0",margin:"0"}}>
        <p className='footer-li'>All rights reserved - 2024</p>
      </div>
    </footer>
  );
}

export default Footer;
