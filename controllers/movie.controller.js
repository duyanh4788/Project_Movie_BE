const { findAllMovieService, searchmovieService, findDetailMovieService, createMovieService, updateMovieService, removemovieService } = require("../services/movie.service")
const { Movies, Tickets } = require('../models')

const findAllMovie = async (req, res) => {
    try {
        const data = await findAllMovieService()
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send(error)
    }
};

const searchMovie = async (req, res) => {
    try {
        const data = await searchmovieService(req.query.nameMovie)
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send(error)
    }
}

const findDetailMovie = async (req, res) => {
    try {
        const data = await findDetailMovieService(req.params.id)
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send(error)
    }
};

const createMovie = async (req, res) => {
    try {
        const data = req.body
        const newMovie = await createMovieService(data)
        res.status(200).send(newMovie)
    } catch (error) {
        res.status(400).send(error)
    }
};

const updateMovie = async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const moiveUpdate = await updateMovieService(id, data)
        
        res.status(200).send(moiveUpdate)
    } catch (error) {
        res.status(400).send(error)
    }
};

const removeMovie = async (req, res) => {
    try {
        const data = await removemovieService(req.params.id)
        if (data) {
            res.status(200).send(`Delete Success Movie : ${data.nameMovie}`)
        } else {
            res.status(500).send("Movie does not exist");
        }
    } catch (error) {
        res.status(400).send(error)
    }
};

const getTicket = async (req, res) => {
    try {
        const movies = await Movies.findAll({
            include: [
                {
                    model: Tickets,
                },
            ],
        });
        res.status(200).send(movies);
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = {
    findAllMovie,
    searchMovie,
    findDetailMovie,
    createMovie,
    updateMovie,
    removeMovie,
    getTicket
};
