const API_KEY = process.env.TMDB_KEY;
const BASE_URL = process.env.BASE_URL;
const axios = require('axios');

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

const fetchData = async (req, res) => {
    axios
        .get(BASE_URL + 'trending/all/day' + `?api_key=${API_KEY}`)
        .then((response) => {
            res.json({ shows: response.data.results });
        });
    // res.json({ shows: [5, 2, 1, 2, 3, 4, 5, 2] });
};

module.exports = { fetchData };