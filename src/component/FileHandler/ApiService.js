import axios from 'axios';

class ApiService {

    upload(data) {
        return axios.post("http://localhost:8080/user/uploadFile", data);
    }
}

export default new ApiService();