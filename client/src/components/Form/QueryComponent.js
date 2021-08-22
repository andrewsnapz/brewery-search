// import React from "react";
import { useLazyQuery } from "@apollo/client";

import FETCH_COMPLETED_FORM_QUERY from "../../queries/fetchFormQuery";

const QueryComponent = ({ formParams, setBreweriesToDisplay }) => {
  const nameOfCity = formParams.handlerNameOfCity.trim();
  const nameOfBrewery = formParams.handlerNameOfBrewery.trim();
  const nameOfState = formParams.selectState.trim();

  const [
    completedFormSearch,
    { completedFormLoading, completedFormData, completedFormError },
  ] = useLazyQuery(FETCH_COMPLETED_FORM_QUERY, {
    fetchPolicy: "network-only",
    onCompleted: (data) =>
      setBreweriesToDisplay([...data.BreweryCompletedForm]),
  });

  if (nameOfCity.length && nameOfBrewery.length && nameOfState.length) {
    completedFormSearch({
      variables: { name: nameOfBrewery, city: nameOfCity, state: nameOfState },
    });
  }

  return null;
};

export default QueryComponent;
