import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./Admin/Slices/userSlice";
import editUser from "./Admin/Slices/addUser"
import addCourse from "./Admin/Slices/addCourse";


const store = configureStore({
    reducer: {
        user: userSlice,
        edit: editUser,
        course: addCourse,

    },
});

export default store;