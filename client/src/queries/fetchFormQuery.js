import { gql } from "@apollo/client";

const FETCH_COMPLETED_FORM_QUERY = gql`
  query BreweryCompletedForm($name: String, $city: String, $state: String) {
    BreweryCompletedForm(name: $name, city: $city, state: $state) {
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

export default FETCH_COMPLETED_FORM_QUERY;
