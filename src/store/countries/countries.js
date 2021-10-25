import API from '../../api';

const initialState = [];
const GET_COUNTRIES = 'countriesStore/missions/GET_COUNTRIES';

export const getCountries = () => async (dispatch) => {
  const data = await API.getCountries();
  if (data) {
    dispatch({
      type: GET_COUNTRIES,
      payload: data,
    });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return [...action.payload];

    default:
      return state;
  }
};

export default reducer;
