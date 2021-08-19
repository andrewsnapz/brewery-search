import React from "react";
import styles from "./App.module.scss";

import { useQuery } from "@apollo/client";
import FETCH_DEFAULT from "./queries/fetchDefault";

import Header from "./components/Layout/Header";
import BaseBrewery from "./components/UI/BaseBrewery";

const App = () => {
  const { loading, error, data } = useQuery(FETCH_DEFAULT);

  if (loading) return <p>Loading...</p>;
  if (error) return `Error: ${error.message}`;

  const listOfBreweries = data.BreweryByDefault.map((brewery) => {
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
      <Header />
      <ul>{listOfBreweries}</ul>
    </div>
  );
};

export default App;
