import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../../components/NavBar';

it('renders NavBar Component correctly', () => {
  const tree = renderer
    .create(
      <Router>
        <NavBar />
      </Router>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
