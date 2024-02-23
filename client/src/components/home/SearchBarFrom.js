import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import stateApi from '../../redux/apis/stateApi';
import {setFrom,setFromState} from "../../redux/reducers/tripsSlice";

function SearchBarFrom() {
   
    const [state, setState] = useState("");
    const dispatch = useDispatch();
    const data = useSelector((state) => state.state.data);


    useEffect(() => {
        dispatch(stateApi());
    }, [dispatch]);

    const handleOnChange = (e) => {
        const selectedDistrict = e.target.value;
           
        dispatch( setFrom(selectedDistrict))
        if (data) {
            data.forEach(element => {
                element.districts.forEach(dis => {
                    if (dis === selectedDistrict) {
                       
                        setState(element.state);
                        console.log(state)
                    }
                });
            });
        }
        const dispatchData = ()=>{
            dispatch(setFrom(selectedDistrict));
            dispatch(setFromState(state));
        }
       setTimeout(dispatchData, 500);
    };

    return (
        <>
            <input
                className="form-control me-2 search-Form-Divs-Input"
                list="datalistOptions"
                id="exampleDataList"
                placeholder="Type to search..."
                onChange={handleOnChange} // Move onChange here
            />
            <datalist id="datalistOptions">
                {data && data.map((item, index) => (
                    item.districts.map((district, index) => (
                        <option key={index} value={district} />
                    ))
                ))}
            </datalist>
        </>
    );
}

export default SearchBarFrom;
