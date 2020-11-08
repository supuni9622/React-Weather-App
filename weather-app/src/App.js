import React, {useState,useCallback, useEffect, useMemo} from 'react'
import './App.css';
import 'weather-icons/css/weather-icons.css'

import Weather from './components/Weather'
import Search from './components/Search'

const API_key = '4939b73b7de87f845f81350795c47adc'

// TO DO: Wind degree and speed --> interactive way
// TO DO : Humidity and presure

const App = () => {
  const [city, setCity] =useState('')
  const [icon, setIcon] = useState(undefined)
  const [main, setMain] = useState(undefined)
  const [celsius, setCelsius] = useState(undefined)
  const [temp_max, setTemp_max] = useState(undefined)
  const [temp_min, setTemp_min] = useState(undefined)
  const [description, setDescription] = useState("")
  const [error, setError] = useState(false)
  const [backgroundImage, setBackgroundImage] = useState('https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__340.jpg')

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

  const getWeatherIcon = useCallback((icons,rangeID) => {
    switch(true) {
      case rangeID >= 200 && rangeID <= 232 : 
        setIcon(weatherIcon.Thunderstorm)
        setBackgroundImage('https://images.unsplash.com/photo-1597075490504-8832142f85cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')
        break;
      case rangeID >= 300 && rangeID <= 321 : 
        setIcon(weatherIcon.Drizzle)
        setBackgroundImage('https://images.unsplash.com/photo-1554039362-6daf559ddb63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')
        break;
      case rangeID >= 500 && rangeID <= 531 : 
        setIcon(weatherIcon.Rain)
        console.log('Before')
        setBackgroundImage('https://cdn.pixabay.com/photo/2016/11/29/05/55/adult-1867665__340.jpg')
        console.log('After ' + backgroundImage)
        break;
      case rangeID >= 600 && rangeID <= 622 : 
        setIcon(weatherIcon.Snow)
        setBackgroundImage('https://images.unsplash.com/photo-1483664852095-d6cc6870702d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')
        break;
      case rangeID >= 700 && rangeID <= 781 : 
        setIcon(weatherIcon.Atmosphere)
        setBackgroundImage('https://images.unsplash.com/photo-1456356627738-3a96db6e2e33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')
        break;
      case rangeID === 800 : 
        setIcon(weatherIcon.Clear)
        setBackgroundImage('https://cdn.pixabay.com/photo/2017/10/10/07/48/hills-2836301__340.jpg')
        break;
      case rangeID >= 801 && rangeID <= 804 : 
        setIcon(weatherIcon.Clouds)
        setBackgroundImage('https://cdn.pixabay.com/photo/2015/03/26/09/47/sky-690293__340.jpg')
        break;
        default : 
        setIcon(weatherIcon.Clouds)
        setBackgroundImage('https://images.unsplash.com/photo-1501504413881-5888acd06076?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')
    }
  },[backgroundImage,setIcon,setBackgroundImage])

  const getWeather = useCallback(async(e) => {
    e.preventDefault()

    // Set input values using name property
    const city = e.target.elements.city.value
    const country = e.target.elements.country.value

    if(city || (city && country)){

      const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_key}`) 
      const response = await api_call.json()
      console.debug(response)
      setCity(`${response.name},${response.sys.country}`)
      setCelsius(calCelsius(response.main.temp))
      setTemp_min(calCelsius(response.main.temp_min))
      setTemp_max(calCelsius(response.main.temp_max))
      setDescription(response.weather[0].description) 
      setMain(response.weather[0].main)

      getWeatherIcon(weatherIcon,response.weather[0].id)

    }else {
      setError(true)
    }
     
    },[setCity,setCelsius,setTemp_max,setTemp_min,setDescription,setMain,getWeatherIcon])

  return (
    <>
      <h1 style={{color: 'white', textAlign: 'center'}} className='pt-3'>Weather App</h1>
      <Search loadWeather={getWeather} error={error}/>
      
      <div style={{  
        background: `url(${backgroundImage})`,
        height: '530px',
        }}  
        className=' mt-4 pt-4 d-flex justify-content-center'
      >
        <Weather 
          city={city} 
          temp_celcius={celsius} 
          temp_min={temp_min} 
          temp_max={temp_max} 
          description={description}
          main = {main}
          weatherIcon = {icon}
        />
    </div>
   
    </>
  );
}

export default App;
