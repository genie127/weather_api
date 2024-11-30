import Footer from "../components/Footer";
import Header from "../components/Header";
import TodayDetail from "../components/TodayDetail";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchWeatherCity } from "../features/weather/weatherSlice";
import { Btn, Container } from "../styles/styledComponents";
import { useNavigate, useParams } from "react-router-dom";



const Detail=()=>{
    const {query} = useParams();
    const nav = useNavigate();
    const dispatch = useDispatch();
    const{ weatherCity, loading, error} = useSelector((state)=>state.weather)
    useEffect(()=>{
        if(query){
            dispatch(fetchWeatherCity(query))
        }
    },[dispatch, query])


    console.log(weatherCity)

    if(loading){
        return <p>Loading...</p>
    }
    if(error){
        return <p>error:{error}</p>
    }
    return(
        <div className="Detail">
            <Header/>
            <Container>
            <main>
                <Btn  onClick={()=>nav(-1)}>
                    <ArrowBackIcon/>
                </Btn>
                <TodayDetail weatherToday={weatherCity}/>
            </main>
            </Container>
            <Footer/>
        </div>
    )
}

export default Detail;