const { Router } = require("express");
const { Clients } = require("../models")
const { findAllClient, searchClient, findDetailClient, createClient, removeClient, updateClient, uploadAvatar, uploadAllbums, findMovieByClient } = require("../controllers/client.controller");

const { checkExist, checkAccountExist, checkEmailExist, checkPhoneExist } = require("../middlewares/validations/check_exist.validation");
const { checkEmail, checkNumber, checkEmpty } = require("../middlewares/validations/checkPattern.validation");
const { checkDefaultType } = require("../middlewares/validations/check_default.validation");
const { authenTicate, authorize } = require("../middlewares/auths/verifyToken.middleware");
const { uploadImgaesSingle, uploadImagesArray } = require("../middlewares/uploads/uploadImage.middleware");

const clientRouter = Router()
// localhost500/api/v1/client
// get
clientRouter.get("/", findAllClient)
// search
clientRouter.get("/searchClient", searchClient)
// find movie by client
clientRouter.get("/find-movie-by-client", findMovieByClient)
// get by id
clientRouter.get("/:id", checkExist(Clients), findDetailClient)
// post
clientRouter.post("/", checkAccountExist(Clients), checkEmailExist(Clients), checkPhoneExist(Clients), checkEmpty, checkEmail, checkNumber, checkDefaultType, createClient)
// upload avata
clientRouter.post("/uploadAvatar", authenTicate, uploadImgaesSingle(), uploadAvatar)
// upload allbum not
clientRouter.post("/uploadAllbums", authenTicate, uploadImagesArray(), uploadAllbums)
// put
clientRouter.put("/:id", checkExist(Clients), checkEmpty, checkEmail, checkNumber, checkDefaultType, updateClient)
//delete
clientRouter.delete("/:id", authenTicate, authorize(["SUPER_ADMIN", "ADMIN"]), checkExist(Clients), removeClient)

module.exports = {
    clientRouter,
}
