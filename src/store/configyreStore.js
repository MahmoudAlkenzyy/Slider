import { configureStore } from "@reduxjs/toolkit";
import movie from './cardSlice.js'

export default configureStore({
    reducer: {
        movie:movie
    }
})