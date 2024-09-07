import { configureStore } from "@reduxjs/toolkit";
import quoteSlice from './slice.js'


const quotes = configureStore({
    reducer:{
        quoteSlice
    }
})

export default quotes