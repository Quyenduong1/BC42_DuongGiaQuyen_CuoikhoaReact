import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./Admin/Slices/userSlice";


const store = configureStore({
    reducer: {
        user: userSlice,

    },
});

export default store;