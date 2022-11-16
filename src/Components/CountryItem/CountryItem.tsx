import React from "react";
import { Color, ICountryTransformed } from "../../types";
import { Badge } from "../Badge/Badge";

interface ICountryItem {
  country: ICountryTransformed;
}

export const CountryItem = ({ country }: ICountryItem) => {
  return (
    <li
      className="list-group-item d-flex justify-content-between align-items-center"
      key={country.name}>
      <img
        width={100}
        className="img-thumbnail"
        src={country.flag}
        alt={country.name}
      />
      <span className="col">{country.name}</span>
      <span className="col">{country.capital}</span>
      <span className="col">{country.region}</span>

      <Badge badgeLabel="area" value={country.area} color={Color.primary} />
      <Badge
        badgeLabel="population"
        value={country.population}
        color={Color.secondary}
      />
    </li>
  );
};
