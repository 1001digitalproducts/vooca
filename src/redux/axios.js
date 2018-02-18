import axios from 'axios';

const baseURL = 'http://abc-huxuqg1k6euubqlqxhxx.lazyrest.arizalsaputro.me/';

let instance = axios.create({
    baseURL
});

export default instance;