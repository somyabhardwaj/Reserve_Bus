import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';


function Details() {
           const starTime = useSelector((state)=>state.bookings.startTime)
           const EndTime = useSelector((state)=>state.bookings.EndTime)
           const trips = useSelector((state)=>state.trip.trips)
   
           const formatTime = (timeString) => {
            const date = new Date(timeString);
            const hours = date.getUTCHours().toString().padStart(2, '0');
            const minutes = date.getUTCMinutes().toString().padStart(2, '0');
            const day = date.getUTCDate();
            const month = date.toLocaleString('default', { month: 'short' });
            
            return `${hours}:${minutes}, ${day} ${month}`;
        };
    
  return (
    <>
         <div className='col-md-8 border shadow rounded' style={{width:"100%"}}>
                        <div className='card border-0 '>
                            <div className='card-body'>
                                <div className='d-flex align-items-center'>
                                    <h5 className='me-3 mb-0'>Intercity Smart Bus</h5>
                                    <div>
                                        <section className='d-flex justify-content-around align-items-center ms-3 bg-success' style={{ borderRadius: "10px", width: "3rem", height: "1.5em" }}>
                                            <FontAwesomeIcon className="ms-1 text-white d-inline-flex" style={{ fontSize: "12px" }} icon={faStar} />
                                            <p className="mt-3 me-2" style={{ fontSize: "12px", color: "white", fontWeight: "700" }}>4.5</p>
                                        </section>
                                    </div>
                                </div>
                                <small className='text-muted'>Bharat Benz A/C || Seater || Sleeper (2+1)</small>
                                <div className='d-flex justify-content-between'>
                                    <h6 className='' >{trips.data[0].from}</h6>
                                  
                                    <h6 className=''>{trips.data[0].to}</h6>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <small className='text-muted' >{formatTime(starTime)}</small>
                                  
                                    <small className='text-muted'>{formatTime(EndTime)}</small>
                                </div>
                                <small className='text-success '>Amenities || Bus Photos || Reviews || Booking policies || Bus Route</small>
                            </div>
                        </div>
                    </div>
    </>
  )
}

export default Details
