import axios from 'axios';
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
const token = localStorage.getItem('userDataToken');
const config = {
    headers: {
        Authorization: `Bearer ${token}`
    }
};
class ApiService {
    SignIn(data) {
        return axios.post(API_BASE_URL + 'login/', data);
    }
    SignUp(data) {
        return axios.post(API_BASE_URL + 'register/', data);
    }
    ForgotPassword(data) {
        return axios.post(API_BASE_URL + 'forgotPassword/', data);
    }
    LogOut() {
        return axios.get(API_BASE_URL + 'logout/', config);
    }
    getToken() {

        return axios.get(API_BASE_URL + 'me/', config);
    }
}

export default new ApiService()