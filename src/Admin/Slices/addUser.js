import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiAddUser,apiDeleteUser,apiUpdateUser } from "../API/userAPI";

//them
export const addUser = createAsyncThunk("user/add", async(values) => {
    try {
        const data = await apiAddUser(values);
        return data.content
    } catch (error) {
        throw error.response?.data?.content;
    }
})

//xóa
export const deleteUser = createAsyncThunk("user/delete", async(values) => {
    try {
        const data = await apiDeleteUser(values);
        return data.content
    } catch (error) {
        throw error.response?.data?.content;
    }
})

//update
export const updateUser = createAsyncThunk("user/update", async(values) => {
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
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        //addUser
        builder.addCase(addUser.pending, (state) => {
          return {...state, isLoading: true, error: null}
        });
        builder.addCase(addUser.fulfilled, (state, action) => {
          return {...state, isLoading: false, user: action.payload}
        });
        builder.addCase(addUser.rejected, (state, action) => {
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