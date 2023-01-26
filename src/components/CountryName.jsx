import axios from 'axios'
import React, { useEffect, useState } from 'react'

const CountryName = ({CountryName}) => {




  const [country, setCountry] = useState()


  const getInfoCountry = () => {
    const URL = `https://restcountries.com/v3.1/name/${CountryName}`
    axios.get(URL)
      .then((res) => setCountry(res.data[0]))
      .catch((err) => console.log(err))
  }


  useEffect(() => {
    getInfoCountry()
  }, [])




  return (
    <div>
        {
      
        <article className='cardCountry'>
          
        <div className='cardcountry_img'>
          <img src={country?.flags.svg} alt="" />
        </div>
        <ul className='cardCountry_list'>
          <li> <b>Population: </b> {country?.population} </li>
          <li> <b>Capital: </b> {country?.capital[0]} </li>
          <li> <b>Region: </b>{country?.region} </li>

        </ul>
        
      </article>
     
     }

    </div>
  )
}

export default CountryName


//este componente no se esta usando pero funciona
