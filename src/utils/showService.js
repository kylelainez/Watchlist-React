import axios from 'axios';
import tokenService from './tokenService';

const URL = '/api/tmdb/';

const fetchData = (data) => {
    axios
        .get(URL + data, {
            headers: {
                Authorization: 'Bearer ' + tokenService.getToken(),
            },
        })
        .then((res) => {
            console.log(res);
        })
        .catch((err) => console.log(err));
};

export default { fetchData };
