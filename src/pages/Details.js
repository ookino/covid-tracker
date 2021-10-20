/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux';
import CountryDetails from '../components/CountryDetails';

const Details = ({ match }) => {
  const { countryName } = match.params;
  const country = useSelector(
    (state) => state.countries.filter((country) => country.country === countryName)[0],
  );

  return (
    <main className="details">
      <div className="details__header">
        <img
          src={country.countryInfo.flag}
          className="details__header-img"
          alt="country flag"
        />
        <h1 className="details__header-h1">{country.country}</h1>
      </div>
      <h5 className="section-header">Country BreakDown</h5>
      <CountryDetails country={country} />
    </main>
  );
};

export default Details;
