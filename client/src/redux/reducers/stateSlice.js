import { createSlice } from "@reduxjs/toolkit";
import stateApi from "../apis/stateApi";



const stateSlice = createSlice({
    name:"state",
    initialState: {
        status:"idel",
        data:"",
        from:"",
        to:"",
        date :"",

    },
    reducer:{
      setFrom:(state,action)=>{
           state.from = action.payload
      },
      setTo:(state,action) =>{
        state.to = action.payload
      },
      setDate:(state,action)=>{
        state.date = action.payload
      }
    },
    
    extraReducers: (builder) => {

        builder.addCase(stateApi .pending, (state, action) => {
          state.status = 'loading';
        })
          .addCase(stateApi.fulfilled, (state, action) => {
           
            state.data = action.payload;
            // console.log("state Slice",state.data)
            state.status = 'fulfilled';
          })
          .addCase(stateApi.rejected, (state, action) => {
            state.status = 'rejected';
          })
    
      },
    });

    export default stateSlice.reducer