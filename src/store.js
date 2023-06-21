import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./Admin/Slices/userSlice";
import editUser from "./Admin/Slices/addUser"


const store = configureStore({
    reducer: {
        user: userSlice,
        editUser,

    },
});

export default store;