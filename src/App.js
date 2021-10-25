import { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getCountries } from './store/countries/countries';
import { getSummary } from './store/summary/summary';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Details from './pages/Details';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountries());
    dispatch(getSummary());
  }, [dispatch]);

  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/details/:countryName" component={Details} />
      </Switch>
    </Router>
  );
};

export default App;
