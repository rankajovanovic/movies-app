import axios from 'axios';

const options = {
    baseURL: 'http://localhost:3000/api/'
}

const HTTP = axios.create(options);

HTTP.interceptors.request.use(function(request) {
    const token = JSON.parse(localStorage.getItem('token'));
    if (token) {
        request.headers['Authorization'] = `Bearer ${token}`;
    }
});

HTTP.interceptors.response.use(async function (response) {
    const token = JSON.parse(localStorage.getItem('token'));
    if (token && response.status == 401) {
        const { data } = await HTTP.post('/refresh-token');
        localStorage.setItem('token', data.token);
    }
})

export default HTTP;
