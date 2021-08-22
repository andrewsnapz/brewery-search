import React, { useState } from "react";
import styles from "./App.module.scss";

import { useQuery } from "@apollo/client";
import FETCH_DEFAULT from "./queries/fetchDefault";

import Header from "./components/Layout/Header";
import BaseBrewery from "./components/UI/BaseBrewery";

const App = () => {
  const [breweriesToDisplay, setBreweriesToDisplay] = useState([]);
  const { loading, error } = useQuery(FETCH_DEFAULT, {
    onCompleted: (data) => {
      setBreweriesToDisplay([...data.BreweryByDefault]);
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return `Error: ${error.message}`;

  const listOfBreweries = breweriesToDisplay.map((brewery) => {
    return (
      <li key={brewery.id}>
        <BaseBrewery
          breweryName={brewery.name}
          city={brewery.city}
          state={brewery.state}
          phone={brewery.phone}
          website_url={brewery.website_url}
          latitude={brewery.latitude}
          longitude={brewery.longitude}
        />
      </li>
    );
  });

  return (
    <div className={styles.container}>
      <Header setBreweriesToDisplay={setBreweriesToDisplay} />
      <ul>{listOfBreweries}</ul>
    </div>
  );
};

export default App;
