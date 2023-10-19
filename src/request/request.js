import axios from 'axios'
const instance = axios.create({
    baseURL: `http://cloud-music.pl-fe.cn/`,
    withCredentials: true

});

axios.interceptors.request.use(function (config) {
    store.isLoading = true
    return config;
}, function (error) {
    return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
    store.isLoading = false;
    return response;
}, function (error) {
    return Promise.reject(error);
});

export default instance;