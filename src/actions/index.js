import axios from 'axios';

const API_KEY = '5943a154e2e87fffc9b135a8ddb2039a';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
// const ROOT_URL = 'http://api.openweathermap.org/data/2.5/forecast?appid=' + API_KEY;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;//if you want to find different country, change the country code here
    const request = axios.get(url);

    // console.log('Request', request);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}