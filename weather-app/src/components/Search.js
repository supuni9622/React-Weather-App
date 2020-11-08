import React,{useEffect,useState,useCallback} from 'react'
import './Search.css'

const Search = ({loadWeather, error}) => {

    const [countryList, setCountryList] = useState([])

    const getCountryCode = useCallback(async()=> {
        const api_call = await fetch(`https://api.printful.com/countries`) 
        const response = await api_call.json()
        console.debug(response.result)
        const countryArray = response.result
        const countries = countryArray.map((country)=> (
            
                {
                    name: country.name, // United states, United kingdom
                    value: country.code // USA, UK
                  }
           
            ))

        console.debug("Countries" + countries[0].name)
        setCountryList(countries)
    },[])

    useEffect(() => {
        getCountryCode()
    },[])

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
                        {/* <input 
                            type='text' 
                            className='form-control' 
                            name='country' 
                            autoComplete='off'
                            placeholder = 'Country Code'
                        /> */}
                        {/* Country List Dropdown to select country code*/}
                        <select className="form-control input-select" id="exampleFormControlSelect1">
                        {
                            countryList.map(country => (
                                <option className="input-option" value={country.value}> {country.name} </option>
                            ))
                        }
                        </select>

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
