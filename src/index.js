require("dotenv").config();

const express = require("express");
const { graphqlHTTP } = require("express-graphql");

const { schema, resolvers } = require("./graphql");
const connectDB = require("./db");

const app = express();
const PORT = process.env.PORT || 4000;

// Establish connection to the database
connectDB();

// Set up GraphQL endpoint
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: resolvers,
    graphiql: true,
  })
);

// Start the server
app.listen(PORT, () => {
  console.log(`GraphQL server is running at http://localhost:${PORT}/graphql`);
});
