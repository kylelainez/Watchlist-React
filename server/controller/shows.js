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
    if (req.params.data)
        axios
            .get(BASE_URL + requests[req.params.data])
            .then((response) => {
                res.json({ shows: response.data.results });
            })
            .catch((err) => console.log('error fetchdata'));
    // res.json({ shows: [5, 2, 1, 2, 3, 4, 5, 2] });
};

const fetchTrailer = async (req, res) => {
    const videos = {
        movie: `movie/${req.params.data}/videos?api_key=${API_KEY}`,
        tv: `tv/${req.params.data}/videos?api_key=${API_KEY}`,
    };
    axios
        .get(BASE_URL + videos[req.params.type])
        .then((response) => {
            res.json({ video: response.data.results });
        })
        .catch((err) => console.log(err));
};

const fetchShow = (req, res) => {
    console.log(req.params);
    if (req.params.id)
        axios
            .get(
                `${BASE_URL}${req.params.type}/${req.params.id}?api_key=${API_KEY}`
            )
            .then((response) => res.json(response.data))
            .catch((err) => console.log(err));
};

module.exports = { fetchData, fetchTrailer, fetchShow };
