import { gql } from "@apollo/client";

const FETCH_BY_STATE = gql`
  query SearchByState($state: String) {
    BreweryByState(state: $state) {
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

export default FETCH_BY_STATE;
