import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiAddUser,apiDeleteUser,apiUpdateUser } from "../API/userAPI";

//them
export const addUser1 = createAsyncThunk("xuLyNguoiDung/addNguoiDung", async(values) => {
    try {
        const data = await apiAddUser(values);
        console.log(data);
        return data.content
        
    } catch (error) {
        throw error.response?.data?.content;
    }
})

//xóa
export const deleteUser = createAsyncThunk("xuLyNguoiDung/delete", async(values) => {
    try {
        const data = await apiDeleteUser(values);
        return data.content
    } catch (error) {
        throw error.response?.data?.content;
    }
})

//update
export const updateUser = createAsyncThunk("xuLyNguoiDung/update", async(values) => {
    try {
        const data = await apiUpdateUser(values);
        return data.content
    } catch (error) {
        throw error.response?.data?.content;
    }
})
const initialState = {
    user: null,
    isLoading: false,
    error: null,
};

const editUser = createSlice({
    name: "xuLyNguoiDung",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        //addUser
        builder.addCase(addUser1.pending, (state) => {
          return {...state, isLoading: true, error: null}
        });
        builder.addCase(addUser1.fulfilled, (state, action) => {
          return {...state, isLoading: false, user: action.payload}
        });
        builder.addCase(addUser1.rejected, (state, action) => {
          return {...state, isLoading: false, error: action.error.message};
        });

        // deleteUser
        builder.addCase(deleteUser.pending, (state) => {
            return {...state, isLoading: true, error: null}
          });
          builder.addCase(deleteUser.fulfilled, (state, action) => {
            return {...state, isLoading: false, user: action.payload}
          });
          builder.addCase(deleteUser.rejected, (state, action) => {
            return {...state, isLoading: false, error: action.error.message};
          });

          // updateUser
          builder.addCase(updateUser.pending, (state) => {
            return {...state, isLoading: true, error: null}
          });
          builder.addCase(updateUser.fulfilled, (state, action) => {
            return {...state, isLoading: false, user: action.payload}
          });
          builder.addCase(updateUser.rejected, (state, action) => {
            return {...state, isLoading: false, error: action.error.message};
          });
      }
})

export default editUser.reducer;