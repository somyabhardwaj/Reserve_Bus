import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import stateApi from '../../redux/apis/stateApi';
import {setTo,setToState} from "../../redux/reducers/tripsSlice"
function SearchBarTo() {
    const [district, setDistrict] = useState("");
    const [state, setState] = useState("");
    const dispatch = useDispatch();
    const data = useSelector((state) => state.state.data);
   
    useEffect(() => {
        dispatch(stateApi());
    }, [dispatch]);

    const handleOnChange = (e) => {
        const selectedDistrict = e.target.value;
        setDistrict(selectedDistrict);
        
       
        
        if (data) {
            data.forEach(element => {
                element.districts.forEach(dis => {
                    if (dis === selectedDistrict) {
                      
                        setState(element.state);
                    }
                });
            });
        }
        const dispatchData = ()=>{
            dispatch(setTo(selectedDistrict));
            dispatch(setToState(state));
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

export default SearchBarTo;
