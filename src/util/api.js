import axios from 'axios';

// TODO: pass in baseURL as a prop so it can be stored elsewhere and this class can be reused

let API = axios.create({
  baseURL: 'https://whodiditalktotest.firebaseio.com/testencounters.json',
});

export default API;
