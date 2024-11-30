import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Today from "../components/Today";
import { useEffect } from "react";
import { fetchWeatherCity, fetchWeatherCity5days } from "../features/weather/weatherSlice";
import { useSearchParams } from "react-router-dom";
import SearchForm from "../components/SearchForm";
import { Container } from "../styles/styledComponents";
import Forecast from "../components/Forecast";


const SearchResult =()=>{
    const [searchParams] = useSearchParams() //query 파라미터 값 가져오기
    const query = searchParams.get('query') // 검색어
    const dispatch = useDispatch();
    const {weatherCity, weatherCity5days , loading, error} = useSelector((state)=>(
        state.weather
    ))
    useEffect(()=>{
        dispatch(fetchWeatherCity({query}))
        dispatch(fetchWeatherCity5days({query}))
    },[dispatch, query])

    if(loading){
        return <p>Loading</p>
    }
    if(error){
        return <p>Error:{error}</p>
    }
    return(
        <div className="Main">
            <Header/>
            <main>
                <Container>
                    <SearchForm/>
                    <Today weatherToday={weatherCity}/>
                    <Forecast weather5days={weatherCity5days}/>
                </Container>
            </main>
            <Footer/>
        </div>
    )
}

export default SearchResult;