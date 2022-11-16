import { ICountry, ICountryTransformed } from "../types";

export const getTransformCountries = (
  countries: ICountry[]
): ICountryTransformed[] => {
  return countries.map((country) => {
    return {
      flag: country.flags.svg,
      name: country.name.common,
      capital: country.capital[0],
      region: country.region,
      area: country.area,
      population: country.population,
    };
  });
};
