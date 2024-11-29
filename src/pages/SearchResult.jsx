import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Today from "../components/Today";
import { useEffect } from "react";
import { fetchWeatherCity } from "../features/weather/weatherSlice";
import { useSearchParams } from "react-router-dom";
import SearchForm from "../components/SearchForm";
import { Container } from "../styles/styledComponents";


const SearchResult =()=>{
    const [searchParams] = useSearchParams() //query 파라미터 값 가져오기
    const query = searchParams.get('query') // 검색어
    const dispatch = useDispatch();
    const {weatherCity , loading, error} = useSelector((state)=>(
        state.weather
    ))
    useEffect(()=>{
        dispatch(fetchWeatherCity({query}))
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
                </Container>
            </main>
            <Footer/>
        </div>
    )
}

export default SearchResult;