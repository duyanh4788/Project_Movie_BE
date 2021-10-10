const express = require("express");
const path = require('path')
const { rootRouter } = require("../routers/rootRouter");
const cors = require("cors")
const app = express()
const port = 7000;

// set req => json
app.use(express.json())
// set up cors
app.use(cors())

// setup graphql
const { graphqlHTTP } = require('express-graphql');
const { graphqlSchema } = require("../graphql/schema");
const { graphqlResolvers } = require("../graphql/resolvers");
app.use("/graphql", graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolvers,
    graphiql: true,// if true start graphql
}))

// setup static file
const publicPathDirectory = path.join(__dirname, "../public")
app.use("/public", express.static(publicPathDirectory))

// localhost:7000
app.get("/", (req, res) => {
    res.send("Wellcome Project Movie")
})

// localhost:7000/api/v1/isers
app.use("/api/v1", rootRouter);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})

