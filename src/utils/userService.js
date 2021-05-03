import tokenService from './tokenService';
import axios from 'axios';

const URL = '/api/user/';

const signup = (user) =>
    axios
        .post(URL + 'signup', user)
        .then((res) => {
            if (res.statusText === 'OK') {
                tokenService.setToken(res.data.token);
            }
            return 'Success';
        })
        .catch((err) => {
            console.dir(err);
            if (err.response) {
                const errCode = err.response.data.code;
                if (errCode === 11000 || errCode === 11001) {
                    return 'Email already in use';
                }
            }
            return 'An error has occured';
        });

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
