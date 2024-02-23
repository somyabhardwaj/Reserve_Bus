// BusDetailsDropDown.js
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addUpperSeats } from "../../../redux/reducers/bookingDetailsSlice";

function UpperSeats({ bookedSeats }) {
    // Initialize state for seat selection
    const [selectedSeats, setSelectedSeats] = useState([]);
    const dispatch = useDispatch();

    // Function to handle seat selection
    const toggleSeatSelection = (seatNo) => {
        const index = selectedSeats.indexOf(seatNo);
        if (index === -1) {
            // Seat is not already selected, so add it
            setSelectedSeats([...selectedSeats, seatNo]);
        } else {
            // Seat is already selected, so remove it
            const updatedSelectedSeats = selectedSeats.filter(seat => seat !== seatNo);
            setSelectedSeats(updatedSelectedSeats);
        }
    };

    // Dispatch selected seats whenever there's a change in selectedSeats
    useEffect(() => {
        const selectedSeatsWithUA = selectedSeats.map(seat => `${seat}UA`);
        dispatch(addUpperSeats(selectedSeatsWithUA));
    }, [dispatch, selectedSeats]);

    const seats = Array.from({ length: 17 }, (_, index) => index + 1);

    return (
        <div className="dropdown">
            <div className="dropdown-content d-flex">
                <div className="bus-seats d-flex flex-wrap">
                    {seats.map((seatNo, index) => (
                        <section key={seatNo} className={`${index > 8 ? 'mb-3' : ''} mx-1`}>
                            <div className={`bus-seat`} onClick={() => toggleSeatSelection(seatNo)}>
                                <div className={` checkbox ${selectedSeats.includes(seatNo) ? 'checked' : ''}`}>
                                    <div className='seat' > </div>
                                  
                                </div>
                            </div>
                        </section>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default UpperSeats;
