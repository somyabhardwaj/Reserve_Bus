import { createAsyncThunk } from "@reduxjs/toolkit";

const host = "http://localhost:5000";

// GET method
export const fetchBookings = createAsyncThunk("api/bookings/fetch", async () => {
    try {
        const response = await fetch(`${host}/api/bookings`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (!response.ok) {
            throw new Error("Failed to fetch bookings");
        }

        const responseData = await response.json();
        return responseData;
    } catch (error) {
        throw error;
    }
});

// POST method
export const createBooking = createAsyncThunk("api/bookings/create", async (bookingData) => {
    try {
        const response = await fetch(`${host}/api/bookings`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(bookingData)
        });

        if (!response.ok) {
            throw new Error("Failed to create booking");
        }

        const responseData = await response.json();
        return responseData;
    } catch (error) {
        throw error;
    }
});
