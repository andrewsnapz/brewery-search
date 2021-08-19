import { gql } from "@apollo/client";

const FETCH_DEFAULT = gql`
  query GetDefault {
    BreweryByDefault {
      id
      name
      phone
      city
      state
      website_url
      latitude
      longitude
    }
  }
`;

export default FETCH_DEFAULT;
