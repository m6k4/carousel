import axios from 'axios';
const API_HEADERS = {};
const API_CONFIG = {}
// SET API CONFIGURATION
API_HEADERS['X-Requested-With'] = 'XMLHttpRequest';

API_CONFIG.baseURL = process.env.VUE_APP_API_URL;
API_CONFIG.headers = API_HEADERS;
API_CONFIG.timeout = 10000;
API_CONFIG.withCredentials = true;

const API = axios.create(API_CONFIG);

export {
  API
};
