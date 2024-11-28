import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { fetchWeather5days } from "../features/weather/weatherSlice";
import { useEffect } from "react";

const Forecast =()=>{
    const dispatch = useDispatch();
    const {weather5days, loading, error} = useSelector((state)=>(state.weather))
    useEffect(()=>{
        dispatch(fetchWeather5days());
    },[dispatch])
    console.log(weather5days)
    if(loading){
        return <p>loading</p>
    }
    if(error){
        return <p>error:{error}</p>
    }
    return(
        <div className="Forecast">
            <Header/>
            {weather5days&&(
                <div className="weather">
                    
                    <p>{weather5days.city.name}</p>
                    {weather5days.list.map((weather)=>
                   ( 
                   
                   <li key={weather.dt}>
                    <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`} alt="" />
                    <p>{weather.dt_txt}</p>
                    <p>{weather.weather[0].description}</p>
                   </li>)
                    )}
                </div>
            )}
                
            <Footer/>
        </div>
    )
}

export default Forecast;