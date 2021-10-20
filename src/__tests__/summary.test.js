import reducer from '../store/summary/summary';

const initialState = {};

const obj = {
  cases: 93530,
  recovered: 9000,
  deaths: 2300,
};

describe('Summary Reducer test', () => {
  it('returns the same array of object when dispatched as payload  ', () => {
    expect(
      reducer(undefined, {
        type: 'summaryStore/missions/GET_SUMMARY',
        payload: obj,
      }),
    ).toEqual(obj);
  });

  it('returns initialState Value', () => {
    expect(
      reducer(undefined, {
        type: 'summaryStore/missions/GET_SUMMARY',
        payload: initialState,
      }),
    ).toEqual({});
  });
});
