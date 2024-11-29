import './css/Today.css'
import { Container } from "../styles/styledComponents";

const Today =({weatherToday})=>{


    return(
        <div className="Today">
            {weatherToday && (

                    <div key={weatherToday.weather[0].id} className="dailyWeather">
                        <h3>{weatherToday.name}</h3>
                        <div className="temp">
                            <img src={`https://openweathermap.org/img/wn/${weatherToday.weather[0].icon}@4x.png`} alt="" />
                            <p>{Math.floor(weatherToday.main.temp)} &deg;</p>
                        </div>
                        <p className='desc'>{weatherToday.weather[0].description}</p>
                        <p className='humi'>습도: {weatherToday.main.humidity} %</p>
                    </div>
                
            )}
            
        </div>
    )
}

export default Today;