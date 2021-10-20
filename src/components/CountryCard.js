/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom';

const CountryCard = ({ country }) => (
  <li className="card-country__li">
    <NavLink to={`details/${country.country}`} className="card-country__a">
      <img
        src={country.countryInfo.flag}
        alt="country-flag"
        className="card-country__img"
      />
      <h1 className="card-country__h1">{country.country}</h1>
      <p className="card-country__p">{`${country.cases} cases`}</p>
    </NavLink>
  </li>
);

export default CountryCard;
