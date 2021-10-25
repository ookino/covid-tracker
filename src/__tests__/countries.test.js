import reducer from '../store/countries/countries';

const initialState = [];

const arr = [
  {
    country: 'Nigeria',
    cases: 93530,
    recovered: 9000,
    deaths: 2300,
  },
  {
    country: 'Mauritius',
    cases: 9353530,
    recovered: 90536300,
    deaths: 462300,
  },
];

describe('Countries Reducer test', () => {
  it('returns the same array of object when dispatched as payload  ', () => {
    expect(
      reducer(undefined, {
        type: 'countriesStore/missions/GET_COUNTRIES',
        payload: arr,
      }),
    ).toEqual(arr);
  });

  it('returns initialState Value', () => {
    expect(
      reducer(undefined, {
        type: 'countriesStore/missions/GET_COUNTRIES',
        payload: initialState,
      }),
    ).toEqual([]);
  });
});
