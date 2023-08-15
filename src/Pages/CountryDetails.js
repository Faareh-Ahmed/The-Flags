import React, { useEffect, useState } from 'react';
import { getCountryDetials } from '../Services';
import { useParams } from 'react-router-dom';


export default function CountryDetails(props) {
    console.log("inside details");
    const { countryCode } = useParams();
    const [detail, setDetail] = useState({});

    useEffect(() => {
        getCountryDetials(countryCode).then(result => {
            console.log("result.data", result.data);
            setDetail(result.data);
        });
    }, [countryCode]);

    console.log("country code: ", countryCode);
    console.log("Details: ", detail);

    // Assuming we are fetching only one country's data, so detail[0] should be the correct object
    const countryData = detail[0] || {};


    const OpenMaps = (mapUrl) => {
        window.open(mapUrl, '_blank');
    };

    return (
        <>

            <div className="country-details-container">
                <div className='country-detail-wrapper'>
                    <div className='country-detail-img-container'>
                        <img src={countryData.flags?.png} alt='Country Flag' className='country-detail-img'/>
                    </div>
                    <div className='country-detail-info'>
                        <p><strong>Name:</strong> {countryData.name?.common}</p>
                        <p><strong>Region: </strong>{countryData.region}</p>
                        <p><strong>Subregion: </strong>{countryData.subregion}</p>
                        <p><strong>Area: </strong>{countryData.area}</p>
                        <p><strong>Capital: </strong>{countryData.capital}</p>

                        {countryData.currencies && Object.keys(countryData.currencies).map(currencyCode => (
                            <p key={currencyCode}>
                                <strong>Currency: </strong>
                                {countryData.currencies[currencyCode].name} ({countryData.currencies[currencyCode].symbol})
                            </p>
                        ))}


                    </div>
                </div>
                <div className='maps-container'>
                <button className='country-details-maps' onClick={() => OpenMaps(countryData.maps.googleMaps)}>Show on Google Maps</button>
                <button className='country-details-maps' onClick={() => OpenMaps(countryData.maps.openStreetMaps)}>  Show on Street Maps  </button>
                </div>
                
            </div>
        </>
    );
}
