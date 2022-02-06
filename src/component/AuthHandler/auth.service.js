import axios from "axios";

const API_URL = "http://localhost:8080/api/";

class AuthService {
    async login(username, password) {
        const response = await axios
            .post(API_URL + "login", {
                username,
                password
            });
        if (response.data.data) {
            localStorage.setItem("user", response.data.data);
        }

        return response;
    }

    logout() {
        localStorage.clear();
    }

    register(name, email, password) {
        return axios.post(API_URL + "register", {
            name,
            email,
            password
        });
    }

    getCurrentUser() {
        return localStorage.getItem('user');
    }
}

export default new AuthService();