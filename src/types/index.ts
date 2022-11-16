export interface ICountry {
  flags: IFlag;
  name: INameCountry;
  capital: string[];
  region: string;
  area: number;
  population: number;
}

interface IFlag {
  png: string;
  svg: string;
}

interface INameCountry {
  common: string;
  official: string;
  nativeName?: INativeName;
}

interface INativeName {
  spa?: INativeNameSpa;
}

interface INativeNameSpa {
  official: string;
  common: string;
}

export interface ICountryTransformed {
  flag: string;
  name: string;
  capital: string;
  region: string;
  area: number;
  population: number;
}

export enum Color {
  primary = "primary",
  secondary = "secondary",
}

export type BadgeLabel = "area" | "population";
