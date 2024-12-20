import './css/Today.css'
import CheckroomIcon from '@mui/icons-material/Checkroom';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Popup from './Popup';
import {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { Btn } from '../styles/styledComponents';

const Today =({weatherToday})=>{
    const nav = useNavigate();
    const [open, setOpen] = useState(false)
    const openPopup=()=>{
        setOpen(true)
    }
    const closePopup=()=>{
        setOpen(false)
        
    }
    const goDetail=()=>{
        nav(`/detail/${weatherToday.name}`)
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
                            <Btn  onClick={goDetail}><MoreHorizIcon/></Btn>
                        </div>
                        {open && (
                            <Popup temp={weatherToday.main.temp} closeBtn={closePopup}/>
                        )}
                        
                    </div>
                
            )}
            
        </div>
    )
}

export default Today;