import { useDispatch, useSelector } from "react-redux";
import {fetchWeatherToday} from '../features/weather/weatherSlice'
import { useEffect, useState } from "react";

const Today =()=>{

    // 도시 명 검색
    const [searchCity, setSearchCity] = useState();
    const changeCityname =(e)=>{
        setSearchCity(e.target.value)
    }

    //오늘 인천 날씨 불러오기
    const dispatch = useDispatch();
    const {weatherToday, loading, error} = useSelector((state)=>state.weather)
    useEffect(()=>{
        dispatch(fetchWeatherToday())
    },[dispatch])
    console.log(weatherToday)

    if(loading){
        return(<p>loading</p>)
    }
    if(error){
        return(<p>error:{error}</p>)
    }
    return(
        <div className="Today">
            <form action="">
                <input type="text" placeholder="Search City name" onChange={changeCityname} value={searchCity}/>
                <button type="submit">Search</button>
            </form>
            {weatherToday && (
                    <div key={weatherToday.weather[0].id}>
                        <h3>{weatherToday.name}의 날씨</h3>
                        <p>{weatherToday.weather[0].description}</p>
                        <p><img src={`https://openweathermap.org/img/wn/${weatherToday.weather[0].icon}@4x.png`} alt="" /></p>
                        <p>기온: {weatherToday.main.temp} &#8451;</p>
                        <p>강수량: {weatherToday.main.humidity} %</p>
                        <p>풍속: {weatherToday.wind.speed}</p>
                    </div>
                
            )}
            
        </div>
    )
}

export default Today;