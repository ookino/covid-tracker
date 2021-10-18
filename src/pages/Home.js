import { useSelector } from 'react-redux';

const Home = () => {
  const summary = useSelector((state) => state.summary);
  const countries = useSelector((state) => state.countries);

  return (
    <ul>
      <li>{JSON.stringify(summary)}</li>
      <li>{JSON.stringify(countries)}</li>
    </ul>
  );
};

export default Home;
