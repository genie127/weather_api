import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getWeatherToday, getWeather5days } from "../../api/weatherApi";

//오늘 인천날씨
export const fetchWeatherToday = createAsyncThunk('weather/fetchWeatherToday', async()=>{
    const response = await getWeatherToday();
    return response.data
})

//5일 예보
export const fetchWeather5days = createAsyncThunk('weather/fetchWeather5days', async()=>{
    const response = await getWeather5days();
    return response.data
})

const weatherSlice = createSlice({
    name:'weathers',
    initialState:{
        loading:false,
        error:null,
        weatherToday:null, // 오늘 날씨 객체기때문에 null값
        weather5days:null,
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
            .addCase(fetchWeather5days.pending,(state)=>{
                state.loading=true
                state.error=null
            })
            .addCase(fetchWeather5days.fulfilled,(state,action)=>{
                state.loading=false
                state.weather5days=action.payload
            })
            .addCase(fetchWeather5days.rejected,(state,action)=>{
                state.loading=false
                state.error=action.error.message
            })
    }
})

export default weatherSlice.reducer