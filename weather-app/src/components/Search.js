import React from 'react'
import './Search.css'

const Search = () => {
    return (
        <div className='container'>
           <form>
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
                            placeholder = 'Country'
                        />
                    </div>
                    <div className='col-md-3 mt-md-0 text-md-left'>
                        <button className='btn btn-warning'> Get Weather</button>
                    </div>
                </div>
           </form>
        </div>
    )
}

export default Search
