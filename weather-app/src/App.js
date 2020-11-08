import React, {useState,useCallback, useEffect} from 'react'
import './App.css';
import 'weather-icons/css/weather-icons.css'
import Weather from './components/Weather'

const API_key = '4939b73b7de87f845f81350795c47adc'

//api.openweathermap.org/data/2.5/weather?q={city name},{state code},{country code}&appid={API key}

const App = () => {
  const [city, setCity] =useState('')
  const [country, setCountry] = useState('')

  const getWeather = useCallback(async() => {
     const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_key}`) 
     const response = await api_call.json()
     console.log(response)
     setCity(response.name)
     setCountry(response.sys.country)
         
    },[])

    useEffect(()=>{
      getWeather()
    },[])

  return (
    <div className="App">
      <Weather city={city} country={country}/>
    </div>
  );
}

export default App;
