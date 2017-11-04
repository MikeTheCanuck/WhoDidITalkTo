import axios from 'axios';

let API = axios.create({
  baseURL: 'https://whodiditalktotest.firebaseio.com/testencounters.json',
});

export default API;
