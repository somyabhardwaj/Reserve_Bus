import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
const host = "http://localhost:5000";

const stateApi = createAsyncThunk("/api/state", async ()=>{

    try{
        const request = await fetch(`${host}/api/state`, {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        });
        const requestData = await request.json();
        return requestData;
            
    }
    catch (err) {
        throw err;
      }

})

export default stateApi ;