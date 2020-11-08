import React from 'react'

const minmaxTemp = (min,max) => {
        if(min && max){
            return <h3>
                <span className='px-4'>Min - {min}&deg;</span>
                <span className='px-4'> Max - {max}&deg;</span>
            </h3>    
        }
}

const Weather = ({city, temp_celcius,temp_min,temp_max, description, weatherIcon, main }) => {
    return (
        <>
            {city && <div className="content p-4">
                <h1>{city}</h1>
                <h5 className='py-4'>
                    <i style={{fontSize:'4rem'}}className={`wi ${weatherIcon}`} display='1'/>
                </h5>
                
                {temp_celcius && <h1 className='py-2'>{temp_celcius}&deg;</h1>}
                
                {/* show max and min temp */}
                {
                    minmaxTemp(temp_min,temp_max)
                }
                <h4 className='py-3'>Weather Condition : {description}</h4>
                <h5 className='py-3'> {main} </h5>
            </div>}
        </>
    )
}

export default Weather
