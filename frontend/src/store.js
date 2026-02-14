import { configureStore } from "@reduxjs/toolkit";
import userReducer from './features/UserSlice'
import bookReducer from './features/BookSlice'
import lendReducer from './features/Lends'

const store = configureStore({
    reducer: {
        user: userReducer,
        book: bookReducer,
        lend: lendReducer
    }
})

export default store