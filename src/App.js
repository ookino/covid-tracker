import { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getCountries } from './store/countries/countries';
import { getSummary } from './store/summary/summary';
import Home from './pages/Home';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountries());
    dispatch(getSummary());
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default App;
