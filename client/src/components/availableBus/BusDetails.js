// BusDetails.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import UpperSeats from "../../components/availableBus/seats/UpperSeats";
import LowerSeats from "../../components/availableBus/seats/LowerSeats";
import { useDispatch, useSelector } from 'react-redux';
import {addStartTime, addEndTime,addprice, addSeats} from "../../redux/reducers/bookingDetailsSlice"
import { useNavigate } from 'react-router-dom';


function BusDetails() {
    const trips = useSelector((state)=>state.trip.trips)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [flexVisibility, setFlexVisibility] = useState({});
    const [seatButton, setSeatButton] =useState("View Seats");
    const upperSeats = useSelector((state)=>state.bookings.upperSeats);
    const lowerSeats = useSelector((state)=>state.bookings.lowerSeats);


    function toggleDropDown(index) {
        const newVisibility = { ...flexVisibility }; // Create a copy of the current visibility object
        
        newVisibility[index] = !newVisibility[index]; // Toggle the visibility of the dropdown corresponding to the given index
        setFlexVisibility(newVisibility); // Update the state with the new visibility object

        seatButton === "Hide Seats"? setSeatButton("View Seats"):setSeatButton("Hide Seats")
    }

    const formatTime = (timeString) => {
        const date = new Date(timeString);
        const hours = date.getUTCHours().toString().padStart(2, '0');
        const minutes = date.getUTCMinutes().toString().padStart(2, '0');
        const day = date.getUTCDate();
        const month = date.toLocaleString('default', { month: 'short' });
        
        return `${hours}:${minutes}, ${day} ${month}`;
    };
      
    const handelProceed = (startTime, EndTime,price)=>{
          const seats = lowerSeats.concat(upperSeats)
        dispatch(addStartTime(startTime))
        dispatch(addEndTime(EndTime))
        dispatch(addprice(price))
        dispatch( addSeats(seats))
        
        navigate("/info")
       
       
    } 
       

    
    
    return (
        <div className='container mt-1 BusDetails-div'>
            { trips.data && trips.data.map((data, index) => (
                <div key={index} className='row  public-div mt-1'>
                    {/* Bus details */}
                    <div className='col-md-8'>
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
                                    <small className='text-muted' key={index}>Start Time: {formatTime(data.startTime)}</small>
                                    {/* <small className='text-muted'>07 hrs and 53 minutes</small> */}
                                    <small className='text-muted'>End Time: {formatTime(data.EndTime)}</small>
                                </div>
                                <small className='text-success '>Amenities || Bus Photos || Reviews || Booking policies || Bus Route</small>
                            </div>
                        </div>
                    </div>
                    {/* Right Side  */}
                    <div className='col-md-4 mt-4 mt-lg-0 border-start'>
                        <div className='card border-0 '>
                            <div className='card-body text-center'>
                                <h6 className='mb-0'>Trip Cost</h6>
                                <h5 className='text-success mt-2'><span className='text-muted'>INR</span> {data.busFare}</h5>
                                <button onClick={() => toggleDropDown(index)} className='btn btn-danger mt-2'>{seatButton}</button>
                            </div>
                        </div>
                    </div>
                    {/* dropdown content starts here */}

                    <div className={`${flexVisibility[index] ? 'd-flex' : 'd-none'} justify-content-around align-items-center  border-top `} >
                    {/* Upper and Lower Birth section  */}
                        
                        <section className='col  p-2'>
                       
                            <div className='border p-2'>
                                <UpperSeats bookedSeats={data.SeatBooked} />
                            </div>

                             {/* Lower birth section */}
                             <div className='border shadow mt-2 p-2'>
                                <LowerSeats bookedSeats={data.SeatBooked}  />                              
                            </div>

                        </section>

                       
                       

                        {/* Boarding & droping section  */}
                        <section className='col border rounded p-2 mb-2 mt-2 shadow text-justify'>
                            <h6 className='px-2'>Boarding & Droping</h6>
                            <div className='d-flex justify-content-between px-3 align-items-center'>
                                <p>{data.from}</p>
                                <p>{formatTime(data.startTime)}</p>
                            </div>
                            <div className='d-flex justify-content-between px-3  align-items-center'>
                                <p>{data.to}</p>
                                <p>{formatTime(data.startTime)}</p>
                            </div>
                            <div className='d-flex justify-content-between px-3  align-items-center'>
                                <p>Seat No.</p>
                                <p>{lowerSeats + " "} {upperSeats + " "}</p>
                            </div>

                            <div className='col'>
                                <h6 className='px-2'>Fare Details</h6>
                                <div className='d-flex justify-content-between px-3 align-items-center'>
                                    <p>Ammount</p>
                                    <p>INR {data.busFare}</p>
                                </div>
                            </div>
                            <div className='text-center'>
                      {/* <Link to="/info"> */}
                                <button className='btn btn-danger' onClick={() => handelProceed(data.startTime, data.EndTime, data.busFare) }>Proceed To Book</button>
                                {/* </Link>  */}
                                 </div>
                        </section>
                    </div>
                    {/* dropdown content ends here */}
                </div>
            ))}
        </div>
    );
}

export default BusDetails;


