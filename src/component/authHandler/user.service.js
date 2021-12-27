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

  uploadFile(file) {
    return axios.post(API_URL + 'uploadFile', file, { headers: authHeader()});
  }

  downloadFile(fileName) {
    debugger
    console.log(authHeader());
    return axios.get(API_URL + 'downloadFile', {params: {"fileName": fileName}}, { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + 'admin', { headers: authHeader() });
  }
}

export default new UserService();