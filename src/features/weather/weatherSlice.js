import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getWeatherToday, getWeather5days, getWeatherCity, getWeatherCity5days } from "../../api/weatherApi";


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

//도시 검색
export const fetchWeatherCity = createAsyncThunk('weather/fetchWeatherCity', async({query})=>{
    const response = await getWeatherCity(query);
    return response.data
})
//도시 검색 5일
export const fetchWeatherCity5days = createAsyncThunk('weather/fetchWeatherCity5days', async({query})=>{
    const response = await getWeatherCity5days(query);
    return response.data
})

const weatherSlice = createSlice({
    name:'weathers',
    initialState:{
        loading:false,
        error:null,
        weatherToday:null, // 오늘 날씨 객체기때문에 null값
        weather5days:null,
        weatherCity:null,
        weatherCity5days:null,
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
            .addCase(fetchWeatherCity.pending,(state)=>{
                state.loading=true
                state.error=null
            })
            .addCase(fetchWeatherCity.fulfilled,(state,action)=>{
                state.loading=false
                state.weatherCity=action.payload
            })
            .addCase(fetchWeatherCity.rejected,(state,action)=>{
                state.loading=false
                state.error=action.error.message
            })
            .addCase(fetchWeatherCity5days.pending,(state)=>{
                state.loading=true
                state.error=null
            })
            .addCase(fetchWeatherCity5days.fulfilled,(state,action)=>{
                state.loading=false
                state.weatherCity5days=action.payload
            })
            .addCase(fetchWeatherCity5days.rejected,(state,action)=>{
                state.loading=false
                state.error=action.error.message
            })
    }
})

export default weatherSlice.reducer