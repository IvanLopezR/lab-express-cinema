const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get("/movies", (req, res, next) => {
  Movie.find().then(movies => {
    res.render('movies', {movies})
  }).catch((err) => {
    console.log(err)
  })
});

router.get("/movie/:ID", (req, res) => {
  Movie.findById(req.params.ID, (err, movie) => {
    res.render('movie', movie)
  });
})

router.post("/movie/:id", (req, res, next) => {
  Movie.find(req.params.id).then(movie => {
    res.render('/movie', {movie})
  }).catch((err) => {
    console.log(err)
  })
});

module.exports = router;
