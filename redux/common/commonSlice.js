// redux/common/commonSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Initial state
const initialState = {
  submitted: false,
  error: false,
  errors: [],
  loading: false,
};

// Async thunk action for submitting data
export const submitData = createAsyncThunk(
  "common/submitData",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios({
        method: "post",
        url: "https://vmwhoami-portfolio-mern.herokuapp.com/api/v1/ibworkout",
        data: data,
      });

      if (response.data.status === "success") {
        return response.data;
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// Create the slice
const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    // Synchronous reducers
    changeSubmitted: (state) => {
      state.submitted = true;
      state.error = false;
      state.errors = [];
    },
    resetForm: (state) => {
      state.submitted = false;
      state.error = false;
      state.errors = [];
    },
  },
  extraReducers: (builder) => {
    // Handle async action states
    builder
      .addCase(submitData.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(submitData.fulfilled, (state) => {
        state.loading = false;
        state.submitted = true;
        state.error = false;
        state.errors = [];
      })
      .addCase(submitData.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.errors = Object.values(action.payload);
      });
  },
});

// Export actions
export const { changeSubmitted, resetForm } = commonSlice.actions;

// Export reducer
export default commonSlice.reducer;
