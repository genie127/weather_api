import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getWeatherToday } from "../../api/weatherApi";

export const fetchWeatherToday = createAsyncThunk('weather/fetchWeathers', async()=>{
    const response = await getWeatherToday();
    return response.data
})

const weatherSlice = createSlice({
    name:'weathers',
    initialState:{
        loading:false,
        error:null,
        weatherToday:[], // 오늘 날씨
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
            .addCase(fetchWeatherToday.pending,(state)=>{
                state.loading=true
                state.error=null
            })
            .addCase(fetchWeatherToday.fulfilled,(state,action)=>{
                state.loading=false
                state.weatherToday=action.payload
            })
            .addCase(fetchWeatherToday.rejected,(state,action)=>{
                state.loading=false
                state.error=action.error.message
            })
    }
})

export default weatherSlice.reducer