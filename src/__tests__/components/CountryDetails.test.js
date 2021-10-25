import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import CountryDetails from '../../components/CountryDetails';

it('renders CountryDetails Component correctly', () => {
  const country = {
    continent: 'Africa',
    population: 523464,
    cases: 464574,
    critical: 32453,
    recovered: 423534,
    deaths: 2453,
  };
  const tree = renderer
    .create(
      <Router>
        <CountryDetails country={country} />
      </Router>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
