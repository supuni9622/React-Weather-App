import React from 'react'

const minmaxTemp = (min,max) => {
    return (
        <h3>
            <span className='px-4'>{min}&deg;</span>
            <span className='px-4'>{max}&deg;</span>
        </h3>
    )
}

const Weather = ({city, country}) => {
    return (
        <div className='container'>
            <h1>Weather App</h1>
            <div className="cards">
                <h1>{city}, {country}</h1>
                <h5 className='py-4'>
                    <i className='wi wi-day-sunny' display='1'/>
                </h5>
                <h1 className='py-2'>25&deg;</h1>
                {/* show max and min temp */}
                {
                    minmaxTemp(24,19)
                }
                <h4 className='py-3'>Slow Rain</h4>
            </div>
        </div>
    )
}

export default Weather
