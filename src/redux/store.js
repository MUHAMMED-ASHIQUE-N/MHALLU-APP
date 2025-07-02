import { configureStore } from "@reduxjs/toolkit";
import complaintsReducer from "./complaints/FetchComplaints";
const store = configureStore({
    reducer: {
        complaints: complaintsReducer,
    },
});
export default store;
