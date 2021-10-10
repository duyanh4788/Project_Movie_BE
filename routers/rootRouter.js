const { Router } = require("express");
const { authRouter } = require("./auth.router");
const { clientRouter } = require("./client.router");
const { movieRouter } = require("./movie.router");

const rootRouter = Router()
// localhost500/api/v1/
rootRouter.use("/client", clientRouter)
rootRouter.use("/movie", movieRouter)
rootRouter.use("/auth", authRouter)

module.exports = {
    rootRouter,
}