import tokenService from './tokenService';
import axios from 'axios';

const URL = '/api/user/';

const signup = (user) =>
    axios
        .post(URL + 'signup', user)
        .then((res) => {
            if (res.ok) return res.json();
        })
        .then(({ token }) => tokenService.setToken(token));

const login = (user) =>
    axios
        .post(URL + 'login', user)
        .then((res) => {
            if (res.ok) return res.json();
        })
        .then(({ token }) => tokenService.setToken(token));

export default {
    signup,
    login,
};
