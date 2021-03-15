import { Select } from "@/components";
import { useWeatherApi } from "@/hooks";
import { Options, AllowedCity } from "@/types";
import React, { FunctionComponent } from "react";
import { Forecast } from "../Forecast";
import { PrincipalWeather } from "../PrincipalWeather";

export const WeatherWidget: FunctionComponent = () => {
  const {
    state: { isError, weather, isFetching },
    setCity,
  } = useWeatherApi({ initialFetch: true });

  const countries: Options<AllowedCity> = [
    { title: "Buenos Aires", value: "Buenos Aires" },
    { title: "Berlin", value: "Berlin" },
    { title: "Tokyo", value: "Tokyo" },
    { title: "Rio de Janeiro", value: "Rio de Janeiro" },
    { title: "New York", value: "New York" },
  ];

  const handleChange = (value: string) => {
    setCity(value as AllowedCity);
  };

  return (
    <>
      <div>
        <p>Elegí la ciudad sobre la cual querés consultar el clima 😄</p>
        <br />
        <Select
          isError={isError || !weather}
          options={countries}
          handleChange={handleChange}
        />
      </div>
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
