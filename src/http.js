import axios from 'axios';

const http = axios;
http.defaults.baseURL = process.env.API_URL;

export default http;
