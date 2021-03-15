import { Container, Select } from "@/components";
import { useWeatherApi } from "@/hooks";
import { WeatherApi, ForecastApi, Options, AllowedCity } from "@/types";
import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { Forecast } from "../Forecast";
import { PrincipalWeather } from "../PrincipalWeather";

export const WeatherWidget: FunctionComponent = () => {
  const {
    state: { isError, weather, isFetching },
    setCity,
  } = useWeatherApi({ initialFetch: true });

  console.log(weather?.current);

  const curr: WeatherApi = {
    coord: {
      lon: -58.3772,
      lat: -34.6132,
    },
    weather: [
      {
        id: 800,
        main: "Clear",
        description: "cielo claro",
        icon: "01n",
      },
    ],
    base: "stations",
    main: {
      temp: 24.9,
      feels_like: 22.84,
      temp_min: 23.89,
      temp_max: 25.56,
      pressure: 1017,
      humidity: 57,
    },
    visibility: 10000,
    wind: {
      speed: 5.66,
      deg: 100,
    },
    rain: {
      "1h": 0.1,
    },
    clouds: {
      all: 0,
    },
    dt: 1615767089,
    sys: {
      type: 1,
      id: 8224,
      country: "AR",
      sunrise: 1615715524,
      sunset: 1615760000,
    },
    timezone: -10800,
    id: 3435910,
    name: "Buenos Aires",
    cod: 200,
  };

  const fore: ForecastApi = {
    lat: -34.6132,
    lon: -58.3772,
    timezone: "America/Argentina/Buenos_Aires",
    timezone_offset: -10800,
    daily: [
      {
        dt: 1615737600,
        sunrise: 1615715524,
        sunset: 1615760000,
        temp: {
          day: 298.69,
          min: 294.41,
          max: 300.32,
          night: 298.05,
          eve: 298.62,
          morn: 294.49,
        },
        feels_like: {
          day: 297.21,
          night: 294.98,
          eve: 296.61,
          morn: 291.3,
        },
        pressure: 1017,
        humidity: 34,
        dew_point: 281.52,
        wind_speed: 1.63,
        wind_deg: 48,
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "cielo claro",
            icon: "01d",
          },
        ],
        clouds: 0,
        pop: 0,
        uvi: 9.28,
      },
      {
        dt: 1615824000,
        sunrise: 1615801972,
        sunset: 1615846317,
        temp: {
          day: 299.55,
          min: 295.12,
          max: 300.79,
          night: 297.66,
          eve: 299.81,
          morn: 295.12,
        },
        feels_like: {
          day: 298.97,
          night: 299.07,
          eve: 298.31,
          morn: 293.17,
        },
        pressure: 1014,
        humidity: 45,
        dew_point: 286.33,
        wind_speed: 2.39,
        wind_deg: 356,
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "lluvia ligera",
            icon: "10d",
          },
        ],
        clouds: 40,
        pop: 0.55,
        rain: 0.56,
        uvi: 8.17,
      },
      {
        dt: 1615910400,
        sunrise: 1615888420,
        sunset: 1615932633,
        temp: {
          day: 295.63,
          min: 292.37,
          max: 297.49,
          night: 292.98,
          eve: 292.63,
          morn: 295.92,
        },
        feels_like: {
          day: 295.58,
          night: 291.78,
          eve: 292.08,
          morn: 293.42,
        },
        pressure: 1011,
        humidity: 61,
        dew_point: 288.07,
        wind_speed: 2.17,
        wind_deg: 27,
        weather: [
          {
            id: 501,
            main: "Rain",
            description: "lluvia moderada",
            icon: "10d",
          },
        ],
        clouds: 100,
        pop: 1,
        rain: 10.94,
        uvi: 3.59,
      },
      {
        dt: 1615996800,
        sunrise: 1615974867,
        sunset: 1616018950,
        temp: {
          day: 293.73,
          min: 290.83,
          max: 294.85,
          night: 290.83,
          eve: 291.76,
          morn: 292.32,
        },
        feels_like: {
          day: 291.2,
          night: 285.4,
          eve: 286.77,
          morn: 290.24,
        },
        pressure: 1013,
        humidity: 70,
        dew_point: 288.25,
        wind_speed: 5.88,
        wind_deg: 185,
        weather: [
          {
            id: 501,
            main: "Rain",
            description: "lluvia moderada",
            icon: "10d",
          },
        ],
        clouds: 99,
        pop: 0.86,
        rain: 3.96,
        uvi: 5.25,
      },
      {
        dt: 1616083200,
        sunrise: 1616061315,
        sunset: 1616105266,
        temp: {
          day: 292.15,
          min: 287.87,
          max: 294.46,
          night: 293.13,
          eve: 293.99,
          morn: 287.87,
        },
        feels_like: {
          day: 289.9,
          night: 291.52,
          eve: 292.52,
          morn: 283.84,
        },
        pressure: 1018,
        humidity: 51,
        dew_point: 281.76,
        wind_speed: 2.77,
        wind_deg: 157,
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "cielo claro",
            icon: "01d",
          },
        ],
        clouds: 0,
        pop: 0,
        uvi: 8.86,
      },
      {
        dt: 1616169600,
        sunrise: 1616147762,
        sunset: 1616191582,
        temp: {
          day: 294.4,
          min: 291.62,
          max: 296.27,
          night: 295.09,
          eve: 296.13,
          morn: 291.62,
        },
        feels_like: {
          day: 293.01,
          night: 293.45,
          eve: 294.7,
          morn: 290.25,
        },
        pressure: 1014,
        humidity: 54,
        dew_point: 284.8,
        wind_speed: 2.69,
        wind_deg: 32,
        weather: [
          {
            id: 802,
            main: "Clouds",
            description: "nubes dispersas",
            icon: "03d",
          },
        ],
        clouds: 27,
        pop: 0,
        uvi: 1.8,
      },
      {
        dt: 1616256000,
        sunrise: 1616234209,
        sunset: 1616277898,
        temp: {
          day: 298.63,
          min: 293.98,
          max: 300.37,
          night: 298.37,
          eve: 300.3,
          morn: 293.98,
        },
        feels_like: {
          day: 299.65,
          night: 298.57,
          eve: 301.51,
          morn: 293.26,
        },
        pressure: 1013,
        humidity: 55,
        dew_point: 288.65,
        wind_speed: 1.26,
        wind_deg: 325,
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "lluvia ligera",
            icon: "10d",
          },
        ],
        clouds: 0,
        pop: 0.3,
        rain: 0.13,
        uvi: 2,
      },
      {
        dt: 1616342400,
        sunrise: 1616320656,
        sunset: 1616364214,
        temp: {
          day: 294.98,
          min: 292.03,
          max: 295.34,
          night: 292.18,
          eve: 293.82,
          morn: 292.03,
        },
        feels_like: {
          day: 292.03,
          night: 287.77,
          eve: 289.28,
          morn: 288.69,
        },
        pressure: 1018,
        humidity: 64,
        dew_point: 287.86,
        wind_speed: 6.38,
        wind_deg: 111,
        weather: [
          {
            id: 803,
            main: "Clouds",
            description: "muy nuboso",
            icon: "04d",
          },
        ],
        clouds: 69,
        pop: 0,
        uvi: 2,
      },
    ],
  };

  console.log(weather?.forecast);

  const countries: Options<AllowedCity> = [
    { title: "Buenos Aires", value: "Buenos Aires" },
    { title: "Berlin", value: "Berlin" },
    { title: "Tokyo", value: "Tokyo" },
    { title: "Rio de Janeiro", value: "Rio de Janeiro" },
    { title: "New York", value: "New York" },
  ];

  const handleChange = (value: string) => {
    console.log("VALUE", value);
    setCity(value as AllowedCity);
  };

  return (
    <>
      <Header>
        <p>Elegí la ciudad sobre la cual querés consultar el clima 😄</p>
        <br />
        <Select
          isError={isError || !weather}
          options={countries}
          handleChange={handleChange}
        />
      </Header>
      <br />
      <PrincipalWeather
        isFetching={isFetching}
        isError={isError}
        weather={weather?.current}
      />
      <br />
      <Forecast
        isFetching={isFetching}
        isError={isError}
        forecast={weather?.forecast}
      />
    </>
  );
};

const Header = styled.div`
  position: absolute;
  top: 20%;
`;
