import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
    let changableurl = url;
    if (country) {
        changableurl = `${url}/countries/${country} `
    }
    try {
        const { data } = await axios.get(changableurl);
        // const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(url);
        const modifiedData = {
            confirmed: data.confirmed,
            recovered: data.recovered,
            deaths: data.deaths,
            lastUpdate: data.lastUpdate
        }

        return modifiedData;
        // return { confirmed, recovered, deaths, lastUpdate }
    } catch (error) {
        console.log(error);
    }
}

export const fetchDailyData = async () => {
    try {
        const response = await axios.get(`${url}/daily`);
        const modifiedData = response.data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate
        }));
        return modifiedData;
    } catch (error) {
        console.log(error);

    }
}

export const fetchCountries = async () => {
    try {
        const response = await axios.get(`${url}/countries`);
        const { data: { countries } } = response;
        console.log(countries)
        const countriesArray = countries.map((country) => country.name)
        return countriesArray;
    } catch (error) {
        console.log(error);
    }
}