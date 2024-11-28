import { useDispatch, useSelector } from "react-redux";
import {fetchWeatherToday} from '../features/weather/weatherSlice'
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getWeatherToday } from "../api/weatherApi";

const Today =()=>{
    const {id} = useParams();
    const dispatch = useDispatch();
    const {weatherToday, loading, error} = useSelector((state)=>state.weather)
    useEffect(()=>{
        dispatch(fetchWeatherToday())
        console.log(weatherToday)
    },[dispatch])
    if(loading){
        return(<p>loading</p>)
    }
    if(error){
        return(<p>error:{error.mesaage}</p>)
    }
    return(
        <div className="Today">
            {weatherToday && (
                    <div key={weatherToday.weather[0].id}>
                        <p>날씨: {weatherToday.weather[0].description}</p>
                        <p><img src={`https://openweathermap.org/img/wn/${weatherToday.weather[0].icon}@4x.png`} alt="" /></p>
                        <p>기온: {weatherToday.main.temp}</p>
                    </div>
                
            )}
            
        </div>
    )
}

export default Today;