// Filters.js
import React from 'react';

function Filters() {
    return (
        <div className='filter-Div'  >
            {/* First div Filter */}
            <div className='py-2 d-flex justify-content-between align-items-center public-div'>
                <a style={{ fontWeight: "700", margin: "0 10px" }}>Filter</a>
                <a style={{ fontWeight: "700", margin: "0 10px" }}>Clear All</a>
            </div>

            {/* Second div Departure Time */}
            <div className='p-2 col mt-1 public-div'>
                <p className='ps-4' style={{ fontWeight: "700" }}>Departure Time</p>
                <div className="form-check ps-4">
                    <input className="form-check-input" type="radio" name="departureTime" id="morningSession" />
                    <label style={{color:"#777474"}} className="form-check-label" htmlFor="morningSession">
                        Morning Session
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="departureTime" id="afternoonSession" />
                    <label style={{color:"#777474"}} className="form-check-label" htmlFor="afternoonSession">
                        Afternoon Session
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="departureTime" id="eveningSession" />
                    <label style={{color:"#777474"}} className="form-check-label" htmlFor="eveningSession">
                        Evening Session
                    </label>
                </div>
            </div>

            {/* Third div Arrival Time */}
            <div className='p-2 col mt-1 public-div'>
                <p className='ps-4' style={{ fontWeight: "700" }}>Arrival Time</p>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="arrivalTime" id="morningSessionArrival" />
                    <label style={{color:"#777474"}} className="form-check-label" htmlFor="morningSessionArrival">
                        Morning Session
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="arrivalTime" id="afternoonSessionArrival" />
                    <label style={{color:"#777474"}} className="form-check-label" htmlFor="afternoonSessionArrival">
                        Afternoon Session
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="arrivalTime" id="eveningSessionArrival" />
                    <label style={{color:"#777474"}} className="form-check-label" htmlFor="eveningSessionArrival">
                        Evening Session
                    </label>
                </div>
            </div>

            {/* Fourth div Pickup Point */}
            <div className='p-2 col mt-1 public-div'>
                <p className='ps-4' style={{ fontWeight: "700" }}>Pickup Point</p>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="pickupPoint" id="mumbaiPickup" />
                    <label style={{color:"#777474"}} className="form-check-label" htmlFor="mumbaiPickup">
                        Mumbai
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="pickupPoint" id="delhiPickup" />
                    <label style={{color:"#777474"}} className="form-check-label" htmlFor="delhiPickup">
                        Delhi
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="pickupPoint" id="kanpurPickup" />
                    <label style={{color:"#777474"}} className="form-check-label" htmlFor="kanpurPickup">
                        Kanpur
                    </label>
                </div>
            </div>

            {/* Fifth div Drop point */}
            <div className='p-2 col mt-1 public-div'>
                <p className='ps-4' style={{ fontWeight: "700" }}>Drop Point</p>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="dropPoint" id="mumbaiDrop" />
                    <label style={{color:"#777474"}} className="form-check-label" htmlFor="mumbaiDrop">
                        Mumbai
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="dropPoint" id="delhiDrop" />
                    <label style={{color:"#777474"}} className="form-check-label" htmlFor="delhiDrop">
                        Delhi
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="dropPoint" id="kanpurDrop" />
                    <label style={{color:"#777474"}} className="form-check-label" htmlFor="kanpurDrop">
                        Kanpur
                    </label>
                </div>
            </div>
        </div>
    );
}

export default Filters;
