import API from '../../api';

const initialState = {};
const GET_SUMMARY = 'summaryStore/missions/GET_SUMMARY';

export const getSummary = () => async (dispatch) => {
  const data = await API.getSummary();
  if (data) {
    dispatch({
      type: GET_SUMMARY,
      payload: data,
    });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SUMMARY:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
