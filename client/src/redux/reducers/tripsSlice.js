import { createSlice } from "@reduxjs/toolkit";
import getTripsApi from "../apis/tripApi";

const tripSlice = createSlice({
  name: "trip",
  initialState: {
    trips: {},
    from:"",
    to:"",
    fromState:"",
    toState:"",
    SeatBooked:[],
    loading: false,
    error: null,
  },
  reducers: {
    setFrom:(state,action)=>{
           state.from = action.payload;
    },
    setTo:(state,action)=>{
      state.to = action.payload;
},
setFromState:(state,action)=>{
  state.fromState = action.payload;
  
},
setToState:(state,action)=>{
  state.toState = action.payload;
  
},
setSeatBooked:(state,action)=>{
  state.SeatBooked = action.payload;
  
},

  },
  extraReducers: (builder) => {
    builder
      .addCase(getTripsApi.pending, (state) => {
        state.loading = true;
        state.error = null; // Reset error when starting the request
      })
      .addCase(getTripsApi.fulfilled, (state, action) => {
        state.loading = false;
        state.trips = action.payload;
      })
      .addCase(getTripsApi.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; // Store the error message for display
      });
  },
});
 export const {setFrom, setTo, setFromState, setToState,setSeatBooked} = tripSlice.actions
export default tripSlice.reducer;
