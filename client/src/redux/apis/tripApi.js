import { createAsyncThunk } from "@reduxjs/toolkit";

const host = "http://localhost:5000";

const getTripsApi = createAsyncThunk('trip/fetchTrips',async (data) => {
    try {
        
        const query = new URLSearchParams(data).toString();
      const response = await fetch(`${host}/api/trip?${query}`, {
        method: "GET",
        headers: { "content-type": "application/json" }
      });
      if (!response.ok) {
        throw new Error('Failed to fetch trips');
      }
      const trips = await response.json();
    
      return trips;
    } catch (error) {
        console.log("error encountered",{error})
      throw error;
    }
  }
);

export default getTripsApi;
