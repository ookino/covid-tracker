import PropTypes from 'prop-types';

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

CountryDetails.propTypes = {
  country: PropTypes.shape({
    continent: PropTypes.string.isRequired,
    population: PropTypes.string.isRequired,
    cases: PropTypes.string.isRequired,
    critical: PropTypes.string.isRequired,
    recovered: PropTypes.string.isRequired,
    deaths: PropTypes.string.isRequired,
  }).isRequired,
};
export default CountryDetails;
