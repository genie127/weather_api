import Footer from "../components/Footer";
import Header from "../components/Header";
import Today from "../components/Today";

import { useDispatch, useSelector } from "react-redux";
import {fetchWeatherToday} from '../features/weather/weatherSlice'
import { useEffect, useState } from "react";
import SearchForm from "../components/SearchForm";
import { Container } from "../styles/styledComponents";

const Main =()=>{
    

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
        <div className="Main">
            <Header/>
            <main>
                <Container>
                    <SearchForm/>
                    <Today weatherToday={weatherToday}/>
                </Container>
            </main>
            <Footer/>
        </div>
    )
}

export default Main;