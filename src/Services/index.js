import axios from 'axios'

const COUNTRY_API_ENDPOINT ='https://restcountries.com/v3.1'

export function getAllCountries() {
  return axios.get(`${COUNTRY_API_ENDPOINT}/all`)
}

export function getCountryDetials(countryCard){
  console.log("Country detail fnc");
    return axios.get(`${COUNTRY_API_ENDPOINT}/alpha/${countryCard}`)
}
