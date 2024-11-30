import './css/Forecast.css'
import { Container } from "../styles/styledComponents";
// import Swiper JS
import { Swiper, SwiperSlide } from 'swiper/react';

import { Scrollbar } from 'swiper/modules';
// import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';

import Card from '@mui/material/Card';

const Forecast =({weather5days})=>{
   
    return(
        <div className="Forecast">
            <Container>
                {weather5days&&(
                    <div className="weather">
                         <Swiper
                            slidesPerView={2.5}
                            spaceBetween={10}
                            pagination={{
                            clickable: true,
                            }}
                            breakpoints={{
                                576: {
                                    slidesPerView:4.5,
                                    spaceBetween:20,
                                }
                            }}
                            modules={[Scrollbar]}
                            scrollbar={{ draggable: true }}
                            className="weatherSlider"
                            style={{padding:'60px 0'}}
                        >
                            {weather5days.list.map((weather)=>( 
                            
                            <SwiperSlide key={weather.dt} className="swiper-slide">
                                <Card sx={{textAlign:'center', padding:'30px 10px' }}>
                                    <p className="date">{weather.dt_txt}</p>
                                    <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`} alt="" />
                                    <p className="desc">{weather.weather[0].description}</p>
                                    <p className="temp">{Math.floor(weather.main.temp_min)}&deg; / {Math.floor(weather.main.temp_max)}&deg;</p>
                                </Card>
                            </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                )}
            </Container>    
        </div>
    )
}

export default Forecast;