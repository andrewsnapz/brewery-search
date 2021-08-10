const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const app = express();
const bodyParser = require("body-parser");
const schema = require("./schema/schema.js");

const cors = require("cors");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

// app.get("/", (req, res) => {

// });

// app.get("/", (req, res) => {});

module.exports = app;
