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
    BreweryCompletedForm: {
      type: new GraphQLList(BreweryType),

      args: {
        name: { type: GraphQLString },
        city: { type: GraphQLString },
        state: { type: GraphQLString },
      },
      resolve(parentValue, args) {
        return axios
          .get(`https://api.openbrewerydb.org/breweries?by_name=${args.name}`)
          .then((res) => res.data)
          .then((data) => {
            if (args.state.length) {
              return data.filter((brewery) => brewery.state === args.state);
            } else {
              return data;
            }
          })
          .then((data) => {
            if (args.city.length) {
              return data.filter((brewery) => brewery.city === args.city);
            } else {
              return data;
            }
          });
      },
    },
    BreweryByName: {
      type: new GraphQLList(BreweryType),
      args: { name: { type: GraphQLString } },
      resolve(parentValue, args) {
        return axios
          .get(`https://api.openbrewerydb.org/breweries?by_state=${args.name}`)
          .then((res) => res.data)
          .then((data) => data)
          .catch((err) => console.log(err));
      },
    },
    BreweryByState: {
      type: new GraphQLList(BreweryType),
      args: { state: { type: GraphQLString } },
      resolve(parentValue, args) {
        return axios
          .get(`https://api.openbrewerydb.org/breweries?by_state=${args.state}`)
          .then((res) => res.data)
          .then((data) => data)
          .catch((err) => console.log(err));
      },
    },
    BreweryByCity: {
      type: new GraphQLList(BreweryType),
      args: { city: { type: GraphQLString } },
      resolve(parentValue, args) {
        return axios
          .get(`https://api.openbrewerydb.org/breweries?by_city=${args.city}`)
          .then((res) => res.data)
          .then((data) => data)
          .catch((err) => console.log(err));
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
    BreweryByCityAndState: {
      type: new GraphQLList(BreweryType),
      args: { city: { type: GraphQLString }, state: { type: GraphQLString } },
      resolve(parentValue, args) {
        return axios
          .get(`http://api.openbrewerydb.org/breweries?by_city=${args.city}`)
          .then((res) => res.data)
          .then((data) =>
            data.filter((brewery) => brewery.state === args.state)
          )
          .catch((err) => console.log(err));
      },
    },
    BreweryByNameAndCity: {
      type: new GraphQLList(BreweryType),
      args: { name: { type: GraphQLString }, city: { type: GraphQLString } },
      resolve(parentValue, args) {
        return axios
          .get(`http://api.openbrewerydb.org/breweries?by_name=${args.name}`)
          .then((res) => res.data)
          .then((data) =>
            data.filter((brewery) => {
              brewery.city === args.city;
            })
          )
          .catch((err) => console.log(err));
      },
    },
    BreweryByNameAndState: {
      type: new GraphQLList(BreweryType),
      args: { name: { type: GraphQLString }, state: { type: GraphQLString } },
      resolve(parentValue, args) {
        return axios
          .get(`http://api.openbrewerydb.org/breweries?by_name=${args.name}`)
          .then((res) => res.data)
          .then((data) =>
            data.filter((brewery) => brewery.state === args.state)
          )
          .catch((err) => console.log(err));
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQueryType,
});
