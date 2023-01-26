import axios from 'axios'
import React, { useEffect, useState } from 'react'

const CountryForm = () => {
    const [CountryName, setCountryName] = useState("colombia")



    const [country, setCountry] = useState()


    const getInfoCountry = () => {
        const URL = `https://restcountries.com/v3.1/name/${CountryName}`
        axios.get(URL)
            .then((res) => setCountry(res.data[0]))
            .catch((err) => console.log(err))
    }

    const handleSumit = (e) => {
        e.preventDefault();
        setCountryName(e.target.CountryName.value)
    }




    useEffect(() => {
        getInfoCountry()
    }, [CountryName])




    return (
        <section>

            <div>
                <article className='cardCountry'>

                    <div className='cardcountry_img'>
                        <img src={country?.flags.svg} alt="" />
                    </div>
                    <h2 className='name'>{country?.name.common}</h2>
                    <ul className='cardCountry_list'>
                        <li> <b>Capital: </b> {country?.capital[0]} </li>
                        <li> <b>Population: </b> {country?.population} </li>
                        <li> <b>Region: </b>{country?.region} </li>
                        <li> <b>Subregion: </b>{country?.subregion} </li>
                        <li> <b>Fifa: </b>{country?.fifa} </li>
                        <li> <b>Time Zone: </b>{country?.timezones[0]} </li>




                    </ul>
                </article>
            </div>
            <form onSubmit={handleSumit}>
                <div>
                    <label htmlFor=""></label>
                    <input className='form' id="CountryName" placeholder='Write Your Country Here!' type="text" />

                </div>
                <button className='botton'>search</button>
            </form>
        </section>

    )
}

export default CountryForm