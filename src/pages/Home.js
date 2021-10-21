import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import SummaryCard from '../components/SummaryCard';
import CountryCard from '../components/CountryCard';

const Home = () => {
  const summary = useSelector((state) => state.summary);
  const countries = useSelector((state) => state.countries);
  const [state, setState] = useState(countries);

  const handleSearch = (e) => {
    let f = [...countries].filter((c) => c.country.toLowerCase().includes(e.target.value.toLowerCase()));
    f = !f.length ? [] : f;
    setState(() => f);
  };

  useEffect(() => {
    setState(() => countries);
  }, [countries]);

  return (
    <main>
      <SummaryCard summary={summary} />
      <section className="filter">
        <input placeholder="Search Country" onChange={handleSearch} />
      </section>
      <section className="card-country">
        <ul className="card-country__ul">
          {state
            && state.map((country) => (
              // eslint-disable-next-line no-underscore-dangle
              <CountryCard key={country.country} country={country} />
            ))}
        </ul>
      </section>
    </main>
  );
};

export default Home;
