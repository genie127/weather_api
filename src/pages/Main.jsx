import Footer from "../components/Footer";
import Header from "../components/Header";
import Today from "../components/Today";
import Forecast from "../components/Forecast";

import { useDispatch, useSelector } from "react-redux";
import {fetchWeatherToday, fetchWeather5days} from '../features/weather/weatherSlice'
import { useEffect } from "react";
import SearchForm from "../components/SearchForm";
import { Container } from "../styles/styledComponents";

const Main =()=>{
    //오늘 인천 날씨 불러오기
    const dispatch = useDispatch();
    const {weatherToday,weather5days, loading, error} = useSelector((state)=>state.weather)
    useEffect(()=>{
        dispatch(fetchWeatherToday())
        dispatch(fetchWeather5days())
    },[dispatch])

    console.log(weather5days)

    if(loading){
        return(<p>loading</p>)
    }
    if(error){
        return(<p>error:{error}</p>)
    }
    return(
        <div className="Main">
            <Header/>
            <main>
                <Container>
                    <SearchForm/>
                    <Today weatherToday={weatherToday}/>
                    <Forecast weather5days={weather5days}/>
                </Container>
            </main>
            <Footer/>
        </div>
    )
}

export default Main;