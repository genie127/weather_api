import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Container } from "../styles/styledComponents";
import { fetchWeather5days } from "../features/weather/weatherSlice";
import { useEffect } from "react";
// import Swiper JS
import { Swiper, SwiperSlide } from 'swiper/react';

import { Scrollbar } from 'swiper/modules';
// import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';

import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

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
            <main>
            <Container>
                {weather5days&&(
                    <div className="weather">
                         <Typography component="h3" sx={{fontSize:'18px', color:'#fff', fontFamily:'S-CoreDream-5Medium', marginBottom:'20px'}}>{weather5days.city.name}</Typography>

                         <Swiper
                            slidesPerView={2.5}
                            spaceBetween={20}
                            pagination={{
                            clickable: true,
                            }}
                            modules={[Scrollbar]}
                            scrollbar={{ draggable: true }}
                            className="mySwiper"
                            style={{padding:'30px 0 60px'}}
                        >
                            {weather5days.list.map((weather)=>( 
                            
                            <SwiperSlide key={weather.dt} className="swiper-slide">
                                <Card sx={{textAlign:'center', padding:'30px 0' }}>
                                    <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`} alt="" />
                                    <Typography sx={{ fontSize:'14px', color:"#999",fontFamily:'S-CoreDream-3Light' }}>{weather.dt_txt}</Typography>
                                    <Typography sx={{color:'#333', fontSize:'24px',fontFamily:'S-CoreDream-5Medium', marginTop:'10px'}}>{weather.weather[0].description}</Typography>
                                    <Typography sx={{marginTop:'10px', color:'#666'}}>{Math.floor(weather.main.temp_min)}&deg; / {Math.floor(weather.main.temp_max)}&deg;</Typography>
                                </Card>
                            </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                )}
            </Container>    
            </main>                
            <Footer/>
        </div>
    )
}

export default Forecast;