const axios = require("axios");
const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
} = require("graphql");

const BreweryType = new GraphQLObjectType({
  name: "Brewery",
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    brewery_type: { type: GraphQLString },
    street: { type: GraphQLString },
    address_2: { type: GraphQLString },
    address_3: { type: GraphQLString },
    city: { type: GraphQLString },
    state: { type: GraphQLString },
    county_province: { type: GraphQLString },
    postal_code: { type: GraphQLString },
    country: { type: GraphQLString },
    longitude: { type: GraphQLString },
    latitude: { type: GraphQLString },
    phone: { type: GraphQLString },
    website_url: { type: GraphQLString },
    updated_at: { type: GraphQLString },
    created_at: { type: GraphQLString },
  }),
});

const RootQueryType = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    BreweryByName: {
      type: new GraphQLList(BreweryType),
      args: { name: { type: GraphQLString } },
      resolve(parentValue, args) {
        return (
          axios
            .get(`https://api.openbrewerydb.org/breweries?by_name=${args.name}`)
            // .get("https://api.openbrewerydb.org/breweries")
            .then((res) => res.data)
            .then((data) => data)
            .catch((err) => console.log(err))
        );
      },
    },
    BreweryByDefault: {
      type: new GraphQLList(BreweryType),
      resolve(parentValue, args) {
        return axios
          .get(`https://api.openbrewerydb.org/breweries`)
          .then((res) => res.data)
          .then((data) => data)
          .catch((err) => console.log(err));
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQueryType,
});
