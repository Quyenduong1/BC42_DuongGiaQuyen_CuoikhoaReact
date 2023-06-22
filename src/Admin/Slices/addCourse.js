import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiAddCourse, apiDeleteCourse, apiUpdateCourse } from "../API/CourseAPI";

//them
export const addCourse = createAsyncThunk("course/add", async(values) => {
    try {
        const data = await apiAddCourse(values);
        console.log(data);
        return data.content
        
    } catch (error) {
        throw error.response?.data?.content;
    }
})

//xóa
export const deleteCourse = createAsyncThunk("course/delete", async(values) => {
    try {
        const data = await apiDeleteCourse(values);
        return data.content
    } catch (error) {
        throw error.response?.data?.content;
    }
})

//update
export const updateCourse = createAsyncThunk("course/update", async(values) => {
    try {
        const data = await apiUpdateCourse(values);
        return data.content
    } catch (error) {
        throw error.response?.data?.content;
    }
})
const initialState = {
    course: null,
    isLoading: false,
    error: null,
};

const editCourse = createSlice({
    name: "course",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        //addCourse
        builder.addCase(addCourse.pending, (state) => {
          return {...state, isLoading: true, error: null}
        });
        builder.addCase(addCourse.fulfilled, (state, action) => {
          return {...state, isLoading: false, user: action.payload}
        });
        builder.addCase(addCourse.rejected, (state, action) => {
          return {...state, isLoading: false, error: action.error.message};
        });

        // deleteCourse
        builder.addCase(deleteCourse.pending, (state) => {
            return {...state, isLoading: true, error: null}
          });
          builder.addCase(deleteCourse.fulfilled, (state, action) => {
            return {...state, isLoading: false, user: action.payload}
          });
          builder.addCase(deleteCourse.rejected, (state, action) => {
            return {...state, isLoading: false, error: action.error.message};
          });

          // updateCourse
          builder.addCase(updateCourse.pending, (state) => {
            return {...state, isLoading: true, error: null}
          });
          builder.addCase(updateCourse.fulfilled, (state, action) => {
            return {...state, isLoading: false, user: action.payload}
          });
          builder.addCase(updateCourse.rejected, (state, action) => {
            return {...state, isLoading: false, error: action.error.message};
          });
      }
})

export default editCourse.reducer;