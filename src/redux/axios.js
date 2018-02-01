import axios from 'axios';

const baseURL = '';

let instance = axios.create({
    baseURL: baseURL
});

export default instance;