import React from 'react';

export default function CountryCard(props) {
  return (
    <>

      <div className="card" style={{ width: '18rem' }}>
        <img src={props.flag} alt='Flag' className='card-flag-img' />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <div className="card-text">
            <p>
              <strong>Capital:</strong> {props.capital}
            </p>

          </div>
        </div>


      </div>



    </>
  );
}
