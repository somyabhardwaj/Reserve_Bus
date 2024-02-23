import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';

function PagingComponent() {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const trips = useSelector((state)=>state.trip.trips)

    const handlePrevDate = () => {
        const prevDate = new Date(selectedDate);
        prevDate.setDate(selectedDate.getDate() - 1);
        setSelectedDate(prevDate);
    };

    const handleNextDate = () => {
        const nextDate = new Date(selectedDate);
        nextDate.setDate(selectedDate.getDate() + 1);
        setSelectedDate(nextDate);
    };

    const formatDate = (date) => {
        const options = { weekday: 'short', day: '2-digit' };
        return date.toLocaleDateString('en-US', options);
    };

    return (
        <div className='container public-div'>
            <div className='row'>
                <div className='col-12 col-md-6 d-flex justify-content-center align-items-center mb-3 mb-md-0'>
                    <h6 style={{ fontWeight: "700" }}>{trips.data[0].from} <FontAwesomeIcon icon={faArrowRight} /> {trips.data[0].to}</h6>
                </div>

                <div className='col-12 col-md-6'>
                    <div className='row justify-content-center align-items-center'>
                        <div className='col-auto'>
                            <button type='button' className='btn btn-link' onClick={handlePrevDate}>
                                <FontAwesomeIcon icon={faArrowLeft} />
                            </button>
                        </div>
                        <div className='col-auto'>
                            <span>{formatDate(selectedDate)}</span>
                        </div>
                        <div className='col-auto'>
                            <button type='button' className='btn btn-link' onClick={handleNextDate}>
                                <FontAwesomeIcon icon={faArrowRight} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PagingComponent;
