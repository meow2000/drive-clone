import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/user/';

class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'all');
  }

  addStar(oid) {
    return axios.post(API_URL + 'star', { headers: authHeader(), params: { oid: oid } });
  }

  deleteStar(oid) {
    return axios.post(API_URL + 'unstar', { headers: authHeader(), params: { oid: oid } });
  }

  async getListFile() {
    return await axios.get(API_URL + 'listFile', { headers: authHeader() });
  }

  uploadFile(file) {
    return axios.post(API_URL + 'uploadFile', file, { headers: authHeader() });
  }

  shareFile(name, oid) {
    return axios.post(API_URL + 'shareFile', { headers: authHeader(), params: { username: name, oid: oid } });
  }

  async downloadFile(fileName) {
    console.log(authHeader());
    return await axios.get(API_URL + `downloadFile`, { headers: authHeader(), params: { fileName: fileName }, responseType: 'blob' });
  }

  deleteFile(oid) {
    return axios.delete(API_URL + 'deleteFile', { headers: authHeader(), params: { oid: oid } });
  }

  completeDeleteFile(oid) {
    return axios.delete(API_URL + 'completedDelete', { headers: authHeader(), params: { oid: oid } });
  }

  listFileShare() {
    return axios.get(API_URL + "shareWithMe", { headers: authHeader() });
  }

  listFileBin() {
    return axios.get(API_URL + "trash", { headers: authHeader() });
  }

  listRecent() {
    return axios.get(API_URL + "getRecent", { headers: authHeader() });
  }

  listStar() {
    return axios.get(API_URL + "getStar", { headers: authHeader() });
  }

  async getUserInfo() {
    await fetch('http://localhost:8080/user/getCurrentUser', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('user')}`
      },
    }).then((response) => {
      response.json().then(data => ({
        data: data,
        status: response.status
      })).then(res => {
        localStorage.setItem("userName", res.data.name);
        localStorage.setItem("email", res.data.email);
        localStorage.setItem("used", res.data.storage);
        localStorage.setItem("storage", res.data.plan.max_storage);
        localStorage.setItem("role", res.data.role);
      })
    })
  }

  searchFile(keyword) {
    return axios.get(API_URL + "search", { headers: authHeader(), params: {keyword: keyword} })
  }

}

export default new UserService();