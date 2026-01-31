import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    loading : 'false',
    error: '',
    books: [] 
}

export const getAllBooks = createAsyncThunk('book/getallbooks', async() => {
    const response = await axios.get('http://localhost:8090/api/v1/books/getallbooks')
    return response.data
})

const BookSlice = createSlice({
    name : 'books',
    initialState,

})