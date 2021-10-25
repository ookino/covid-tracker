import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import SummaryCard from '../../components/SummaryCard';

it('renders SummaryCard Component correctly', () => {
  const summary = {
    cases: 43564675,
    recovered: 523464,
    deaths: 23543,
  };
  const tree = renderer
    .create(
      <Router>
        <SummaryCard summary={summary} />
      </Router>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
