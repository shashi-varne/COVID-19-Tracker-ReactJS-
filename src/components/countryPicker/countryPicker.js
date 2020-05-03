import React from 'react';
import './countryPicker.module.css';
import { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import { fetchCountries } from '../../api';

const CountryPicker = (props) => {
    const [fetchedCountries, setFetchedCountries] = useState([])

    useEffect(() => {
        const getCountries = async () => {
            setFetchedCountries(await fetchCountries())
        }
        getCountries();

    }, [setFetchedCountries])


    return (
        <div className='countryPickerContainer'>
            <FormControl className='formControl'>
                <NativeSelect defaultValue='' onChange={(e) => props.handleCountryChange(e.target.value)}>
                    <option value=''>Global</option>
                    {
                        fetchedCountries.map((country, index) => <option value={country}>{country}</option>)
                    }
                </NativeSelect>
            </FormControl>
        </div>
    )
}

export default CountryPicker;