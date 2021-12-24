import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/user/';

class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'all');
  }

  async getListFile() {
    return await axios.get(API_URL + 'listFile', { headers: authHeader() });
  }

  upload(data) {
    debugger
    return axios.post(API_URL + 'uploadFile', data, { headers: authHeader()});
  }

  getModeratorBoard() {
    return axios.get(API_URL + 'mod', { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + 'admin', { headers: authHeader() });
  }
}

export default new UserService();