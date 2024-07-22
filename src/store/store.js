import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice.js";
const store = configureStore({
    reducer: {
        authSlice
    }, // Your Redux reducers go here.
})

export default store; // Make the Redux store globally accessible.
