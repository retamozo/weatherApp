import { Dispatch, SetStateAction } from "react";

type Coord = {
  lon: number;
  lat: number;
};

export type WeatherCondition =
  | "Thunderstorm"
  | "Drizzle"
  | "Rain"
  | "Snow"
  | "Clear"
  | "Clouds"
  | "";

type Weather = {
  id: number;
  main: WeatherCondition;
  description: string;
  icon: string;
}[];

type Main = {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
};

type Sys = {
  [key: string]: unknown;
  sunrise: number;
  sunset: number;
};

export type AllowedCity =
  | "Buenos Aires"
  | "Berlin"
  | "Tokyo"
  | "Rio de Janeiro"
  | "New York";

type DailyTemperatureKey = "day" | "min" | "max" | "night" | "eve" | "morn";

export type WeatherApi = {
  coord: Coord;
  weather: Weather;
  main: Main;
  visibility: number;
  wind: { speed: number; deg: number };
  clouds: { all: number };
  dt: number;
  sys: Sys;
  name: string;
  [key: string]: unknown;
};

export type DailyForecast = {
  dt: number;
  sunrise: number;
  sunset: number;
  temp: Record<DailyTemperatureKey, number>;
  feels_like: Partial<Record<DailyTemperatureKey, number>>
  weather: Weather;
  clouds: number;
  pop: number;
  uvi: number;
  [key: string]: unknown;
};

export type ForecastApi = {
  lat: number
  lon: number
  timezone: string;
  timezone_offset: number;
  daily: Array<DailyForecast>;
};


export interface Params {
  initialFetch?: boolean;
}

export type DayAndForecast = {
  current: WeatherApi;
  forecast: ForecastApi;
};

export type WeatherState = {
  isFetching: boolean;
  isError: boolean;
  weather?: DayAndForecast;
};

export type UseWeatherApi = (
  params: Params,
) => {
  state: WeatherState;
  setCity: Dispatch<SetStateAction<AllowedCity>>
};

export type GetWeatherByCity = (
  city: AllowedCity,
) => Promise<any>;

export type Options<Title> = {
  title: Title
  value: string
}[]