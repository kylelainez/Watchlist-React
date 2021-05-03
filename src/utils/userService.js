import tokenService from './tokenService';
import axios from 'axios';

const URL = '/api/user/';

const signup = (user) =>
    axios
        .post(URL + 'signup', user)
        .then((res) => {
            if (res.statusText === 'OK') {
                tokenService.setToken(res.data.token);
                return 'Success';
            }
            return 'Error';
        })
        .catch((err) => {
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
            if (res.statusText === 'OK' && res.data.token) {
                tokenService.setToken(res.data.token);
                return 'Success';
            }
            return 'Error';
        })
        .catch((err) => {
            return err.response.data.err;
        });

export default {
    signup,
    login,
};
