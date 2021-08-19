import { gql } from "@apollo/client";

const FETCH_FORM_QUERY = gql`
  query BreweryName($name: String, $city: String, $state: String) {
    BreweryByName(name: $name, city: $city, state: $state) {
      name
      city
      state
    }
  }
`;

export default FETCH_FORM_QUERY;
