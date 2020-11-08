import React from 'react'

const minmaxTemp = (min,max) => {
    return (
        <h3>
            <span className='px-4'>{min}&deg;</span>
            <span className='px-4'>{max}&deg;</span>
        </h3>
    )
}

const Weather = ({city, country, temp_celcius,temp_min,temp_max, description, weatherIcon, main }) => {
    return (
        <div className='container'>
            <h1>Weather App</h1>
            <div className="cards pt-4">
                <h1>{city}, {country}</h1>
                <h5 className='py-4'>
                    <i className={`wi ${weatherIcon}`} display='1'/>
                </h5>
                    <h1 className='py-2'>{temp_celcius}&deg;</h1>
                {/* show max and min temp */}
                {
                    minmaxTemp(temp_min,temp_max)
                }
                <h4 className='py-3'>{description}</h4>
                <h5 className='py-3'> {main} </h5>
            </div>
        </div>
    )
}

export default Weather
