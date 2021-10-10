const { Op } = require('sequelize');
const { Movies } = require('../models')

// get
const findAllMovieService = async () => {
    const listMovie = await Movies.findAll();
    if (listMovie) {
        return listMovie
    } else {
        return false
    }
}
// get search
const searchmovieService = async (nameMovie) => {
    let movieBySearch
    if (nameMovie) {
        movieBySearch = await Movies.findAll({
            where: {
                nameMovie: {
                    [Op.like]: `%${nameMovie}%`
                }
            }
        });
        return movieBySearch
    } else {
        movieBySearch = await Movie.findAll()
        return movieBySearch
    }
}
// get by code
const findDetailMovieService = async (account) => {
    const movieByAccount = await Movies.findByPk(account)
    if (movieByAccount) {
        return movieByAccount
    } else {
        return false
    }
}
// post
const createMovieService = async (data) => {
    const newMovie = await Movies.create(data)
    if (newMovie) {
        return newMovie
    } else {
        return false
    }

}

// put
const updateMovieService = async (id, data) => {
    await Movies.update(data, {
        where: {
            id,
        }
    })
    const movieByUpdate = findDetailMovieService(id)
    if (movieByUpdate) {
        return movieByUpdate
    } else {
        return false
    }

}
// delete
const removemovieService = async (id) => {
    const movieRemove = await findDetailMovieService(id)
    if (movieRemove) {        
        await Movies.destroy({
            where: {
                id
            }
        })
        return movieRemove
    } else {
        return false
    }
}

const getTicketServices = () =>{

}


module.exports = {
    findAllMovieService,
    searchmovieService,
    findDetailMovieService,
    createMovieService,
    updateMovieService,
    removemovieService,
    getTicketServices
}