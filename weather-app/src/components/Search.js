import React from 'react'
import './Search.css'

const Search = ({loadWeather, error}) => {
    return (
        <div className='container'>
            <div>
                {error && Error()}
            </div>
           <form onSubmit={loadWeather}>
                <div className='row'>
                    <div className='col-md-3 offset-md-2'>
                        <input 
                            type='text' 
                            className='form-control' 
                            name='city' 
                            autoComplete='off'
                            placeholder ='City'
                        />
                    </div>
                    <div className='col-md-3'>
                        <input 
                            type='text' 
                            className='form-control' 
                            name='country' 
                            autoComplete='off'
                            placeholder = 'Country Code'
                        />
                    </div>
                    <div className='col-md-3 mt-md-0 text-md-left'>
                        <button className='btn btn-outline-light'> Get Weather</button>
                    </div>
                </div>
           </form>
        </div>
    )
}

// Error function
const Error = () => {
    return (
        <div className='alert alert-danger mx-5' role='alert'>
            Please enter city and country
        </div>
    )
}

export default Search
