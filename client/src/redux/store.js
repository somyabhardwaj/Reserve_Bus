import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import stateSlice from "./reducers/stateSlice"
import tripsSlice from "./reducers/tripsSlice";
import bookingDetailsSlice from "./reducers/bookingDetailsSlice";
const store = configureStore({
    reducer:{
        state:stateSlice,
        trip:tripsSlice,
        bookings:bookingDetailsSlice,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunk),
})
export default store;