import {  createSlice } from "@reduxjs/toolkit"

const initialState = {
    loading : 'false',
    error: '',
    lends: [],
}


const LendSlice = createSlice({
    name : 'lends',
    initialState,
    reducers: {
        getLends : (state,action) =>{
            state.lends = action.payload
        }
        
    }

})


export default LendSlice.reducer
export const {getLends} = LendSlice.actions