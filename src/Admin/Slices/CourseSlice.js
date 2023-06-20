import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiGetListCourse ,apiInfoCourse, apiAddCourse, apiDeleteCourse, apiUpdateCourse } from "../API/CourseAPI";


const initialState = {
    course: [],
    listCourse: [],
    loading: false,
    error: null,
}

export const addCourse = createAsyncThunk("course/add",async (formData) => {
        try {
            const response = await apiAddCourse.addCourse(formData);
            return response.data.content;
        
        } catch (error) {
            throw error.response?.data?.content;
        }
    }
)

export const deleteCourse = createAsyncThunk("course/delete",async (formData) => {
        try {
            const response = await apiDeleteCourse.deleteCourse(formData);
            return response.data.content;
        
        } catch (error) {
            throw error.response?.data?.content;
        }
})


export const updateCourse = createAsyncThunk("course/update",async (formData) => {
        try {
            const response = await apiUpdateCourse.updateCourse(formData);
            return response.data.content;
        
        } catch (error) {
            throw error.response?.data?.content;
        }
})

export const getListCourse = createAsyncThunk("course/getList",async () => {
        try {
            const response = await apiGetListCourse.getListCourse();
            return response.data.content;
        
        } catch (error) {
            throw error.response?.data?.content;
        }
})

export const courseSlice = createSlice({
    name: "course",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addCourse.pending, (state) => {
                state.loading = true;
            })
            .addCase(addCourse.fulfilled, (state, action) => {
                state.loading = false;
                state.listCourse = action.payload;
            })
            .addCase(addCourse.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(deleteCourse.pending, (state) => {
                state.loading = true;
            })
            .addCase(deleteCourse.fulfilled, (state, action) => {
                state.loading = false;
                state.listCourse = action.payload;
            })
            .addCase(deleteCourse.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(updateCourse.pending, (state) => {
                state.loading = true;
            })
            .addCase(updateCourse.fulfilled, (state, action) => {
                state.loading = false;
                state.listCourse = action.payload;
            })
            .addCase(updateCourse.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(getListCourse.pending, (state) => {
                state.loading = true;
            })
            .addCase(getListCourse.fulfilled, (state, action) => {
                state.loading = false;
                state.listCourse = action.payload;
            })
            .addCase(getListCourse.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });

        }
})

export default courseSlice.reducer;