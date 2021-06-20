const router = require("express").Router();
const Axios = require("axios");

const API_KEY = process.env.API_KEY;
const BASE_URL = process.env.BASE_URL;

router.get("/popular", async (req, res, next) => {
  try {
    // popular movies
    const movies = await Axios.get(
      `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    );
    res.json(movies.data.results);
  } catch (error) {
    next(error);
  }
});

router.get("/tranding", async (req, res, next) => {
  try {
    // tranding
    const tranding = await Axios.get(
      `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-US&page=1`
    );
    res.json(tranding.data.results);
  } catch (error) {
    next(error);
  }
});

router.get("/tv", async (req, res, next) => {
  try {
    // popular tv shows
    const tv = await Axios.get(
      `${BASE_URL}/tv/popular?api_key=${API_KEY}&language=en-US&page=1`
    );
    res.json(tv.data.results);
  } catch (error) {
    next(error);
  }
});

router.get("/genre/movie/list", async (req, res, next) => {
  try {
    // Movie genres
    const genre = await Axios.get(
      `${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`
    );
    res.json(genre.data.genres);
  } catch (error) {
    next(error);
  }
});

router.get("/search/movie", async (req, res, next) => {
  try {
    // Movie genres
    console.log(req.query);
    const search = await Axios.get(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=true&query=${req.query.query}`
    );
    res.json(search.data.results);
  } catch (error) {
    next(error);
  }
});
router.get("/movie/:movieId/similar", async (req, res, next) => {
  try {
    // popular movies
    const movies = await Axios.get(
      `${BASE_URL}/movie/${req.params.movieId}/similar?api_key=${API_KEY}&language=en-US`
    );
    res.json(movies.data.results);
  } catch (error) {
    next(error);
  }
});

router.get("/movie/:movieId", async (req, res, next) => {
  try {
    // Movie genres
    const search = await Axios.get(
      `${BASE_URL}/movie/${req.params.movieId}?api_key=${API_KEY}&language=en-US`
    );
    res.json(search.data);
  } catch (error) {
    next(error);
  }
});

router.get("/tv/:showId", async (req, res, next) => {
  try {
    // Movie genres
    const search = await Axios.get(
      `${BASE_URL}/tv/${req.params.showId}?api_key=${API_KEY}&language=en-US`
    );
    res.json(search.data);
  } catch (error) {
    next(error);
  }
});
module.exports = router;
