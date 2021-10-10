const { Router } = require("express");
const { Movies } = require("../models");
const { findAllMovie, searchMovie, findDetailMovie, createMovie, removeMovie, updateMovie, getTicket } = require("../controllers/movie.controller");
const { checkExist } = require("../middlewares/validations/check_exist.validation");

const movieRouter = Router()

// localhost500/api/v1/movie
// get
movieRouter.get("/", findAllMovie)
// search
movieRouter.get("/searchMovie", searchMovie)
// get by id
// movieRouter.get("/:id", checkExist(Movies), findDetailMovie)
// post
movieRouter.post("/", createMovie)
//put
movieRouter.put("/:id", checkExist(Movies), updateMovie)
// delete
movieRouter.delete("/:id", checkExist(Movies), removeMovie)
// get tickets
movieRouter.get("/get-ticket", getTicket)

module.exports = {
    movieRouter,
}
