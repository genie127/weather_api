import axios from 'axios'

const BASE_URL = 'https://api.openweathermap.org/data/2.5'
const AUTH_KEY = '74bb17c9eed4e97a719b47bd3d98e0f3'
//weather?q=Incheon&appid=74bb17c9eed4e97a719b47bd3d98e0f3

const weatherApi = axios.create({
   baseURL: BASE_URL,
   headers: {
      accept: 'application/json', // response데이터를 json객체로 달라고 서버에게 요청
   },
})

//오늘 날씨 가져오기
export const getWeatherToday = async()=>{
   const response = await weatherApi.get('/weather',{
      params:{
         q:'Incheon',
         appid:AUTH_KEY,
         units:'metric',
         lang:'kr'
      }
   })
   return response;
}

//도시 검색하기
export const getWeatherCity = async(searchCity='Incheon')=>{
   const response = await weatherApi.get('/weather',{
      params:{
         q:searchCity,
         appid:AUTH_KEY,
         units:'metric',
         lang:'kr'

      }
   })
   return response
}

//5일 예보 가져오기

//forecast?q=Incheon&appid=74bb17c9eed4e97a719b47bd3d98e0f3

export const getWeather5days = async()=>{
   const response = await weatherApi.get('/forecast',{
      params:{
         q:'Incheon',
         appid:AUTH_KEY,
         units:'metric',
         lang:'kr'
      }
   }) 
   return response;
}

//5일 예보 검색

//forecast?q=Incheon&appid=74bb17c9eed4e97a719b47bd3d98e0f3

export const getWeatherCity5days = async(searchCity='Incheon')=>{
   const response = await weatherApi.get('/forecast',{
      params:{
         q:searchCity,
         appid:AUTH_KEY,
         units:'metric',
         lang:'kr'
      }
   }) 
   return response;
}
