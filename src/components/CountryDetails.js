/* eslint-disable react/prop-types */
import React from 'react';

const CountryDetails = ({ country }) => (
  <ul className="details__ul">
    <li className="details__li">
      <p>Continent</p>
      <p>{country.continent}</p>
    </li>
    <li className="details__li">
      <p>Population</p>
      <p>{country.population}</p>
    </li>
    <li className="details__li">
      <p>Cases</p>
      <p>{country.cases}</p>
    </li>
    <li className="details__li">
      <p>Critical Cases</p>
      <p>{country.critical}</p>
    </li>
    <li className="details__li">
      <p>Recovered</p>
      <p>{country.recovered}</p>
    </li>
    <li className="details__li">
      <p>Deaths</p>
      <p>{country.deaths}</p>
    </li>
  </ul>
);
export default CountryDetails;
