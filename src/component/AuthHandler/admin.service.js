import axios from 'axios'
import authHeader from './auth-header';
const API_URL = 'http://localhost:8080/admin/';

class AdminService {
    async getListUser() {
        return await fetch(API_URL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('user')}`
            },
        })
    }

    deleteUser(id) {
        return axios.delete(API_URL + 'delete/' + id, { headers: authHeader()});
    }
}

export default new AdminService();
