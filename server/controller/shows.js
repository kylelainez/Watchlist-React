const API_KEY = process.env.TMDB_KEY;
const BASE_URL = process.env.BASE_URL;
const axios = require('axios');

const requests = {
    trending: `trending/all/week?api_key=${API_KEY}&language=en-US`,
    netflix: `discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `discover/movie?api_key=${API_KEY}&with_genres=99`,
};

const fetchData = async (req, res) => {
    axios
        .get(BASE_URL + requests[req.params.data])
        .then((response) => {
            res.json({ shows: response.data.results });
        })
        .catch((err) => console.log('error'));
    // res.json({ shows: [5, 2, 1, 2, 3, 4, 5, 2] });
};

const fetchTrailer = async (req, res) => {
    const videos = {
        movie: `movie/${req.params.data}/videos?api_key=${API_KEY}`,
        tv: `tv/${req.params.data}/videos?api_key=${API_KEY}`,
    };
    console.log(req.params.type);
    axios
        .get(BASE_URL + videos[req.params.type])
        .then((response) => {
            console.log('here');
            res.json({ video: response.data.results });
        })
        .catch((err) => console.log(err));
};

module.exports = { fetchData, fetchTrailer };
