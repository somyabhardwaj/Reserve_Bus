import { createSlice } from "@reduxjs/toolkit";

const bookingDetailsSlice = createSlice({
    name: "bookings",
    initialState: {
        seats: [],
        userName: "",
        email: "",
        lowerSeats:[],
        upperSeats:[],
        contact: null,
        gender: "",
        startTime:null,
        EndTime:null,
        price:null,
        age:null,
    },
    reducers: {
        addSeats: (state, action) => {
            state.seats = action.payload;
        },
        addUpperSeats: (state, action) => {
            state.upperSeats = action.payload;
        },
        addLowerSeats: (state, action) => {
            state.lowerSeats = action.payload;
        },
        addUserName: (state, action) => {
            state.userName = action.payload;
        },
        addEmail: (state, action) => {
            state.email = action.payload;
        },
        addContact: (state, action) => {
            state.contact = action.payload;
        },
        addGender: (state, action) => {
            state.gender = action.payload;
        },
        addStartTime: (state, action) => {
            state.startTime = action.payload;
        },
        addEndTime: (state, action) => {
            state.EndTime = action.payload;
        },
        addprice: (state, action) => {
            state.price = action.payload;
        },
        addAge: (state, action) => {
            state.age = action.payload;
        }
    }
});

export const {addStartTime,addprice,addAge, addEndTime, addUpperSeats, addLowerSeats, addSeats, addUserName, addEmail, addContact, addGender } = bookingDetailsSlice.actions;

export default bookingDetailsSlice.reducer;
