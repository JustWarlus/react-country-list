import React from "react";
import { CountryList } from "./Components/CountryList/CountryList";
import countriesApi from "./country-data.json";
import { getTransformCountries } from "./mappers/transformCountries";

export const App = () => {
  const transformCountries = getTransformCountries(countriesApi);
  return (
    <div className="container">
      <h1>Country List</h1>
      <CountryList countries={transformCountries} />
    </div>
  );
};
