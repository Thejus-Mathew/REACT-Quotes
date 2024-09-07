import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchQuotes = createAsyncThunk('allQuotes/fetchQuotes',async ()=>{
    const response = await axios.get("https://dummyjson.com/quotes")
    return response.data.quotes
})



const quoteSlice = createSlice({
    name:"AllQuotes",
    initialState:{
        quotes:[],
        loading:false,
        error:"No error"
    },
    extraReducers:builder=>{
        builder.addCase(fetchQuotes.pending,state=>{
            state.loading = true
        }),
        builder.addCase(fetchQuotes.fulfilled,(state,action)=>{
            state.loading = false
            state.quotes = action.payload
        }),
        builder.addCase(fetchQuotes.rejected,state=>{
            state.loading = false
            state.quotes=[]
            state.error = "Failed fetching data"
        })
    }
})

export default quoteSlice.reducer