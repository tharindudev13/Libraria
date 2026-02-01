import { configureStore } from "@reduxjs/toolkit";
import userReducer from './features/UserSlice'
import bookReducer from './features/BookSlice'

const store = configureStore({
    reducer: {
        user: userReducer,
        book: bookReducer
    }
})

export default store