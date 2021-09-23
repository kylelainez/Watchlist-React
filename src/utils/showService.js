import axios from 'axios';
import tokenService from './tokenService';

const URL = '/api/tmdb/';

const fetchData = (data) =>
    axios
        .get(URL + data, {
            headers: {
                Authorization: 'Bearer ' + tokenService.getToken(),
            },
        })
        .then((res) => {
            return res.data.shows;
        })
        .catch((err) => console.log(err));

const fetchTrailer = (data, type) =>
    axios
        .get(URL + `trailer/${data}/${type}`, {
            headers: {
                Authorization: 'Bearer ' + tokenService.getToken(),
            },
        })
        .then((res) => {
            return res.data.video;
        })
        .catch((err) => console.log(err));

const fetchShow = (type, id) =>
    axios
        .get(`${URL}${type}/${id}`, {
            headers: {
                Authorization: 'Bearer ' + tokenService.getToken(),
            },
        })
        .then((res) => res.data)
        .catch((err) => console.log(err));
export default { fetchData, fetchTrailer, fetchShow };
