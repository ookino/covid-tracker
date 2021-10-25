import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import CountryCard from '../../components/CountryCard';

it('renders CountryCard Component correctly', () => {
  const country = {
    country: 'Nigeria',
    cases: 523464,
    countryInfo: {
      flag: 'flag url',
    },
  };
  const tree = renderer
    .create(
      <Router>
        <CountryCard country={country} />
      </Router>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
