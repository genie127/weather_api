import './css/SearchForm.css';
import { useCallback, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Navigate, useNavigate } from 'react-router-dom';

// 도시 명 검색


const SearchForm =()=>{
    const nav = useNavigate();

    const [searchCity, setSearchCity] = useState();
    const changeCityname =useCallback((e)=>{
        setSearchCity(e.target.value)
    })
    const search=useCallback((e)=>{
        e.preventDefault()
        if(searchCity ==null){
            alert('검색어를 입력하세요')
        }else if(searchCity.trim()){
            nav(`/search?query=${searchCity}`)
        }

    })
    return(
        <form action="get" className="searchForm" onSubmit={search}>
            <input type="text"  placeholder="Search City name" onChange={changeCityname} value={searchCity}/>
            <button><SearchIcon sx={{fontSize:'32px'}}/></button>
        </form>

    )
}

export default SearchForm