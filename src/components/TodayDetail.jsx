import './css/Today.css'
import CheckroomIcon from '@mui/icons-material/Checkroom';
import Popup from './Popup';
import {useState} from 'react'
import { Btn } from '../styles/styledComponents';

const TodayDetail =({weatherToday})=>{
    const [open, setOpen] = useState(false)
    const openPopup=()=>{
        setOpen(true)
    }
    const closePopup=()=>{
        setOpen(false)
        
    }
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
                        <div className="btnArea">
                            <Btn  onClick={openPopup}><CheckroomIcon/></Btn>
                        </div>
                        
                        {open && (
                            <Popup temp={weatherToday.main.temp} closeBtn={closePopup}/>
                        )}

                        <ul className="detail">
                            <li>체감기온: {Math.floor(weatherToday.main.feels_like)}&deg;</li>
                            <li>습도: {weatherToday.main.humidity}%</li>
                            {weatherToday.rain?(<li>강수량: {weatherToday.rain['1h']}</li>):''}
                            <li>풍속: {weatherToday.wind.speed}m/s</li>
                        </ul>
                    </div>
                
            )}
            
        </div>
    )
}

export default TodayDetail;