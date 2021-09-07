import { useLazyQuery } from "@apollo/client";
import FETCH_FORM_DEFAULT from "../queries/fetchFormQuery";

const useFetchData = (formState, setBreweriesToDisplay) => {
  console.log(formState);
  const nameOfBrewery = formState.handlerNameOfBrewery.trim();
  const nameOfCity = formState.handlerNameOfCity.trim();
  const nameOfState = formState.selectState.trim();

  console.log(nameOfBrewery);
  console.log(nameOfCity);
  console.log(nameOfState);

  let isLoading = completedFormLoading;
  let error = completedFormError;
  let data = completedFormData;

  const [
    completedFormSearch,
    { completedFormLoading, completedFormData, completedFormError },
  ] = useLazyQuery(FETCH_FORM_DEFAULT, {
    fetchPolicy: "network-only",
    onCompleted: (data) => {
      setBreweriesToDisplay([...data.BreweryCompletedForm]);
    },
  });

  if (nameOfCity.length && nameOfBrewery.length && nameOfState.length) {
    completedFormSearch({
      variables: {
        name: nameOfBrewery,
        city: nameOfCity,
        state: nameOfState,
      },
    });
  }

  return {
    isLoading,
    error,
    data,
  };
};

export default useFetchData;
