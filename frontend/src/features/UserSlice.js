import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUser = createAsyncThunk('user/fetchuser', async (email) =>{
    const response = await axios.get(`http://localhost:8090/api/v1/users/getuser/${email}`)
    return response.data
})

const UserSlice = createSlice({
    name: 'user',
    initialState : {user: {}, loading: false, error: null, isLoggedin: true},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload; // Data is now in Redux!
            })
            .addCase(fetchUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
})

export default UserSlice.reducer