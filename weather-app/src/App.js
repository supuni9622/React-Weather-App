import React, {useState,useCallback, useEffect} from 'react'
import './App.css';
import 'weather-icons/css/weather-icons.css'

import Weather from './components/Weather'
import Search from './components/Search'

const API_key = '4939b73b7de87f845f81350795c47adc'

// TO DO: Wind degree and speed --> interactive way
// TO DO : Humidity and presure

const App = () => {
  const [city, setCity] =useState('')
  const [country, setCountry] = useState('')
  const [icon, setIcon] = useState(undefined)
  const [main, setMain] = useState(undefined)
  const [celsius, setCelsius] = useState(undefined)
  const [temp_max, setTemp_max] = useState(undefined)
  const [temp_min, setTemp_min] = useState(undefined)
  const [description, setDescription] = useState("")
  const [error, setError] = useState(false)

  // To convert Kelvin from api to celcius
  const calCelsius = (temp) => {
    let cell = Math.floor(temp - 273.15)
    return cell
  }

  // To set the icon 
  let weatherIcon = {
    Thunderstorm : 'wi-thunderstorm',
    Drizzle : 'wi-sleet',
    Rain : 'wi-storm-showers',
    Snow : 'wi-snow',
    Atmosphere : 'wi-fog',
    Clear : 'wi-day-sunny',
    Clouds : 'wi-day-fog'
  }

  const getWeatherIcon = (icons, rangeID) => {
    switch(true) {
      case rangeID >= 200 && rangeID <= 232 : 
        setIcon(weatherIcon.Thunderstorm)
        break;
      case rangeID >= 300 && rangeID <= 321 : 
        setIcon(weatherIcon.Drizzle)
        break;
      case rangeID >= 500 && rangeID <= 531 : 
        setIcon(weatherIcon.Rain)
        break;
      case rangeID >= 600 && rangeID <= 622 : 
        setIcon(weatherIcon.Snow)
        break;
      case rangeID >= 700 && rangeID <= 781 : 
        setIcon(weatherIcon.Atmosphere)
        break;
      case rangeID = 800 : 
        setIcon(weatherIcon.Clear)
        break;
      case rangeID >= 801 && rangeID <= 804 : 
        setIcon(weatherIcon.Clouds)
        break;
        default : 
        setIcon(weatherIcon.Clouds)
    }
  }

  const getWeather = useCallback(async(e) => {
    e.preventDefault()

    // Set input values using name property
    const city = e.target.elements.city.value
    const country = e.target.elements.country.value

    if(city && country){

      const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_key}`) 
      const response = await api_call.json()
      console.log(response)
      setCity(response.name)
      setCountry(response.sys.country)
      setCelsius(calCelsius(response.main.temp))
      setTemp_min(calCelsius(response.main.temp_min))
      setTemp_max(calCelsius(response.main.temp_max))
      setDescription(response.weather[0].description) 
      setMain(response.weather[0].main)

      getWeatherIcon(weatherIcon,response.weather[0].id)

    }else {
      setError(true)
    }
     
    },[])

  return (
    <div className="App">
      <Search loadWeather={getWeather} error={error}/>
      <Weather 
        city={city} 
        country={country} 
        temp_celcius={celsius} 
        temp_min={temp_min} 
        temp_max={temp_max} 
        description={description}
        main = {main}
        weatherIcon = {icon}
      />
    </div>
  );
}

export default App;
