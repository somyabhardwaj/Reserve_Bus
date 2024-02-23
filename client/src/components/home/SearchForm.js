import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import SearchBarFrom from './SearchBarFrom';
import SearchBarTo from './SearchBarTo';
import { useDispatch, useSelector } from 'react-redux';
import getTripsApi from '../../redux/apis/tripApi';

function SearchForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Use useNavigate hook here

  const from = useSelector((state) => state.trip.from);
  const to = useSelector((state) => state.trip.to);
  const [date, setDate] = useState("");

  const handleOnChange = (date) => {
    setDate(date);
  }

  const handleOnSearch = () => {
    const data = {
      from: from,
      to: to,
      date: Date.parse(date)
    };

    dispatch(getTripsApi(data))
      .then((res) => {
        const response = res.payload.data;
        if (response.length !== 0) {
          navigate("/AvailableBus"); // Use navigate function to navigate
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <div className='search-Form-Div d-flex justify-content-center align-items-center flex-column '>
        <div className='search-Form-Div2'>
          <div className="mb-3 m-2 search-Form-Divs ">
            <i className='faMagnifyingGlass'><FontAwesomeIcon icon={faMagnifyingGlass} />  </i>
            <SearchBarFrom />
          </div>
          <div className="mb-3 m-2 search-Form-Divs">
            <i className='faMagnifyingGlass'><FontAwesomeIcon icon={faMagnifyingGlass} />  </i>
            <SearchBarTo />
          </div>
          <div className="mb-3 m-2 search-Form-Divs">
            <input type="date" className="form-control search-Form-Divs-Input" id="exampleFormControlInput3" onChange={(e) => handleOnChange(e.target.value)} value={date} />
          </div>
        </div>
        <button className=" button " onClick={handleOnSearch} style={{ padding: "10px 20px", borderRadius: "10%", fontSize: "20px" }}>Search</button>
      </div>
      <div className='d-flex justify-content-center align-items-center text-center m-1'>
        <h2 className='p-2'>Worlds largest ticket booking app</h2>
      </div>
    </>
  )
}

export default SearchForm;
