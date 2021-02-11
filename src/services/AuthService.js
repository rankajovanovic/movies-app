import http from './BaseService';
import axios from 'axios';

class AuthService {

    async login(credentials) {
        try {
          const {data} = await http.post('/login', credentials);
          if (data.token) {
            const token = data.token;
            localStorage.setItem('token', token);
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
          }
          return data;
        } catch (e) {
          return e;
        }
      }

      async logout(token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ` + token;
        try {
          const {data} = await http.post('/logout');
          localStorage.removeItem('token');
          return data;
        } catch (e) {
          return e;
        }
      }
    
      async register(credentials) {
        try {
          const {data} = await http.post('/register', credentials);
          if (data.token) {
            const token = data.token;
            localStorage.setItem('token', token);
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
          }
          return data;
        } catch (e) {
          return e;
        }
      }
}

const authService = new AuthService();
export default authService;