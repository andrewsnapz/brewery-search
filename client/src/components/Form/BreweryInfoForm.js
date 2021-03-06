import React, { useReducer, useState } from "react";
import styles from "./BreweryInfoForm.module.scss";

import useFetchData from "../../custom-hooks/useFetchData";
import BaseModal from "../UI/BaseModal";
// import QueryComponent from "./QueryComponent";

const initialState = {
  handlerNameOfBrewery: "",
  handlerNameOfCity: "",
  selectState: "",
};

const formReducer = (state, action) => {
  switch (action.type) {
    case "HANDLE_NAME_OF_BREWERY":
      return { ...state, handlerNameOfBrewery: action.val };

    case "HANDLE_NAME_OF_CITY":
      return { ...state, handlerNameOfCity: action.val };

    case "SELECT_STATE":
      return { ...state, selectState: action.val };

    default:
      return { ...state };
  }
};

const BreweryInfoForm = ({ setBreweriesToDisplay, setModalOpen }) => {
  const [formState, dispatch] = useReducer(formReducer, initialState);
  const [showError, setShowError] = useState(false);
  const fetchData = useFetchData();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("inside handleSubmit");
    // return (
    //   <QueryComponent
    //     formParams={formState}
    //     setBreweriesToDisplay={setBreweriesToDisplay}
    //   />
    // );
    fetchData(formState, setBreweriesToDisplay);
  };

  return (
    <BaseModal>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h3 className={styles.form__title}>Search Breweries</h3>
        <h3 onClick={() => setModalOpen(false)} className={styles.exit}>
          X
        </h3>
        <label className={styles.form__label} htmlFor="name">
          Name of Brewery
        </label>
        <input
          className={styles.form__input}
          name="name"
          onChange={(e) =>
            dispatch({ type: "HANDLE_NAME_OF_BREWERY", val: e.target.value })
          }
        />
        <label className={styles.form__label} htmlFor="city">
          City
        </label>
        <input
          className={styles.form__input}
          name="city"
          onChange={(e) =>
            dispatch({ type: "HANDLE_NAME_OF_CITY", val: e.target.value })
          }
        />
        <label className={styles.form__label} htmlFor="state">
          State
        </label>
        <select
          name="state"
          className={styles.form__select}
          onChange={(e) =>
            dispatch({ type: "SELECT_STATE", val: e.target.value })
          }
        >
          <option value="">--</option>
          <option value="Alabama">Alabama</option>
          <option value="Alaska">Alaska</option>
          <option value="Arizona">Arizona</option>
          <option value="Arkansas">Arkansas</option>
          <option value="California">California</option>
          <option value="Colorado">Colorado</option>
          <option value="Columbia">Columbia</option>
          <option value="Connecticut">Connecticut</option>
          <option value="Delaware">Delaware</option>
          <option value="Florida">Florida</option>
          <option value="Georgia">Georgia</option>
          <option value="Hawaii">Hawaii</option>
          <option value="Idaho">Idaho</option>
          <option value="Illinois">Illinois</option>
          <option value="Indiana">Indiana</option>
          <option value="Iowa">Iowa</option>
          <option value="Kansas">Kansas</option>
          <option value="Kentucky">Kentucky</option>
          <option value="Louisiana">Louisiana</option>
          <option value="Maine">Maine</option>
          <option value="Maryland">Maryland</option>
          <option value="Massachusetts">Massachusetts</option>
          <option value="Michigan">Michigan</option>
          <option value="Minnesota">Minnesota</option>
          <option value="Mississippi">Mississippi</option>
          <option value="Missouri">Missouri</option>
          <option value="Montana">Montana</option>
          <option value="Nebraska">Nebraska</option>
          <option value="Nevada">Nevada</option>
          <option value="New Hampshire">New Hampshire</option>
          <option value="New Jersey">New Jersey</option>
          <option value="New Mexico">New Mexico</option>
          <option value="New York">New York</option>
          <option value="North Carolina">North Carolina</option>
          <option value="North Dakota">North Dakota</option>
          <option value="Ohio">Ohio</option>
          <option value="Oklahoma">Oklahoma</option>
          <option value="Oregon">Oregon</option>
          <option value="Pennsylvania">Pennsylvania</option>
          <option value="Rhode Island">Rhode Island</option>
          <option value="South Carolina">South Carolina</option>
          <option value="South Dakota">South Dakota</option>
          <option value="Tennessee">Tennessee</option>
          <option value="Texas">Texas</option>
          <option value="Utah">Utah</option>
          <option value="Vermont">Vermont</option>
          <option value="Virginia">Virginia</option>
          <option value="Washington">Washington</option>
          <option value="West Virginia">West Virginia</option>
          <option value="Wisconsin">Wisconsin</option>
          <option value="Wyoming">Wyoming</option>
        </select>
        <button className={styles.form__button}>
          <span>Search</span>
        </button>
        {showError && <p>Please fill at least one requirement!</p>}
      </form>
    </BaseModal>
  );
};

export default BreweryInfoForm;
