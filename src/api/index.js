import axios from 'axios';

const END_POINT = 'https://disease.sh/v3/covid-19';
const API = {
  getCountries: async () => {
    try {
      const response = await axios.get(`${END_POINT}/countries`);
      console.log('countries response =>', response);
      return response.data;
    } catch (error) {
      return error;
    }
  },
  getSummary: async () => {
    try {
      const response = await axios.get(`${END_POINT}/all`);
      console.log('summary response =>', response);
      return response.data;
    } catch (error) {
      return error;
    }
  },
};

export default API;
