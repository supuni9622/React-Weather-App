import React from 'react'

const Weather = () => {
    return (
        <div className='container'>
            <h1>Weather App</h1>
            <div className="cards">
                <h1>London</h1>
                <h5 className='py-4'>
                    <i className='wi wi-day-sunny' display='1'/>
                </h5>
                <h1 className='py-2'>25&deg;</h1>
            </div>
        </div>
    )
}

export default Weather
