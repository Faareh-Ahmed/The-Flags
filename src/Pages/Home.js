import React, { useEffect, useState } from 'react';
import CountryCard from '../Components/CountryCard';
import { getAllCountries } from '../Services/index';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';


export default function Home() {
    const [region, setRegion] = useState('');
    const [countryName, setCountryName] = useState('');
    const [allCountriesList, setallCountriesList] = useState([]);
    const [filteredallCountriesList, setFilteredallCountriesList] = useState([]);

  

    const handleRegionChange = (event) => {
        setRegion(event.target.value);
    };

    const handleCountryNameChange = (event) => {
        setCountryName(event.target.value);
    };

    useEffect(() => {
        getAllCountries().then((result) => {
            const countries = result.data;
            console.log(countries);
            setallCountriesList(countries);
            setFilteredallCountriesList(countries);
        });
    }, []);

    useEffect(() => {
        console.log("Region or countryName changed", region, countryName);
        if ((region === '' && countryName==='') || region==='All') {
            setFilteredallCountriesList(allCountriesList);
        } else {
            let filteredCountries = allCountriesList;
            // State for region filter
            if(region.length){
                filteredCountries = filteredCountries.filter(country => {
                    if(country.region === region){
                        return true;
                    }else{
                        return false;
                    }
                });
                
            }
            // step for filtering name 
            if(countryName.length){
                filteredCountries = filteredCountries.filter(country => {
                    const lowercaseName=(country.name.common).toLowerCase();
                    if(lowercaseName.includes(countryName.toLowerCase())){
                        return true;
                    }else{
                        return false;
                    }
                });
            }
            setFilteredallCountriesList(filteredCountries);
        }
    }, [region, allCountriesList,countryName]);


    return (
        <>

        <div className='searchbar'>
                <div className='search-input-container'>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField 
                        id="outlined-basic" 
                        label="Search"
                        variant="outlined" 
                        onChange={handleCountryNameChange}
                        value={countryName}
                        />

                    </Box>
                </div>

                <div className='search-filter-container'>
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label"> Region</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={region}
                                label="Region"
                                onChange={handleRegionChange}
                            >
                                <MenuItem value={'All'}>All</MenuItem>
                                <MenuItem value={'Asia'}>Asia</MenuItem>
                                <MenuItem value={'Europe'}>Europe</MenuItem>
                                <MenuItem value={'Antarctic'}>Antarctic</MenuItem>
                                <MenuItem value={'Africa'}>Africa</MenuItem>
                                <MenuItem value={'Americas'}>Americas</MenuItem>
                                <MenuItem value={'Oceania'}>Oceania</MenuItem>

                            </Select>
                        </FormControl>
                    </Box>
                </div>
            </div>
            <div className='cards-container'>
                {
                    filteredallCountriesList.map(country => (

                        <Link to={`/countries/${country.cca3}`} key={country.cca3}>
                        <CountryCard name={country.name.common} capital={country.capital} area={country.area} region={country.region} population={country.population} flag={country.flags.png} key={country.cca3} />
                         </Link>
                    ))
                }

            </div>
        </>
    )
}