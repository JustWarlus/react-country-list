import React from "react";
import { ICountryTransformed } from "../../types";
import { CountryItem } from "../CountryItem/CountryItem";

interface ICountryProps {
  countries: ICountryTransformed[];
}

export const CountryList = ({ countries }: ICountryProps) => {
  return (
    <ul className="list-group">
      {countries.map((countryItem: ICountryTransformed) => (
        <CountryItem country={countryItem} />
      ))}
    </ul>
  );
};
