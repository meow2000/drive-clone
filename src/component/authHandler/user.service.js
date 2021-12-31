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
    return axios.post(API_URL + 'uploadFile', file, { headers: authHeader() });
  }

  async downloadFile(fileName) {
    console.log(authHeader());
    return await axios.get(API_URL + `downloadFile`, { headers: authHeader(), params: { fileName: fileName }, responseType: 'blob' });
  }

  deleteFile(oid) {
    return axios.delete(API_URL + 'deleteFile', { headers: authHeader(), params: { oid: oid } });
  }

  listFileShare() {
    return axios.get(API_URL + "shareWithMe", { headers: authHeader() });
  }

  listFileBin() {
    return axios.get(API_URL + "trash", { headers: authHeader() });
  }
}

export default new UserService();