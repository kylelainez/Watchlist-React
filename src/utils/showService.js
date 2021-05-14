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

// const getVideo = (show) => axios.get(URL + );
export default { fetchData };
