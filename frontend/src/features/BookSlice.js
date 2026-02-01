import {  createSlice } from "@reduxjs/toolkit"

const initialState = {
    loading : 'false',
    error: '',
    books: [],
    categories: {}
}


const BookSlice = createSlice({
    name : 'books',
    initialState,
    reducers: {
        getBooks : (state,action) =>{
            state.books = action.payload
        },
        getCategories: (state,action) =>{
            state.categories = action.payload
        }
        
    }

})


export default BookSlice.reducer
export const {getBooks,getCategories} = BookSlice.actions